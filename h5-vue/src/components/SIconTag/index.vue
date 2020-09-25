<template>
  <div class="s-tag">
    <van-image :src="icon" height="40" width="40" fit="cover" />
    <div class="s-tag__text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'STag',
  props: {
    icon: String,
    text: String,
    color: {
      type: String,
      //   utils/vant/var.less @gray-6
      default: '#969799'
    }
  }
}
</script>

<style lang="less" vars="{ color }" scoped>
@import '~@/utils/vant/var';

.s-tag {
  display: inline-block;
  text-align: center;
  color: var(--color);
}
</style>
