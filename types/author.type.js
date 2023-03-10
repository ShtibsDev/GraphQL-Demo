import { GraphQLInt, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString } from 'graphql';
import books from '../db/books.js';
import BookType from './book.type.js';

const AuthorType = new GraphQLObjectType({
	name: 'Author',
	description: 'This represents a book author',
	fields: () => ({
		id: { type: GraphQLNonNull(GraphQLInt) },
		name: { type: GraphQLNonNull(GraphQLString) },
		books: {
			type: new GraphQLList(BookType),
			resolve: (author) => books.filter((book) => book.authorId === author.id),
		},
	}),
});

export default AuthorType;
