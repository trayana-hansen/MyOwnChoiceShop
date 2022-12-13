import sequelize  from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class SizeModel extends Model{}

SizeModel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	size: {
		type: DataTypes.STRING,
		allowNull: false,
	}
}, {
	sequelize,
	modelName: 'size',
	freezeTableName: true,
	underscored: true
})



export default SizeModel
