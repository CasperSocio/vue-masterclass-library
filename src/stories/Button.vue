<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
	label: string
	primary?: boolean
	size?: 'small' | 'medium' | 'large'
}>(), {
	primary: false,
	size: 'medium',
})

const emit = defineEmits(['click'])

const classes = computed(() => ({
	'Button--primary': props.primary,
	'Button--secondary': !props.primary,
	[`Button--${props.size}`]: true,
}))
</script>

<template>
	<button
		class="Button"
		:class="classes"
		type="button"
		@click="emit('click')">
		{{ label }}
	</button>
</template>

<style scoped lang="scss">
@import '@/style/mixins';

.Button {
	--button-bg: transparent;
	--button-border: transparent;
	--button-color: #333;

	background-color: var(--button-bg);
	border: 1px solid var(--button-border);
	border-radius: 3em;
	color: var(--button-color);
	cursor: pointer;
	display: inline-block;
	font-weight: 700;
	line-height: 1;

	&--primary {
		--button-bg: #1ea7fd;
		--button-color: #fff;
	}

	&--secondary {
		--button-border: #333;
		@include darkmode {
			--button-border: #e7e7e7;
			--button-color: #e7e7e7;
		}
	}

	&--small {
		font-size: 12px;
		padding: 10px 16px;
	}

	&--medium {
		font-size: 14px;
		padding: 11px 20px;
	}
	
	&--large {
		font-size: 16px;
		padding: 12px 24px;
	}
}
</style>
