<template>
<section class="uawsfosz _card">
	<div class="_title"><fa :icon="faCloud"/> {{ $t('drive') }}</div>
	<div class="_content">
		<span>{{ $t('uploadFolder') }}: {{ uploadFolder ? uploadFolder.name : '-' }}</span>
		<mk-button primary @click="chooseUploadFolder()"><fa :icon="faFolderOpen"/> {{ $t('selectFolder') }}</mk-button>
	</div>
</section>
</template>

<script lang="ts">
import Vue from 'vue';
import { faCloud, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faClock, faEyeSlash, faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import MkButton from '../../components/ui/button.vue';
import { selectDriveFolder } from '../../scripts/select-drive-folder';

export default Vue.extend({
	components: {
		MkButton,
	},

	data() {
		return {
			uploadFolder: null,
			faCloud, faClock, faEyeSlash, faFolderOpen, faTrashAlt
		}
	},

	async created() {
		if (this.$store.state.settings.uploadFolder) {
			this.uploadFolder = await this.$root.api('drive/folders/show', {
				folderId: this.$store.state.settings.uploadFolder
			});
		}
	},

	methods: {
		chooseUploadFolder() {
			selectDriveFolder(this.$root, false).then(async folder => {
				await this.$store.dispatch('settings/set', { key: 'uploadFolder', value: folder ? folder.id : null });
				this.$root.dialog({
					type: 'success',
					iconOnly: true, autoClose: true
				});
				if (this.$store.state.settings.uploadFolder) {
					this.uploadFolder = await this.$root.api('drive/folders/show', {
						folderId: this.$store.state.settings.uploadFolder
					});
				} else {
					this.uploadFolder = null;
				}
			});
		}
	}
});
</script>

<style lang="scss" scoped>
.uawsfosz {

}
</style>
