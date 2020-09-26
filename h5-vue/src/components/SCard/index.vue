<template>
  <div class="s-card">
    <div class="s-card__header">
      <template v-if="!!$slots?.header">
        <slot name="header" />
      </template>
      <div class="s-card__header-container" v-else>
        <div class="s-card__header-left">
          <div class="s-card__title" v-if="!!$slots?.title">
            <slot name="title" />
          </div>
          <div class="s-card__title" v-else>{{ title }}</div>
          <div class="s-card__description">{{ description }}</div>
        </div>
        <div class="s-card__header-right">
          <template v-if="!!$slots?.right">
            <slot name="right" />
          </template>
          <div
            class="s-card__header-more"
            @click="$emit('more')"
            v-else-if="isMore"
          >
            <span class="s-card__more">更多</span>
            <!-- vant/var.less @gray-6 -->
            <van-icon name="arrow" size="16" color="#969799" />
          </div>
        </div>
      </div>
    </div>
    <div class="s-card__body">
      <slot />
    </div>
  </div>
</template>

<script setup>
export default {
  name: 'SCard',
  props: {
    title: String,
    description: String,
    radius: {
      type: String,
      default: '4px'
    },
    bgColor: {
      type: String,
      default: 'transparent'
    },
    isMore: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" vars="{ bgColor,radius }" scoped>
@import '~@/utils/vant/var';

.s-card {
  background-color: var(--bgColor);
  border-radius: var(--radius);
  box-shadow: @shadow;

  &__header {
    &-container {
      padding: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid @gray-1;
    }

    &-left {
      flex: 1 0 auto;
      display: flex;
      align-items: flex-end;
    }

    &-more {
      display: flex;
      align-items: center;
    }
  }

  &__title {
    font-size: 18px;
    font-weight: 700;
    margin-right: 12px;
  }

  &__description {
    color: @info;
    font-size: 12px;
  }

  &__more {
    color: @info;
  }

  &__body {
    padding: 12px;
  }
}
</style>
