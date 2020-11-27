import {GraphQLBoolean, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';

import {ScalarDateTime} from '../common';

export const NotesQueryType = new GraphQLObjectType({
	name: 'UserQuery',
	fields: {
		id: {
			type: GraphQLNonNull(GraphQLList(GraphQLID)),
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
