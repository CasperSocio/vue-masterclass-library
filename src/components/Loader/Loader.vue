<script setup lang="ts">
import Placeholder from '@/components/Placeholder/Placeholder.vue'
import { computed } from 'vue'

type State = 'error' | 'idle' | 'loading'

const props = withDefaults(defineProps<{
	contentHeight?: number
	/**
	 * The amount of vertical space to occupy.  
	 * Use this to match loaded content and prevent layout shifts.
	 */
	height?: number
	shape?: 'pill' | 'soft' | 'square'
	/**
	 * What state to display the loader in.
	 * - `idle` displays the content as-is.
	 * - `loading` displays the default loader.
	 * - `error` displays the loader in red.
	 */
	state: State
	/** The percentage of width to occupy. */
	width?: number
}>(), {
	contentHeight: 24,
	height: 56,
	shape: 'soft',
	width: 35,
})

const classes = computed(() => ({
	[`Loader--${ props.state }`]: true,
}))

const placeholderColor = computed(() => {
	return props.state === 'error' ? '#f7b1b1' : '#c9d6e1'
})

const styles = computed(() => {
	return props.state !== 'idle' ? {
		height: props.height + 'px',
	} : {}
})
</script>

<template>
	<div
		class="Loader"
		:class="classes"
		:style="styles">
		<slot v-if="state === 'idle'" />
		<Placeholder
			v-else
			:color="placeholderColor"
			:height="contentHeight"
			:shape="shape"
			:width="width" />
	</div>
</template>

<style lang="scss">
.Loader {
	&:not(.Loader--state-idle) {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
}
</style>
