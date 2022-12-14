import sequelize  from '../Config/sequelize.config.js'
import { DataTypes, Model } from 'sequelize'

class ProductModel extends Model{}


ProductModel.init({
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	item_number: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	img: {
		type: DataTypes.BLOB,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false
	},
	stock: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	size: {
		type: DataTypes.STRING,
		allowNull: false
	},
	price: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	gender_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	brand_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	type_id: {
		type: DataTypes.INTEGER,
		allowNull: false
	}

}, {
	sequelize,
	modelName: 'product',
	freezeTableName: true,
	underscored: true
})



export default ProductModel
