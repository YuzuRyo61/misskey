import {
	GraphQLBoolean,
	GraphQLInt,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString
} from 'graphql';
import {ScalarDateTime} from '../common';

export const UsersQueryType = new GraphQLObjectType({
	name: 'UsersQuery',
	fields: {
		id: {
			type: GraphQLNonNull(GraphQLString)
		},
		createdAt: {
			type: GraphQLNonNull(ScalarDateTime)
		},
		updatedAt: {
			type: ScalarDateTime
		},
		username: {
			type: GraphQLNonNull(GraphQLString)
		},
		name: {
			type: GraphQLString
		},
		host: {
			type: GraphQLString
		},
		isAdmin: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		isModerator: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		isBot: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		isCat: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		url: {
			type: GraphQLString
		},
		description: {
			type: GraphQLString
		},
		location: {
			type: GraphQLString
		},
		notesCount: {
			type: GraphQLNonNull(GraphQLInt)
		},
		followersCount: {
			type: GraphQLNonNull(GraphQLInt)
		},
		followingCount: {
			type: GraphQLNonNull(GraphQLInt)
		}
	}
});
