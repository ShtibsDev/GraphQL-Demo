import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import authors from '../db/authors.js';
import AuthorType from './author.type.js';

const BookType = new GraphQLObjectType({
	name: 'Book',
	description: 'This represents a book',
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLInt) },
		title: { type: GraphQLNonNull(GraphQLString) },
		authorId: { type: GraphQLNonNull(GraphQLInt) },
		author: { type: AuthorType, resolve: (book) => authors.find((author) => author.id === book.authorId) },
	}),
});

export default BookType;
