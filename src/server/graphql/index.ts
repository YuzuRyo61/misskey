import {GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql';

export const MisskeyGraphQLSchema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'MisskeyGraphQLQuery',
		fields: {
			hello: {
				type: GraphQLString,
				resolve() {
					return 'world';
				}
			}
		}
	})
});
