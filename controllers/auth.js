const auth = {
	user: (req) => {
		let token = false;
		let data = false;

		if(!req.headers || !req.headers.authorization) token = false;
		else token = req.headers.authorization.split(" ")[1];

		if(token) {
			data = jwt.verify(token, process.env.token, (error, data) => {
				if(error) {
					console.error(error);
					return false;
				} else {
					return data;
				}
			})
		} else if(req.body.token) {
			data = jwt.verify(req.body.token, process.env.token, (error, data) => {
				if(error) {
					console.error(error);
					return false;
				} else {
					return data;
				}
			})
		}

		return data;
	}
}

module.exports = auth;