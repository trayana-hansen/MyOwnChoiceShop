import sequelize  from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class ReviewModel extends Model{}

ReviewModel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	date: {
		type: DataTypes.DATE,
		allowNull: false,
	},
	rating: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	title: {
		type: DataTypes.STRING,
		allowNull: false
	},
	comment: {
		type: DataTypes.STRING,
		allowNull: true
	},
	user_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	}
}, {
	sequelize,
	modelName: 'review',
	freezeTableName: true,
	underscored: true
})



export default ReviewModel
