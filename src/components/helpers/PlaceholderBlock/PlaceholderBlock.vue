<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant: 'A' | 'B' | 'C'
}>()

const classes = computed(() => ({
  PlaceholderBlock: true,
  [`PlaceholderBlock--variant-${props.variant}`]: true,
}))
</script>

<template>
  <div :class="classes">
    {{ variant }}
  </div>
</template>

<style scoped lang="scss">
.PlaceholderBlock {
  align-items: center;
  background-color: var(--phb-bg);
  color: var(--phb-color);
  display: flex;
  font-weight: 800;
  justify-content: center;
  line-height: 1;
  min-height: 100%;
  min-width: 6ch;
  //width: 100%;

  &--variant {
    &-A {
      --phb-bg: #d1e7dd;
      --phb-color: #146c43;
    }
    &-B {
      --phb-bg: #cff4fc;
      --phb-color: #087990;
    }
    &-C {
      --phb-bg: #fff3cd;
      --phb-color: #997404;
    }
  }
}
</style>
