import {GraphQLError} from 'graphql';
import {resolveUser} from '../../../remote/resolve-user';
import {Users} from '../../../models';

export const UsersQuery = async (
	id: string | null,
	username: string | null,
	host: string | null) => {
	if (id == null && username == null) throw new GraphQLError('You must put a value in id or username');

	let user;

	if (id != null) {
		user = await Users.findOne({
			id: id
		});
	} else if (username != null && host != null) {
		user = await resolveUser(username, host).catch(_ => {
			throw new GraphQLError('Failed to resolve remote user.');
		});
	} else {
		// username is not null
		user = await Users.findOne({
			usernameLower: username?.toLowerCase(),
			host: null
		});
	}

	if (user == null || user.isSuspended) throw new GraphQLError('No such user.');

	return {
		...await Users.pack(user, null, {
			detail: true
		})
	};
};
