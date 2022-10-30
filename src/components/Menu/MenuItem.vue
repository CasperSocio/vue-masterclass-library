<script setup lang="ts">
defineEmits(['click'])
</script>

<template>
	<li class="MenuItem">
		<button
			class="MenuItem__button"
			type="button"
			@click="$emit('click')">
			<slot />
		</button>
	</li>
</template>

<style lang="scss">
.MenuItem {
	--menu-item-bg: var(--color-background);
	--menu-item-bg-hover: var(--color-text);
	--menu-item-color: var(--color-text);
	--menu-item-color-hover: var(--color-background);

	&__button {
		background: linear-gradient(to right, var(--menu-item-bg-hover) 50%, var(--menu-item-bg) 50%);
		background-position: right bottom;
		background-size: 200% 100%;
		border: none;
		color: var(--menu-item-color);
		cursor: pointer;
		display: inline-block;
		font-size: 1em;
		font-weight: 400;
		line-height: 1;
		margin: 0;
		padding: .6em 1.2em;
		text-align: left;
		transition: all 0.2s ease-out;
		width: 100%;

		&:focus,
		&:focus-visible {
			outline: 2px solid var(--color-primary);
		}

		&:hover {
			background-position: left bottom;
			color: var(--menu-item-color-hover);
		}
	}
}
</style>
