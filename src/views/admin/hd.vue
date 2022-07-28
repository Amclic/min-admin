<script setup lang='ts'>
import { Form, Field, ErrorMessage } from 'vee-validate';
import { ref } from 'vue';
import {required, min, max, confi } from '@vee-validate/rules'

const account = ref<string>('')
const emailRule = (value: any) => {
  return /@/.test(value) ? true : '邮箱格式错误'
}
const onSubmit = (values: any) => {
  console.log(values)

  alert('验证通过')
}
</script>

<template>
  <Form @submit="onSubmit">
    <Field name="account" :rules="emailRule" :validate-on-input="true" #default="{field, errorMessage}">
      <input v-bind="field" v-model="account">
      <hr>
      <button>提交</button>
    </Field>
    <ErrorMessage name="account"/>
  </Form>
</template>

<style lang="scss" scoped>
div {
  @apply flex w-screen h-screen justify-center items-center bg-gray-600;
  input {
    @apply border-4 p-2 rounded-md border-violet-500;
  }
}
</style>