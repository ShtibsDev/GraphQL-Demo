import express from 'express';
import expressGraphQL from 'express-graphql';
import schema from './schema.js';

const app = express();
app.use(
	'/graphql',
	expressGraphQL.graphqlHTTP({
		schema: schema,
		graphiql: true,
	})
);
app.listen(5001, () => console.log('server is running'));
