import {GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql';
import { NotesQueryType } from './notes';
import NotesQuery from './notes/query';
import {UsersQueryType} from './users';
import UsersQuery from './users/query';

export const MisskeyGraphQLSchema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'MisskeyGraphQLQuery',
		fields: {
			notes: {
				type: NotesQueryType,
				args: {
					id: { type: GraphQLNonNull(GraphQLString) }
				},
				resolve(_, {id}) {
					return NotesQuery(id);
				}
			},
			users: {
				type: UsersQueryType,
				args: {
					id: { type: GraphQLID },
					username: { type: GraphQLString },
					host: { type: GraphQLString }
				},
				resolve(_, {id, username, host}) {
					return UsersQuery(id, username, host);
				}
			}
		}
	})
});
