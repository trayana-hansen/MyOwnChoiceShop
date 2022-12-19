import UserModel from '../Models/user.model.js'



class UserController {
	list = async (req, res) => {
		console.log(req.query);
		let { limit, attributes } = req.query
		limit = parseInt(limit) || 1000
		const attr = attributes ? attributes.split(',') : new Array('id', 'username', 'password' )
		console.log(attr);


		const result = await UserModel.findAll({
			attributes: attr,
			limit: limit
		})
		res.json(result)
	}

	details = async (req, res) => {
		const { id } = req.params || 0
		const result = await UserModel.findOne({
			attributes: ['id', 'username', 'password', 'firstname', 'lastname','email', 'address', 'zipcode', 'city', 'phone_number'],
			where: { id: id }
		})
		res.json(result)
	}
	create = async (req, res) => {
		const {username, password, firstname, lastname, email, address, zipcode, city, phone_number }  = req.body;
		if(username && password && firstname && lastname &&email && address && zipcode && city && phone_number) {
		const model = await UserModel.create(req.body)
		res.send('Registration successful')
		res.end()
			} else {
				res.sendStatus(418)
			}
	}
	update = async (req, res) => {
		const { id } = req.params || 0
        const { username, password, firstname, lastname, email, address, zipcode, city, phone_number } = req.body;

        if(id && username && password && firstname && lastname &&email && address && zipcode && city && phone_number) {
            const model = await UserModel.update(req.body, { where: { id: id }
		})
            res.json({
				msg: 'User updated'
			})
        } else {
            res.sendStatus(418)
        }
    }
	delete = async (req, res) => {
        try {
            await UserModel.destroy({ where: { id: req.params.id }});
            res.sendStatus(200)
        }
        catch(err) {
            res.send(err)
        }
    }


}


export default UserController
