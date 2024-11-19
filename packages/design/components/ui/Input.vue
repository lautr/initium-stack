<script lang="ts" setup>
const { placeholder } = defineProps<{
  placeholder?: string
}>()
const { modelValue } = defineModels<{
  modelValue?: string
}>()
</script>

<template>
  <input
    v-model="modelValue"
    class="input input-bordered w-full"
    :placeholder="placeholder"
  >
</template>
