import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

const verifyToken = (req, res, next) => {

	const bearerHeader = req.headers['authorization']
	if(bearerHeader) {
		const access_token = bearerHeader.substring(7)
		jwt.verify(access_token, process.env.PRIVATE_KEY, (err, result) => {
			if(!err) {
				next()
			} else {
				res.sendStatus(403)
			}
		})

	} else {
		res.sendStatus(401)
	}
	console.log(bearerHeader);



}

export default verifyToken
