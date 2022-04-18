/* sequelize */
const { Sequelize } = require('sequelize');

const OnLabClinicalSequelize = new Sequelize(
	process.env['POSTGRES_DB'],
	process.env['POSTGRES_USER'],
	process.env['POSTGRES_PASS'],
	{
		host: process.env['POSTGRES_HOST'],
		port: process.env['POSTGRES_PORT'],
		dialect: 'postgres',
	}
);

module.exports = { OnLabClinicalSequelize };
