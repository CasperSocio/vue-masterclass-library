<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
	shape?: 'pill' | 'square'
	size?: 'large' | 'medium' | 'small'
	type?: 'button' | 'reset' | 'submit'
	variant?: 'primary' | 'secondary'
}>(), {
	shape: 'pill',
	size: 'medium',
	type: 'button',
	variant: 'secondary',
})

const emit = defineEmits(['click'])

const classes = computed(() => ({
	[`Button--shape-${ props.shape }`]: true,
	[`Button--size-${ props.size }`]: true,
	[`Button--variant-${ props.variant }`]: true,
}))
</script>

<template>
	<button
		class="Button"
		:class="classes"
		:type="type"
		@click="emit('click')">
		<slot />
	</button>
</template>

<style lang="scss">
@import '@/style/mixins';

.Button {
	background: linear-gradient(to right, var(--button-bg-hover) 50%, var(--button-bg) 50%);
	background-position: right bottom;
	background-size: 200% 100%;
	border: 1px solid var(--button-border);
	color: var(--button-color);
	cursor: pointer;
	font-weight: 400;
	line-height: 1;
	transition: all 0.2s ease-out;
	
	&:focus,
	&:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	}

	&:hover {
		background-position: left bottom;
		border-color: var(--button-border-hover);
		color: var(--button-color-hover);
	}
	
	&--shape {
		&-pill {
			border-radius: 5rem;
		}
		&-square {
			border-radius: 4px;
		}
	}

	&--size {
		&-large {
			font-size: 18px;
			padding: 12px 24px;
		}
		&-medium {
			font-size: 16px;
			padding: 11px 20px;
		}
		&-small {
			font-size: 14px;
			padding: 10px 16px;
		}
	}

	&--variant {
		&-primary {
			--button-bg: var(--color-primary);
			--button-bg-hover: var(--color-primary-hover);
			--button-border: var(--color-primary);
			--button-border-hover: var(--color-primary-hover);
			--button-color: var(--color-white);
			--button-color-hover: var(--color-white);
		}
		&-secondary {
			--button-bg: transparent;
			--button-bg-hover: #333;
			--button-border: #333;
			--button-border-hover: #333;
			--button-color: #333;
			--button-color-hover: var(--color-white);

			@include darkmode {
				--button-bg-hover: var(--color-white);
				--button-border: var(--color-white);
				--button-color: var(--color-white);
				--button-color-hover: #333;
			}
		}
	}
}
</style>
