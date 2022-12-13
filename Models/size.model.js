import sequelize  from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class SizeModel extends Model{}

GenderModel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	size: {
		type: DataTypes.INTEGER,
		allowNull: false,
	}
}, {
	sequelize,
	modelName: 'size',
	freezeTableName: true,
	underscored: true
})



export default SizeModel
