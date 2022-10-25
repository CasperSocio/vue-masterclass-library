<script setup lang="ts">
const props = withDefaults(defineProps<{
    label: string
    shape?: 'pill' | 'square'
    type?: 'button' | 'reset' | 'submit'
    variant?: 'primary' | 'secondary'
}>(), {
    shape: 'pill',
    type: 'button',
    variant: 'secondary'
})

const classes = [
    'Button',
    `Button--${ props.shape }`,
    `Button--${ props.variant }`,
]
</script>

<template>
    <button :class="classes" :type="type">
        {{ label }}
    </button>
</template>

<style scoped>
.Button {
    --button-bg: slategray;
    --button-border-radius: 5rem;

    background-color: var(--button-bg);
    border: 1px solid transparent;
    border-radius: var(--button-border-radius);
    color: white;
    cursor: pointer;
    font-family: inherit;
    font-size: 1em;
    font-weight: 500;
    padding: 0.6em 1.2em;
    transition: border-color 0.25s;
}
.Button:hover {
    border-color: #646cff;
}
.Button:focus,
.Button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}

.Button--primary {
    --button-bg: slateblue;
}

.Button--square {
    --button-border-radius: 4px;
}
</style>
