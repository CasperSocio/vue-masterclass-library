<script setup lang="ts">
import MenuItem from './MenuItem.vue'

export type MenuAction = {
  /** The text to display on the menu item */
  label: string
  /** Method to perform on click */
  fn: () => void
}

defineProps<{
  /** Menu content/items */
  actions: MenuAction[]
}>()
</script>

<template>
  <menu class="Menu">
    <MenuItem v-for="(action, index) in actions" :key="'menuItem-' + index" @click="action.fn">
      {{ action.label }}
    </MenuItem>
  </menu>
</template>

<style>
.Menu {
  background-color: #dedede;
  display: flex;
  flex-direction: column;
  gap: 2px;
  list-style: none;
  margin: 0;
  padding: 2px;
  width: fit-content;
}
</style>
