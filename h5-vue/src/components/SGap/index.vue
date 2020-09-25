<template>
  <div class="s-gap" />
</template>

<script setup>
export default {
  name: 'SGap',
  props: {
    color: {
      type: String,
      // utils/vant/var.less @gray-1
      default: '#f7f8fa'
    },
    height: {
      type: String,
      default: '12px'
    }
  }
}
</script>

<style lang="less" vars="{ color, height }" scoped>
.s-gap {
  background-color: var(--color);
  height: var(--height);
}
</style>
