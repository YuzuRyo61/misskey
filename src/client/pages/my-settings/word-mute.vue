<template>
<section class="_card">
	<div class="_title"><fa :icon="faCommentSlash"/> {{ $t('wordMute') }}</div>
	<div class="_content _noPad">
		<mk-tab v-model="tab" :items="[{ label: $t('_wordMute.soft'), value: 'soft' }, { label: $t('_wordMute.hard'), value: 'hard' }]"/>
	</div>
	<div class="_content" v-show="tab === 'soft'">
		<mk-info>{{ $t('_wordMute.softDescription') }}</mk-info>
		<mk-textarea v-model="softMutedWords">
			<span>{{ $t('_wordMute.muteWords') }}</span>
			<template #desc>{{ $t('_wordMute.muteWordsDescription') }}<br>{{ $t('_wordMute.muteWordsDescription2') }}</template>
		</mk-textarea>
	</div>
	<div class="_content" v-show="tab === 'hard'">
		<mk-info>{{ $t('_wordMute.hardDescription') }}</mk-info>
		<mk-textarea v-model="hardMutedWords" style="margin-bottom: 16px;">
			<span>{{ $t('_wordMute.muteWords') }}</span>
			<template #desc>{{ $t('_wordMute.muteWordsDescription') }}<br>{{ $t('_wordMute.muteWordsDescription2') }}</template>
		</mk-textarea>
		<div v-if="hardWordMutedNotesCount != null" class="_caption">{{ $t('_wordMute.mutedNotes') }}: {{ hardWordMutedNotesCount | number }}</div>
	</div>
	<div class="_footer">
		<mk-button @click="save()" primary inline :disabled="!changed"><fa :icon="faSave"/> {{ $t('save') }}</mk-button>
	</div>
</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { faCommentSlash, faSave } from '@fortawesome/free-solid-svg-icons';
import MkButton from '../../components/ui/button.vue';
import MkTextarea from '../../components/ui/textarea.vue';
import MkTab from '../../components/tab.vue';
import MkInfo from '../../components/ui/info.vue';

export default Vue.extend({
	components: {
		MkButton,
		MkTextarea,
		MkTab,
		MkInfo,
	},
	
	data() {
		return {
			tab: 'soft',
			softMutedWords: '',
			hardMutedWords: '',
			hardWordMutedNotesCount: null,
			changed: false,
			faCommentSlash, faSave,
		}
	},

	watch: {
		softMutedWords() {
			this.changed = true;
		},
		hardMutedWords() {
			this.changed = true;
		},
	},

	async created() {
		this.softMutedWords = this.$store.state.settings.mutedWords.map(x => x.join(' ')).join('\n');
		this.hardMutedWords = this.$store.state.i.mutedWords.map(x => x.join(' ')).join('\n');

		this.hardWordMutedNotesCount = (await this.$root.api('i/get-word-muted-notes-count', {})).count;
	},

	methods: {
		async save() {
			this.$store.dispatch('settings/set', { key: 'mutedWords', value: this.softMutedWords.trim().split('\n').map(x => x.trim().split(' ')) });
			await this.$root.api('i/update', {
				mutedWords: this.hardMutedWords.trim().split('\n').map(x => x.trim().split(' ')),
			});
			this.changed = false;
		},
	}
});
</script>
