<template>
<div class="mk-follow-page">
</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	created() {
		const acct = new URL(location.href).searchParams.get('acct');
		if (acct == null) return;

		const dialog = this.$root.dialog({
			type: 'waiting',
			text: this.$t('fetchingAsApObject') + '...',
			showOkButton: false,
			showCancelButton: false,
			cancelableByBgClick: false
		});

		if (acct.startsWith('https://')) {
			this.$root.api('ap/show', {
				uri: acct
			}).then(res => {
				if (res.type == 'User') {
					this.follow(res.object);
				} else {
					this.$root.dialog({
						type: 'error',
						text: 'Not a user'
					}).then(() => {
						window.close();
					});
				}
			}).catch(e => {
				this.$root.dialog({
					type: 'error',
					text: e
				}).then(() => {
					window.close();
				});
			}).finally(() => {
				dialog.close();
			});
		} else {
			this.$root.api('users/show', parseAcct(acct)).then(user => {
				this.follow(user);
			}).catch(e => {
				this.$root.dialog({
					type: 'error',
					text: e
				}).then(() => {
					window.close();
				});
			}).finally(() => {
				dialog.close();
			});
		}
	},

	methods: {
		async follow(user) {
			const { canceled } = await this.$root.dialog({
				type: 'question',
				text: this.$t('followConfirm', { name: user.name || user.username }),
				showCancelButton: true
			});

			if (canceled) {
				window.close();
				return;
			}
			
			this.$root.api('following/create', {
				userId: user.id
			}).then(() => {
				this.$root.dialog({
					type: 'success',
					iconOnly: true, autoClose: true
				}).then(() => {
					window.close();
				});
			}).catch(e => {
				this.$root.dialog({
					type: 'error',
					text: e
				}).then(() => {
					window.close();
				});
			});
		}
	}
});
</script>
