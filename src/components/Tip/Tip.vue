<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
	variant?: 'default' | 'success'
}>(), {
	variant: 'default',
})

const classes = computed(() => ({
	[`Tip--variant-${ props.variant }`]: true,
}))
</script>

<template>
	<div
		class="Tip"
		:class="classes">
		<slot />
	</div>
</template>

<style lang="scss">
.Tip {
	border: 1px solid;
	border-radius: 4px;
	font-size: 14px;
	min-height: 17px;
	padding: 1rem;

	& > *:first-child {
		margin-top: 0;
	}
	& > *:last-child {
		margin-bottom: 0;
	}

	&--variant {
		&-default {
			background-color: var(--color-accent-background);
			border-color: var(--color-accent-border);
			color: var(--color-accent-text);
		}
		&-success {
			background-color: var(--color-success-background);
			border-color: var(--color-success-border);
			color: var(--color-success-text);
		}
	}
}
</style>
