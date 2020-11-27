import {GraphQLID, GraphQLList, GraphQLNonNull, GraphQLObjectType, GraphQLSchema, GraphQLString} from 'graphql';
import { NotesQueryType } from './notes';
import { UsersQueryType } from './users';
import NotesQuery from './notes/query';
import UsersQuery from './users/query';

export const MisskeyGraphQLSchema = new GraphQLSchema({
	query: new GraphQLObjectType({
		name: 'MisskeyGraphQLQuery',
		fields: {
			notes: {
				type: GraphQLList(NotesQueryType),
				args: {
					id: { type: GraphQLNonNull(GraphQLList(GraphQLID)) }
				},
				resolve(_, {id}) {
					return NotesQuery(id);
				}
			},
			// TODO: 複数のユーザーで取得できるようにしたい
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
