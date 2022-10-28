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

<style scoped lang="scss">
@import '@/style/variables';

.Button {
	--button-bg: transparent;
	--button-border: transparent;
	--button-color: #333;

	border: 1px solid;
	cursor: pointer;
	font-weight: 400;
	line-height: 1;
	transition: all 0.2s ease-out;
	
	&:focus,
	&:focus-visible {
		outline: 4px auto -webkit-focus-ring-color;
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
			background-color: $color-primary;
			border-color: transparent;
			color: #fff;
		}
		&-secondary {
			background: linear-gradient(to right, $color-text 50%, transparent 50%);
			background-position: right bottom;
			background-size: 200% 100%;
			border-color: $color-text;
			color: $color-text;

			&:hover {
				background-position: left bottom;
				color: #fff;
			}
		}
	}
}
</style>
