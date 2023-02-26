<script setup lang="ts">
import { IconName } from '@/components/Icon/Icon.utils'
import Icon from '@/components/Icon/Icon.vue'
import { computed } from 'vue'

const props = withDefaults(defineProps<{
	/**
	 * Icon to display on button.
	 */
	icon?: IconName | null
	/**
	 * Which side to position the icon.
	 */
	iconPosition?: 'left' | 'right'
	/**
	 * Button shape.
	 */
	shape?: 'pill' | 'square'
	/**
	 * Button size.
	 */
	size?: 'large' | 'medium' | 'small'
	/**
	 * Button usage context.
	 */
	type?: 'button' | 'reset' | 'submit'
	/**
	 * Button CTA options.
	 */
	variant?: 'primary' | 'secondary'
}>(), {
	icon: null,
	iconPosition: 'left',
	shape: 'pill',
	size: 'medium',
	type: 'button',
	variant: 'secondary',
})

const emit = defineEmits(['click'])

const iconSize = computed(() => {
	switch (props.size) {
		case 'large': return 18
		case 'small': return 14
		default: return 16
	}
})

const classes = computed(() => ({
	'Button': true,
	[`Button--shape-${ props.shape }`]: true,
	[`Button--size-${ props.size }`]: true,
	[`Button--variant-${ props.variant }`]: true,
}))
</script>

<template>
	<button
		:class="classes"
		:type="type"
		@click="emit('click')">
		<Icon
			v-if="icon && iconPosition === 'left'"
			:name="icon"
			:size="iconSize" />
		<span class="Button__label">
			<slot />
		</span>
		<Icon
			v-if="icon && iconPosition === 'right'"
			:name="icon"
			:size="iconSize" />
	</button>
</template>

<style lang="scss">
@import '@/style/mixins';

.Button {
	align-items: center;
	background: var(--button-bg);
	background-position: right bottom;
	background-size: 200% 100%;
	border: 1px solid var(--button-border);
	color: var(--button-color);
	cursor: pointer;
	display: inline-flex;
	font-weight: 400;
	line-height: 1;
	transition: all 0.3s ease-out;
	
	&:focus,
	&:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
	}

	&:hover {
		background-color: var(--button-bg-hover);
		border-color: var(--button-border-hover);
		color: var(--button-color-hover);
	}

	&__label {
		margin: 0 var(--label-margin);
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
			--label-margin: 10px;
			font-size: 18px;
			padding: 12px 14px;
		}
		&-medium {
			--label-margin: 8px;
			font-size: 16px;
			padding: 11px 12px;
		}
		&-small {
			--label-margin: 6px;
			font-size: 14px;
			padding: 10px 10px;
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
				--button-bg-hover: var(--color-text);
				--button-border: var(--color-text);
				--button-color: var(--color-text);
				--button-color-hover: var(--color-background);
			}
		}
	}
}
</style>
