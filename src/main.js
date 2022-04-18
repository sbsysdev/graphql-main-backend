require('dotenv').config();
/* express */
const express = require('express');
/* server */
const apolloServer = require('./apollo-server');
/* utils */
const http = require('http');

const main = async () => {
	const app = express();

	const httpServer = http.createServer(app);

	const server = apolloServer(httpServer);

	await server.start();

	server.applyMiddleware({ app, path: '/api' });

	const PORT = process.env['PORT'];

	await new Promise(resolve => httpServer.listen({ port: PORT }, resolve));

	console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`);
};

module.exports = main;
