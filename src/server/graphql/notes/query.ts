import {GraphQLError} from 'graphql';

import {getNote} from '../../api/common/getters';
import {Notes} from '../../../models';
import {Note} from '../../../models/entities/note';

export const NotesQuery = async (id: string[]) => {
	const result: Note[] = [];
	for (const one_id of id) {
		const data = await getNote(one_id).catch(_ => {});
		if (typeof data == 'object') result.push(data);
	}
	if (result.length == 0) throw new GraphQLError('Can\'t fetch note');

	return await Notes.packMany(result, null, {
		detail: true
	});
};
