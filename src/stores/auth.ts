import { Auth } from '@/types/auth'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('user', {
	state: (): Auth => ({
		user: null,
	}),
	actions: {
		login() {
			this.user = {
				email: 'jane.doe@mail.com',
				firstName: 'Jane',
				lastName: 'Doe',
				uid: 'test-user-1',
			}
		},
		logout() {
			this.user = null
		},
	},
	getters: {
		userFullName(): string | null {
			return this.user
				? this.user.firstName + ' ' + this.user.lastName
				: null
		},
	},
})
