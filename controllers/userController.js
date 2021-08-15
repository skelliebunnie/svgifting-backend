const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const db = require('../models');

const jwt = require('jsonwebtoken');
const auth = require("./auth.js");

require('dotenv').config();

// const authenticateUser = (req) => {
// 	let token = false;
// 	let data = false;
// 
// 	if(!req.headers || !req.headers.authorization) {
// 		token = false;
// 		return false;
// 
// 	} else {
// 		token = req.headers.authorization.split(" ")[1];
// 	}
// 
// 	if(token) {
// 		data = jwt.verify(token, process.env.token, (error, data) => {
// 			if(error) {
// 				console.error(error);
// 				return false;
// 			} else {
// 				return data;
// 			}
// 		})
// 	} else if(req.body.token) {
// 		data = jwt.verify(req.body.token, process.env.token, (error, data) => {
// 			if(error) {
// 				console.error(error);
// 				return false;
// 			} else {
// 				return data;
// 			}
// 		})
// 	}
// 
// 	return data;
// }

// auth route to authenticate user ... when? on project load!
router.get('/auth', (req, res) => {
	let tokenData = authenticateUser(req);

	if(tokenData) {
		// console.log("auth tokenData", tokenData)
		db.User.findOne({
			where: {
				id: tokenData.id
			},
			// include: [db.Project]
		}).then(user => {
			res.json(user);

		}).catch(err => {
			res.status(500).json(err);

		})
	} else{
		res.status(403).send('auth failed');

	}
});

// login (for returning users)
router.post('/login', (req, res) => {
	db.User.findOne({
		where: {
			username: req.body.username
		},
		include: [
			{
				model: db.Project
			}
		]
	}).then(user => {
		if(!user) return res.status(404).send('no such user');

		if(bcrypt.compareSync(req.body.password, user.password)) {
			const token = jwt.sign({
				username: user.username,
				id: user.id
			}, 
			process.env.token,
			{ expiresIn: "24h" },
			)
			return res.json({ user, token });
		} else {
			return res.status(403).send('incorrect password')
		}
	})
})

// create new user
router.post('/api/user/new', function(req, res) {
	db.User.create(req.body).then(user => {
		const token = jwt.sign({
			username: user.username,
			id: user.id
		}, 
		process.env.token,
		{ expiresIn: "24h" },
		)
		return res.json({ user, token });
	}).catch(err => res.status(500).json(err))
});

module.exports = router;