import sequelize  from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class GenderModel extends Model{}

GenderModel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	gender: {
		type: DataTypes.STRING,
		allowNull: false,
	}
}, {
	sequelize,
	modelName: 'gender',
	freezeTableName: true,
	underscored: true
})



export default GenderModel
