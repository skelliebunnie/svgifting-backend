const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

const db = require('../models');

const jwt = require('jsonwebtoken');
const auth = require("./auth.js");

require('dotenv').config();

// auth route to authenticate user ... when? when trying to access specific routes!
router.get('/auth', (req, res) => {
	let tokenData = auth.user(req);

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
		}
	}).then(user => {
		if(!user) return res.status(404).send('no such user');

		if(bcrypt.compareSync(req.body.password, user.password)) {
			const token = jwt.sign({
				id: user.id,
				username: user.username,
				admin: user.admin,
			},
			process.env.token,
			{ expiresIn: "24h" },
			)
			res.json({ user: {username: user.username, name: user.name, email: user.email, admin: user.admin}, token });
		} else {
			res.status(403).send('incorrect password')
		}
	})
})

// create new user
router.post('/api/user/new', function(req, res) {
	if(req.body.secret_key === process.env.secret_key) {
		db.User.create(req.body).then(user => {
			const token = jwt.sign({
				id: user.id,
				username: user.username,
				admin: user.admin,
			},
				process.env.token,
				{ expiresIn: "24h" },
			)
			return res.json({ user, token });
		}).catch(err => res.status(500).json(err))
	} else {
		res.status(500).json({ message: 'Nice try (:'})
	}
});

router.get('/api/users', (req, res) => {
	db.User.findAll({})
		.then( users => {
			const userList = users.map(user => (
				{ 
					username: user.username, 
					name: user.name, 
					name: user.email, 
					// admin: user.admin, 
					createdAt: user.createdAt, 
					updatedAt: user.updatedAt 
				}
			))
			console.log(userList);

			res.json(userList);
		})
		.catch(err => res.status(500).json(err))
})

module.exports = router;