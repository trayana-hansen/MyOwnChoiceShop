import SizeModel from '../Models/size.model.js'


class SizeController {
	list = async (req, res) => {
		let { size } = req.query;


		const result = await SizeModel.findAll({
			attributes: ['id', 'size']
		})
		res.json(result)
	}

	details = async (req, res) => {
		const { id } = req.params || 0
		const result = await SizeModel.findOne({
			attributes: ['id', 'size'],
			where: { id: id }
		})
		res.json(result)
	}
	create = async (req, res) => {
		const { size }  = req.body;
		if(size) {
		const model = await SizeModel.create(req.body)
		res.json({ newId: model.id })
			} else {
				res.sendStatus(418)
			}
	}
	update = async (req, res) => {
		const { id } = req.params || 0
        const { size } = req.body;

        if(id && size) {
            const model = await SizeModel.update(req.body, { where: { id: id }
		})
            res.json({
				msg: 'Size updated'
			})
        } else {
            res.sendStatus(418)
        }
    }
	delete = async (req, res) => {
        try {
            await SizeModel.destroy({ where: { id: req.params.id }});
            res.sendStatus(200)
        }
        catch(err) {
            res.send(err)
        }
    }


}


export default SizeController
