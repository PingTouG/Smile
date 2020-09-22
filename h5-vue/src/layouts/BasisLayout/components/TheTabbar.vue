<template>
  <van-tabbar :model-value="active" route>
    <van-tabbar-item
      v-for="item in list"
      :key="item.name"
      :name="item.name"
      :to="{ name: item.name }"
      :icon="item.icon"
    >
      {{ item.text }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
export default {
  name: 'Tabbar',
  props: {
    active: [String, Number],
    list: {
      type: Array,
      default: () => []
    }
  }
}
</script>
