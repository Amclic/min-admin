<script setup lang='ts'>
  
</script>

<template>
  admin/user.vue
</template>

<style lang="scss" scoped>
</style>

<!-- 自定义路由不从自动注册的路由走 -->
<script>
export default {
  route: { path: '/aaaa', name:'123123'}
}
</script>