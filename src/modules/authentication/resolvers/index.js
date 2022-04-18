/* imports */
const userResolver = require('./user.resolver');

/* export authentication resolvers */
module.exports = {
	Types: { ...userResolver.Types },
	Query: { ...userResolver.Query },
	Mutation: { ...userResolver.Mutation },
};
