<template>
  <router-view />
</template>

<script setup>
import { useStore } from 'vuex'
const store = useStore()
store.dispatch('getLocation')
</script>

<style lang="less">
@import '~@/styles/globals';
</style>
