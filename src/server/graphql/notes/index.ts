import {GraphQLBoolean, GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';

import {ScalarDateTime} from '../common';
import {UsersQueryType} from '../users';

export const NotesQueryType = new GraphQLObjectType({
	name: 'UserQuery',
	fields: {
		id: {
			type: GraphQLNonNull(GraphQLID),
			description: 'Note\'s ID'
		},
		createdAt: {
			type: GraphQLNonNull(ScalarDateTime),
			description: 'Returns the date and time when this post was created'
		},
		text: {
			type: GraphQLString
		},
		cw: {
			type: GraphQLString
		},
		userId: {
			type: GraphQLNonNull(GraphQLString)
		},
		user: {
			type: GraphQLNonNull(UsersQueryType)
		},
		replyId: {
			type: GraphQLID
		},
		renoteId: {
			type: GraphQLID
		},
		viaMobile: {
			type: GraphQLBoolean
		},
		visibility: {
			type: GraphQLString
		}
	}
});
