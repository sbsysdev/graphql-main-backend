/* apollo server */
const { ApolloServer } = require('apollo-server-express');
const {
	ApolloServerPluginDrainHttpServer,
	ApolloServerPluginLandingPageGraphQLPlayground,
	ApolloServerPluginLandingPageProductionDefault,
} = require('apollo-server-core');

/* schemas */
const AUTHENTICATION_SCHEMAS = require('./modules/authentication/schemas');

/* resolvers */
const AUTHENTICATION_RESOLVERS = require('./modules/authentication/resolvers');

/* dao */

const apolloServer = httpServer => {
	const typeDefs = [...AUTHENTICATION_SCHEMAS];

	const resolvers = {
		...AUTHENTICATION_RESOLVERS.Types,
		Query: { ...AUTHENTICATION_RESOLVERS.Query },
		Mutation: { ...AUTHENTICATION_RESOLVERS.Mutation },
	};

	const context = {};

	return new ApolloServer({
		typeDefs,
		resolvers,
		context,
		plugins: [
			ApolloServerPluginDrainHttpServer({ httpServer }),
			process.env['NODE_ENV'] === 'production'
				? ApolloServerPluginLandingPageProductionDefault({ footer: false })
				: ApolloServerPluginLandingPageGraphQLPlayground({}),
		],
	});
};

module.exports = apolloServer;
