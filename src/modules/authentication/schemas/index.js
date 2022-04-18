/* imports */
const { gql } = require('apollo-server-core');
const fs = require('fs');

/* user schema */
const userSchema = fs.readFileSync(__dirname.concat('/user.gql'), 'utf-8');

/* export authentication schemas */
module.exports = [
	gql`
		${userSchema}
	`,
];
