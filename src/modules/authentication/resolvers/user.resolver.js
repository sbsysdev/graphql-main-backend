const { getGraphqlProps } = require('../../../utils');

const USERS = [
	{ id: '1', name: 'FulanoMaster', password: 'qwerty' },
	{ id: '2', name: 'FulanoMaster', password: 'qwerty' },
	{ id: '3', name: 'FulanoMaster', password: 'qwerty' },
];
const AUTHS = [
	{ id: '1', name: 'FulanoMaster', lastName: 'De Tal', age: 28, user: 1 },
	{ id: '2', name: 'FulanoMaster', lastName: 'De Tal', age: 28, user: 1 },
	{ id: '3', name: 'FulanoMaster', lastName: 'De Tal', age: 28, user: 1 },
];

const Types = {
	User: {},
	Auth: {
		user: (parent, args, context, info) => {
			console.log("PARENT", parent)
			console.log('NESTED_USER', getGraphqlProps(info));
			return USERS[parent.user];
		},
	},
};

const Query = {
	users: (parent, args, context, info) => {
		console.log('USERS', getGraphqlProps(info));
		return USERS;
	},
	auths: (parent, args, context, info) => {
		console.log('AUTHS', getGraphqlProps(info));
		return AUTHS;
	},
};

const Mutation = {
	addUser: (parent, args, context, info) => {
		console.log("ARGS", args)
		console.log('ADD_USER', getGraphqlProps(info));
		return AUTHS[0];
	},
};

/* export user resolvers */
module.exports = {
	Types,
	Query,
	Mutation,
};
