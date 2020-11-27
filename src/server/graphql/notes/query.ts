import {GraphQLError} from 'graphql';

import {getNote} from '../../api/common/getters';
import {Notes} from '../../../models';

export default async (id: string) => {
	const note = await getNote(id).catch(_ => {
		throw new GraphQLError('Can\'t fetch note');
	});

	return {
		...await Notes.pack(note, null, {
			detail: true
		})
	};
};
