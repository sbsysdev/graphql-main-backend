/* sequelize */
const { DataTypes, Model } = require('sequelize');
/* configs */
const { OnLabClinicalSequelize } = require('../../../configs');
const UserModel = require('./User.model');

class RoleModel extends Model {}

RoleModel.init(
	{
		rolename: {
			type: DataTypes.TEXT,
			allowNull: false,
			unique: true,
			validate: {
				isAlpha: true,
			},
		},
	},
	{
		sequelize: OnLabClinicalSequelize,
		modelName: 'role',
		paranoid: true,
	}
);

RoleModel.belongsToMany(UserModel, { through: 'user_role', foreignKey: 'role', otherKey: 'user' });

module.exports = RoleModel;
