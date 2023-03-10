import { GraphQLInt, GraphQLList, GraphQLObjectType } from 'graphql';
import authors from '../db/authors.js';
import books from '../db/books.js';
import AuthorType from './author.type.js';
import BookType from './book.type.js';

const RootQueryType = new GraphQLObjectType({
	name: 'Query',
	description: 'Root Query',
	fields: () => ({
		book: {
			type: BookType,
			description: 'A single book',
			args: {
				id: { type: GraphQLInt },
			},
			resolve: (_parrent, args) => books.find((book) => book.id === args.id),
		},
		books: {
			type: new GraphQLList(BookType),
			description: 'List of books',
			resolve: () => books,
		},
		author: {
			type: AuthorType,
			description: 'A single book author',
			args: {
				id: { type: GraphQLInt },
			},
			resolve: (_parrent, args) => authors.find((author) => author.id === args.id),
		},
		authors: {
			type: new GraphQLList(AuthorType),
			description: 'List of authors',
			resolve: () => authors,
		},
	}),
});

export default RootQueryType;
