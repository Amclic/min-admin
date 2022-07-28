<script setup lang='ts'>
const props = defineProps({
  modelValue: String
})
</script>

<template>
  <input type="text" 
    class="login-input" 
    :value="props.modelValue" 
    @input="$emit('update:modelValue', $event.target.value)">
</template>

<style lang="scss" scoped>
.login-input {
  @apply py-1 px-2 border border-gray-200 placeholder:text-xs w-full rounded-md  outline-none focus:ring-2 ring-offset-2 ring-violet-600 duration-300 focus:border-white
}
</style>