<template>
  <div :class="['s-product-card', `s-product-card--${direction}`]">
    <div class="s-product-card__thumbnail">
      <van-image
        fit="cover"
        class="s-product-card__thumbnail-img"
        :src="thumbnail"
        :radius="thumbnailRadius"
      />
      <span class="s-product-card__type" v-if="type">{{ type }}</span>
    </div>
    <div
      :class="['s-product-card__main', `s-product-card__main--${direction}`]"
    >
      <div class="s-product-card__tags">
        <van-tag
          class="s-product-card__tag"
          v-for="(tag, index) in tags"
          :key="`${tag}_${index}`"
          :color="tagColor"
          plain
        >
          {{ tag }}
        </van-tag>
      </div>
      <div class="s-product-card__name">
        {{ name }}
      </div>
      <div class="s-product-card__footer">
        <div class="s-product-card__price">￥{{ price }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SProductCard',
  props: {
    direction: {
      type: String,
      default: 'vertical',
      validator: value => ['horizontal', 'vertical'].includes(value)
    },
    thumbnail: String,
    thumbnailRadius: {
      type: [Number, String],
      default: 4
    },
    name: String,
    tags: {
      type: Array,
      default: () => []
    },
    tagColor: {
      type: String,
      // utils/vant/var.less @red
      default: '#ee0a24'
    },
    price: Number
  }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin';
@import '~@/utils/vant/var';

.s-product-card {
  display: flex;
  box-shadow: @shadow;
  background-color: #fff;

  &--vertical {
    display: flex;
    flex-direction: column;
  }

  &__thumbnail {
    text-align: center;
  }

  &__main {
    padding: 4px;
  }

  &__name {
    font-weight: 500;
    font-size: 12px;
    .ellipsis(2);
    margin: 4px 0;
  }

  &__price {
    color: @orange;
    font-weight: 700;
  }

  &__tag {
    margin-left: 4px;
    font-size: 10px;

    &:first-child {
      margin-left: 0;
    }
  }
}
</style>
