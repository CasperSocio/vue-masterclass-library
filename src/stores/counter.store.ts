import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
	const count = ref(0)

	function decrement() {
		if (count.value > 0) {
			count.value--
		}
	}

	function increment() {
		count.value++
	}

	function reset() {
		count.value = 0
	}

	return {
		count,
		decrement,
		increment,
		reset,
	}
})
