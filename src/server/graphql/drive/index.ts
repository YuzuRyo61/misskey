import {GraphQLBoolean, GraphQLID, GraphQLInt, GraphQLNonNull, GraphQLObjectType, GraphQLString} from 'graphql';
import {ScalarDateTime, ScalarMd5, ScalarURL} from '../common';
import {UsersQueryType} from '../users';

export const DriveFolderQueryType = new GraphQLObjectType({
	name: 'DriveFolder',
	fields: {
		id: {
			type: GraphQLNonNull(GraphQLID)
		},
		createdAt: {
			type: GraphQLNonNull(ScalarDateTime)
		},
		name: {
			type: GraphQLNonNull(GraphQLString)
		},
		parentId: {
			type: GraphQLID
		},
		foldersCount: {
			type: GraphQLNonNull(GraphQLInt)
		},
		filesCount: {
			type: GraphQLNonNull(GraphQLInt)
		}
	}
});

export const DriveFileQueryType = new GraphQLObjectType({
	name: 'DriveFile',
	fields: {
		id: {
			type: GraphQLNonNull(GraphQLID)
		},
		createdAt: {
			type: GraphQLNonNull(ScalarDateTime)
		},
		name: {
			type: GraphQLNonNull(GraphQLString)
		},
		type: {
			type: GraphQLNonNull(GraphQLString)
		},
		md5: {
			type: GraphQLNonNull(ScalarMd5)
		},
		size: {
			type: GraphQLNonNull(GraphQLInt)
		},
		isSensitive: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		blurhash: {
			type: GraphQLNonNull(GraphQLString)
		},
		properties: {
			type: GraphQLNonNull(new GraphQLObjectType({
				name: 'DriveFileProperties',
				fields: {
					width: {
						type: GraphQLInt
					},
					height: {
						type: GraphQLInt
					}
				}
			}))
		},
		url: {
			type: GraphQLNonNull(ScalarURL)
		},
		thumbnailUrl: {
			type: ScalarURL
		},
		comment: {
			type: GraphQLString
		},
		folderId: {
			type: GraphQLID
		},
		folder: {
			type: DriveFolderQueryType
		},
		userId: {
			type: GraphQLID
		},
		user: {
			type: UsersQueryType
		}
	}
});
