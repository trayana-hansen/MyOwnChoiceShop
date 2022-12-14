import express from 'express'
import  sequelize  from '../Config/sequelize.config.js'
const InitRouter = express.Router()


import ProductModel from '../Models/product.model.js'
import ReviewModel from '../Models/review.model.js'
import BrandModel from '../Models/brand.model.js'
import GenderModel from '../Models/gender.model.js'
import TypeModel from '../Models/type.model.js'
import UserModel from '../Models/user.model.js'

InitRouter.get('/init', (request, response) => {
	try {
		sequelize.sync()
		response.sendStatus(200)
	}
	catch(err) {
		response.send(err)
	}

})

export default InitRouter
