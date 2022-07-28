<script lang='ts' setup>
import { ref } from 'vue'
const linkList = ref(['网站首页', '用户注册', '找回密码', '联系我们'])
const form = ref({
  account: '',
  password: ''
})
</script>

<template>
  <div class="bg-slate-300 h-screen flex justify-center items-center p-4">
    <div class="w-[720px] bg-white md:grid grid-cols-2 rounded-md shadow-sm overflow-hidden">
      <div class="p-6">
        <h2 class="text-center text-gray-500 text-lg mt-3">用户登陆</h2>
        <div class="mt-8">
          <m-input placeholder="请输入用户名" v-model="form.account"/>
          <m-input placeholder="请输入密码" class="mt-3" v-model="form.password"/>
        </div>
        <m-button></m-button>
        <div class="flex gap-2 justify-center mt-5">
          <m-link v-for="item in linkList">
            <template #title>{{ item }}</template>
          </m-link>
        </div>
      </div>
      <div class="hidden md:block">
        <img src="@/assets/images/login.jpg" class="h-80 w-full object-cover">
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>