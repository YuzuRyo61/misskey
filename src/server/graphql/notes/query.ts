import {GraphQLError} from 'graphql';

import {Notes} from '../../../models';
import {In} from 'typeorm';

export const NotesQuery = async (id: string[]) => {
	const result = await Notes.find({
		id: In(id)
	});
	if (result.length == 0) throw new GraphQLError('Can\'t fetch note');

	return await Notes.packMany(result, null, {
		detail: true
	});
};
