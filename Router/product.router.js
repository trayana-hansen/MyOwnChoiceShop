import express from 'express'
import ProductController from '../Controllers/product.controller.js'
const ProductRouter = express.Router()
const controller = new ProductController

ProductRouter.get('/product', (req, res) => {
	controller.list(req, res)
})
ProductRouter.get('/product/:id([0-9]*)', (req, res) => {
	controller.details(req, res)
})
ProductRouter.post('/product', (req, res) => {
	controller.create(req, res)
})
ProductRouter.put('/product/:id([0-9]*)', (req, res) => {
	controller.update(req, res)
})
ProductRouter.delete('/product/:id([0-9]*)', (req, res) => {
	controller.delete(req, res)
})
export default ProductRouter
