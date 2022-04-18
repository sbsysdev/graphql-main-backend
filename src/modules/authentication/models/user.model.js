/* sequelize */
const { DataTypes, Model, Deferrable } = require('sequelize');
/* utils */
const bcrypt = require('bcrypt');
/* configs */
const { OnLabClinicalSequelize } = require('../../../configs');

class UserModel extends Model {
	isPassword(password) {
		return bcrypt.compareSync(password, this.password);
	}
}

UserModel.init(
	{
		id: {
			type: DataTypes.BIGINT,
			primaryKey: true,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.TEXT,
			allowNull: false,
			unique: true,
			validate: {
				isAlphanumeric: true,
			},
		},
		password: {
			type: DataTypes.TEXT,
			allowNull: false,
			set: password =>
				this.setDataValue('password', bcrypt.hashSync(password, bcrypt.genSaltSync())),
		},
		info: {
			type: DataTypes.BIGINT,
			references: {
				model: 'person',
				key: 'id',
				deferrable: Deferrable.INITIALLY_IMMEDIATE,
			},
		},
	},
	{
		sequelize: OnLabClinicalSequelize,
		modelName: 'user',
		paranoid: true,
	}
);

UserModel.belongsTo('person', {
	foreignKey: 'info',
});

UserModel.belongsToMany('role', { through: 'user_role', foreignKey: 'user', otherKey: 'role' });

module.exports = UserModel;
