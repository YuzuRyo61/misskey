import {fetchMeta} from '../../../misc/fetch-meta';
import config from '../../../config';
import {DB_MAX_NOTE_TEXT_LENGTH} from '../../../misc/hard-limits';
import {Users} from '../../../models';

export const MetaQuery = async () => {
	const instance = await fetchMeta(true);
	const proxyAccount = instance.proxyAccountId ? await Users.pack(instance.proxyAccountId).catch(() => null) : null;

	return {
		...instance,
		version: config.version,
		uri: config.url,
		secure: config.https != null,
		maxNoteTextLength: Math.min(instance.maxNoteTextLength, DB_MAX_NOTE_TEXT_LENGTH),
		requireSetup: (await Users.count({
			host: null,
		})) === 0,
		proxyAccountName: proxyAccount ? proxyAccount.username : null,
		elasticsearch: !!config.elasticsearch,
		proxyAccount: instance.proxyAccountId ? await Users.pack(instance.proxyAccountId).catch(() => null) : null
	};
};
