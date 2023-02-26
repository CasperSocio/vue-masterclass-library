<script setup lang="ts">
import InlineSvg from 'vue-inline-svg'
import { IconName } from './Icon.utils'

const props = withDefaults(defineProps<{
	/** The name of the icon to be used. */
	name: IconName
	/**
	 * The icon width and height in pixels.  
	 * System icons are locked to a 1:1 aspect ratio.
	 */
	size?: number
}>(), {
	size: 24,
})

function getIconPath(): string {
	return new URL(`../../assets/icons/${props.name}.svg`, import.meta.url).href
}
</script>

<template>
	<InlineSvg
		:src="getIconPath()"
		:height="size"
		:width="size" />
</template>

<style scoped lang="scss">
svg {
	display: block;
	fill: currentColor;
}
</style>
