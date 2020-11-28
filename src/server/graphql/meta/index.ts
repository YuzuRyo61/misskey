import {
	GraphQLBoolean,
	GraphQLID,
	GraphQLInt,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString
} from 'graphql';
import {ScalarURL} from '../common';
import {UsersQueryType} from '../users';

export const MetaQueryType = new GraphQLObjectType({
	name: 'MetaQuery',
	fields: {
		version: {
			type: GraphQLNonNull(GraphQLString)
		},
		name: {
			type: GraphQLString
		},
		uri: {
			type: ScalarURL
		},
		description: {
			type: GraphQLString
		},
		tosUrl: {
			type: ScalarURL
		},
		repositoryUrl: {
			type: ScalarURL
		},
		feedbackUrl: {
			type: ScalarURL
		},
		secure: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		disableRegistration: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		disableLocalTimeline: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		disableGlobalTimeline: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		driveCapacityPerLocalUserMb: {
			type: GraphQLNonNull(GraphQLInt)
		},
		driveCapacityPerRemoteUserMb: {
			type: GraphQLNonNull(GraphQLInt)
		},
		enableHcaptcha: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		hcaptchaSiteKey: {
			type: GraphQLString
		},
		enableRecaptcha: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		recaptchaSiteKey: {
			type: GraphQLString
		},
		swPublicKey: {
			type: GraphQLString
		},
		mascotImageUrl: {
			type: ScalarURL
		},
		bannerUrl: {
			type: ScalarURL
		},
		errorImageUrl: {
			type: ScalarURL
		},
		iconUrl: {
			type: ScalarURL
		},
		backgroundImageUrl: {
			type: ScalarURL
		},
		logoImageUrl: {
			type: ScalarURL
		},
		maintainerName: {
			type: GraphQLString
		},
		maintainerEmail: {
			type: GraphQLString
		},
		langs: {
			type: GraphQLNonNull(GraphQLList(GraphQLString))
		},
		cacheRemoteFiles: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		proxyRemoteFiles: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		proxyAccountId: {
			type: GraphQLID
		},
		proxyAccount: {
			type: UsersQueryType
		},
		maxNoteTextLength: {
			type: GraphQLNonNull(GraphQLInt)
		},
		enableServiceWorker: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		enableTwitterIntegration: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		enableGitHubIntegration: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		enableDiscordIntegration: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		objectStorage: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		requireSetup: {
			type: GraphQLNonNull(GraphQLBoolean)
		},
		elasticsearch: {
			type: GraphQLNonNull(GraphQLBoolean)
		}
	}
});
