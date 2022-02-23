<script setup lang="ts">
import { info } from '@/api/user';

const res = await info()
console.log(res.userInfo.avatar)
</script>

<template>
  <ul class="bg-red-400">
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <router-view />
</template>

<style>
</style>
