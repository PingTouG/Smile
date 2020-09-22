<template>
  <header></header>
  <main>
    <router-view />
  </main>
  <footer>
    <tabbar :list="tabbarList" :active="activeTabbar" />
  </footer>
</template>

<script setup>
import { ref } from 'vue'
import Tabbar from './components/TheTabbar'
export { tabbarList } from '@/router/routes'

export const activeTabbar = ref('Home')

export default {
  name: 'BasisLayout',
  components: {
    Tabbar
  }
}
</script>
