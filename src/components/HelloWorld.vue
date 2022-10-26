<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { ref } from 'vue'
import Button from './Button/Button.vue'

defineProps<{
	msg: string
}>()

const auth = useAuthStore()

const count = ref(0)

const handleDecrement = () => {
	if (count.value > 0) {
		count.value--
	}
}

const handleIncrement = () => {
	count.value++
}
</script>

<template>
	<h1>{{ msg }}</h1>

	<div class="card">
		<p>Count is {{ count }}</p>

		<!-- Increment button -->
		<Button
			variant="primary"
			@click="handleIncrement">
			increment
		</Button>

		<!-- Decrement button -->
		<Button
			variant="secondary"
			@click="handleDecrement">
			decrement
		</Button>

		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>
	</div>

	<div class="card">
		<p v-if="auth.user">
			User: {{ auth.userFullName }}
		</p>
		<Button v-if="!auth.user" @click="auth.login()">
			Login
		</Button>
		<Button v-if="auth.user" @click="auth.logout()">
			Logout
		</Button>
	</div>

	<p>
		Check out
		<a
			href="https://vuejs.org/guide/quick-start.html#local"
			target="_blank">
			create-vue
		</a>, the official Vue + Vite starter
	</p>
	<p>
		Install
		<a
			href="https://github.com/johnsoncodehk/volar"
			target="_blank">
			Volar
		</a>
		in your IDE for a better DX
	</p>
	<p class="read-the-docs">
		Click on the Vite and Vue logos to learn more
	</p>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
</style>
