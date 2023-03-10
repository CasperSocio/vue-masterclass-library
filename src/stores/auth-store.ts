import { User } from '@/types/user'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)

  const userFullName = computed(() => {
    return user.value ? user.value.firstName + ' ' + user.value.lastName : null
  })

  function login() {
    user.value = {
      email: 'jane.doe@mail.com',
      firstName: 'Jane',
      lastName: 'Doe',
      uid: 'test-user-1',
    }
  }

  function logout() {
    user.value = null
  }

  return {
    user,
    userFullName,
    login,
    logout,
  }
})
