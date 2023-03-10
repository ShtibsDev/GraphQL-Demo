import { GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import books from '../db/books.js';
import BookType from './book.type.js';

const RootMutationType = new GraphQLObjectType({
	name: 'Mutation',
	description: 'Root Mutation',
	fields: () => ({
		addBook: {
			type: BookType,
			description: 'Adding a book to an author',
			args: {
				title: { type: GraphQLNonNull(GraphQLString) },
				authorId: { type: GraphQLNonNull(GraphQLInt) },
			},
			resolve: (_parent, args) => {
				const book = {
					id: books.length + 1,
					title: args.title,
					authorId: args.authorId,
				};

				books.push(book);
				return book;
			},
		},
	}),
});

export default RootMutationType;
