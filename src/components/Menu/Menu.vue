<script setup lang="ts">
import MenuItem from './MenuItem.vue'

type Action = {
	/** The text to display on the menu item */
	label: string
}

defineProps<{
	/** Menu content/items */
	actions: Action[]
}>()
</script>

<template>
	<menu class="Menu">
		<MenuItem
			v-for="action in actions">
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
  padding: 2px;
  width: fit-content;
}
</style>
