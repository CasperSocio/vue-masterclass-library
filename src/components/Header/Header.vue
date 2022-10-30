<script setup lang="ts">
defineProps<{
	/** The application title text. */
	brandName: string
}>()
</script>

<template>
	<header class="Header">
		<div class="Header__left">
			<p class="Header__brand-name">
				{{ brandName }}
			</p>
		</div>
		<div v-if="$slots.right" class="Header__right">
			<slot name="right" />
		</div>
	</header>
</template>

<style scoped lang="scss">
.Header {
    border-bottom: 1px solid var(--color-text);
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;

	&__brand-name {
		display: inline-block;
		font-size: 1.4rem;
		font-weight: 600;
		line-height: 1;
		margin: 0;
		padding: 1rem;
	}

	&__left {
		align-items: center;
		display: flex;
		justify-content: flex-start;
	}

	&__right {
		align-items: center;
		display: flex;
		gap: .75rem;
		justify-content: flex-end;
		padding: .5rem 1rem;
	}
}
</style>
