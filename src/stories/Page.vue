<script setup lang="ts">
import Button from '@/components/Button/Button.vue'
import Header from '@/components/Header/Header.vue'
import Tip from '@/components/Tip/Tip.vue'
import { useAuthStore } from '@/stores/auth-store'

const auth = useAuthStore()
</script>

<template>
	<article>
		<Header brand-name="Vue Masterclass">
			<template #right>
				<span v-if="auth.user">
					Welcome, <b>{{ auth.userFullName }}</b>!
				</span>
				<Button
					v-if="auth.user"
					size="small"
					@click="auth.logout">
					Log out
				</Button>
				<Button
					v-if="!auth.user"
					size="small"
					@click="auth.login">
					Log in
				</Button>
				<Button
					v-if="!auth.user"
					size="small"
					variant="primary"
					@click="auth.login">
					Sign up
				</Button>
			</template>
		</Header>

		<section>
			<h2>Pages in Storybook</h2>
			<p>
				We recommend building UIs with a
				<a
					href="https://componentdriven.org"
					target="_blank"
					rel="noopener noreferrer">
					<strong>component-driven</strong>
				</a>
				process starting with atomic components and ending with pages.
			</p>
			<p>
				Render pages with mock data. This makes it easy to build and review page states without
				needing to navigate to them in your app. Here are some handy patterns for managing page data
				in Storybook:
			</p>
			<ul>
				<li>
					Use a higher-level connected component. Storybook helps you compose such data from the
					"args" of child component stories
				</li>
				<li>
					Assemble data in the page component from your services. You can mock these services out
					using Storybook.
				</li>
			</ul>
			<p>
				Get a guided tutorial on component-driven development at
				<a
					href="https://storybook.js.org/tutorials/"
					target="_blank"
					rel="noopener noreferrer">
					Storybook tutorials
				</a>
				. Read more in the
				<a
					href="https://storybook.js.org/docs"
					target="_blank"
					rel="noopener noreferrer">
					docs
				</a>
				.
			</p>
			<Tip>
				<p>
					<b>Tip:</b> Adjust the width of the canvas with the
					<svg
						width="10"
						height="10"
						viewBox="0 0 12 12"
						xmlns="http://www.w3.org/2000/svg">
						<g
							fill="none"
							fill-rule="evenodd">
							<path
								id="a"
								d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
								fill="#999" />
						</g>
					</svg>
					Viewports addon in the toolbar
				</p>
			</Tip>
		</section>
	</article>
</template>

<style scoped>
section {
	font-size: 14px;
	line-height: 24px;
	padding: 48px 20px;
	margin: 0 auto;
	max-width: 600px;
}

section h2 {
	font-weight: 900;
	font-size: 32px;
	line-height: 1;
	margin: 0 0 4px;
	display: inline-block;
	vertical-align: top;
}

section p {
	margin: 1em 0;
}

section ul {
	padding-left: 30px;
	margin: 1em 0;
}

section li {
	margin-bottom: 8px;
}

svg path {
	fill: #1ea7fd;
}
</style>
