<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
	/** What color should the placeholder be? */
	color?: string
	/**
	 * The amount of vertical space to occupy.  
	 * Use this to match loaded content and prevent layout shifts.
	 */
	height?: number
	shape?: 'pill' | 'soft' | 'square'
	/** The percentage of width to occupy. */
	width?: number
}>(), {
	color: '#708090',
	height: 24,
	shape: 'soft',
	width: 60,
})

const classes = computed(() => ({
	[`Placeholder--${ props.shape }`]: true,
}))

const styles = computed(() => ({
	backgroundColor: props.color,
	height: props.height + 'px',
	width: props.width + '%',
}))
</script>

<template>
	<div
		class="Placeholder"
		:class="classes"
		:style="styles" />
</template>

<style lang="scss">
.Placeholder {
	display: block;

	&--pill {
		border-radius: 10rem;
	}
	&--soft {
		border-radius: 4px;
	}
}
</style>
