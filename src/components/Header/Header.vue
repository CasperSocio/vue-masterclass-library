<script setup lang="ts">
defineProps<{
  /** The application title text. */
  brandName: string
}>()
</script>

<template>
  <header class="Header">
    <div class="Header__wrapper">
      <div class="Header__left">
        <p class="Header__brand-name">
          {{ brandName }}
        </p>
      </div>
      <div class="Header__right">
        <slot name="right" />
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.Header {
  border-bottom: 1px solid var(--color-border);
  margin: 0;
  padding: 0;

  &__brand-name {
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1;
    margin: 0;
  }

  &__left {
    align-items: center;
    display: flex;
    justify-content: flex-start;
  }

  &__right {
    align-items: center;
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
  }

  &__wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 1rem;
  }
}
</style>
