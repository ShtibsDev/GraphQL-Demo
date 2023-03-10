import { GraphQLSchema } from 'graphql';
import AuthorType from './types/author.type.js';
import BookType from './types/book.type.js';
import RootMutationType from './types/root-mutation.type.js';
import RootQueryType from './types/root-query.type.js';

const schema = new GraphQLSchema({
	query: RootQueryType,
	mutation: RootMutationType,
	types: [BookType, AuthorType],
});

export default schema;
