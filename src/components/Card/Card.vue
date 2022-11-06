<script setup lang="ts">
defineProps<{
	/** Smaller text to display with the title */
	subtitle?: string
	/** The card header text */
	title: string
}>()
</script>

<template>
	<div class="Card">
		<header class="Card__header">
			<h3 class="Card__title">
				{{ title }}
			</h3>
			<h4 v-if="subtitle" class="Card__subtitle">
				{{ subtitle }}
			</h4>
		</header>
		<div class="Card__content">
			<slot />
		</div>
		<footer v-if="$slots.footer" class="Card__footer">
			<slot name="footer" />
		</footer>
	</div>
</template>

<style lang="scss">
.Card {
	border: 1px solid var(--color-border);
	border-radius: 4px;
	display: flex;
	flex-direction: column;

	&__content {
		padding: 1rem;

		& > *:first-child {
			margin-top: 0;
		}
		& > *:last-child {
			margin-bottom: 0;
		}
	}

	&__footer {
		border-top: 1px solid var(--color-border);
		display: flex;
		font-size: .75rem;
		justify-content: space-between;
		padding: .5rem 1rem;

		& > * {
			margin: 0;
		}
	}

	&__header {
		border-bottom: 1px solid var(--color-border);
		line-height: 1;
		padding: 1rem;
	}

	&__subtitle {
		font-size: 1.2rem;
		font-weight: 400;
		margin: .75rem 0 0;
	}

	&__title {
		font-size: 1.6rem;
		font-weight: 600;
		margin: 0;
	}
}
</style>
