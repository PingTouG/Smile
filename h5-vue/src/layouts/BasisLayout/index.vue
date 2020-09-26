<template>
  <header></header>
  <main class="main">
    <router-view />
  </main>
  <footer>
    <s-gap />
    <tabbar :list="tabbarList" :active="activeTabbar" />
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import Tabbar from './components/TheTabbar'
import SGap from '@/components/SGap'

export default {
  name: 'BasisLayout',
  components: {
    Tabbar,
    SGap
  }
}

export { tabbarList } from '@/router/routes'

export const activeTabbar = ref('Home')
</script>

<style lang="less" scoped>
@import '~@/utils/vant/var';

.main {
  padding-bottom: @tabbar-height;
  min-height: calc(100vh - @tabbar-height - 12px);
  background-color: @bg;
}
</style>
