import ReviewModel from '../Models/review.model.js'

//Join with the table yoi want a relationship to
import UserModel from '../Models/user.model.js'

//Relationship between the two
UserModel.hasMany(ReviewModel)
ReviewModel.belongsTo(UserModel)


class ReviewController {
	list = async (req, res) => {
		console.log(req.query);
		let { limit, attributes } = req.query
		limit = parseInt(limit) || 1000
		const attr = attributes ? attributes.split(',') : new Array('id', 'date', 'rating')
		console.log(attr);


		const result = await ReviewModel.findAll({
			attributes: attr,
			limit: limit
		})
		res.json(result)
	}

	details = async (req, res) => {
		const { id } = req.params || 0
		const result = await ReviewModel.findOne({
			attributes: ['id', 'date', 'rating', 'title', 'comment','user_id', 'product_id'],
			where: { id: id }
		})
		res.json(result)
	}

	create = async (req, res) => {
		const { date, rating, title, comment,user_id, product_id }  = req.body;
		if(date && rating && title && comment && user_id && product_id) {
		const model = await ReviewModel.create(req.body)
		res.json({ newId: model.id })
			} else {
				res.sendStatus(418)
			}
	}
	update = async (req, res) => {
		const { id } = req.params || 0
        const { date, rating, title, comment, user_id, product_id } = req.body;

        if(id && date && rating && title && comment && user_id && product_id) {
            const model = await ReviewModel.update(req.body, { where: { id: id }
		})
            res.json({
				msg: 'Review updated'
			})
        } else {
            res.sendStatus(418)
        }
    }
	delete = async (req, res) => {
        try {
            await ReviewModel.destroy({ where: { id: req.params.id }});
            res.sendStatus(200)
        }
        catch(err) {
            res.send(err)
        }
    }


}


export default ReviewController
