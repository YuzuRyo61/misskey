import {GraphQLBoolean, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';

import {ScalarDateTime} from '../common';
import {UsersQueryType} from '../users';
import {DriveFileQueryType} from '../drive';

export const NotesQueryType = new GraphQLObjectType({
	name: 'NotesQuery',
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
			type: GraphQLNonNull(GraphQLBoolean)
		},
		isHidden: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		visibility: {
			type: GraphQLString
		},
		mentions: {
			type: GraphQLList(GraphQLID)
		},
		visibleUserIds: {
			type: GraphQLList(GraphQLID)
		},
		fileIds: {
			type: GraphQLList(GraphQLID)
		},
		files: {
			type: GraphQLNonNull(GraphQLList(
				GraphQLNonNull(DriveFileQueryType)))
		},
		tags: {
			type: GraphQLList(GraphQLNonNull(GraphQLString))
		}
	}
});
