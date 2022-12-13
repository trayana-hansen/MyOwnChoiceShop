import express from 'express'
import SizeController from '../Controllers/size.controller.js'
const SizeRouter = express.Router()
const controller = new SizeController

SizeRouter.get('/size', (req, res) => {
	controller.list(req, res)
})
SizeRouter.get('/size/:id([0-9]*)', (req, res) => {
	controller.details(req, res)
})
SizeRouter.post('/size', (req, res) => {
	controller.create(req, res)
})
SizeRouter.put('/size/:id([0-9]*)', (req, res) => {
	controller.update(req, res)
})
SizeRouter.delete('/size/:id([0-9]*)', (req, res) => {
	controller.delete(req, res)
})
export default SizeRouter
