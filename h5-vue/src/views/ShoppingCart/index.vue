<template>
  <van-sticky :offset-top="0">
    <div class="header">
      <h3 class="header__title">购物车</h3>
      <van-icon
        name="setting-o"
        class="header__settings"
        @click="onEditTrigger"
        size="20"
        v-show="!isEdit"
      />
      <div class="header__edit" v-show="isEdit">
        <span class="header__edit-submit" @click="onEditTrigger">完成</span>
      </div>
    </div>
  </van-sticky>
  <div class="content">
    <div class="content__count">共 {{ cartList.length }} 件</div>
    <div class="content__list" v-if="cartList.length > 0">
      <van-checkbox-group v-model="selectedIDList" ref="checkboxGroup">
        <div class="content__item" v-for="item in cartList" :key="item.id">
          <van-swipe-cell>
            <div class="content__item-container">
              <div class="item__checkbox">
                <van-checkbox
                  :name="item.id"
                  @click="onCheckboxClick(item.id)"
                />
              </div>
              <div class="item__content">
                <van-image
                  width="100"
                  height="100"
                  radius="4"
                  class="item__thumbnail"
                  :src="item.thumbnail"
                />
                <div class="item__info">
                  <div class="item__name">{{ item.name }}</div>
                  <div class="item__tags">
                    <van-tag
                      class="item__tag"
                      type="warning"
                      plain
                      v-for="tag in item.tags"
                      :key="tag"
                      >{{ tag }}</van-tag
                    >
                  </div>
                  <div class="item__footer">
                    <div class="item__price">￥{{ item.price.toFixed(2) }}</div>
                    <div class="item__count">
                      <van-stepper
                        v-model="item.count"
                        min="1"
                        button-size="20"
                        disable-input
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <template #right>
              <van-button
                square
                text="删除"
                type="danger"
                class="delete-button"
                @click="onRemove(item.id)"
              />
            </template>
          </van-swipe-cell>
        </div>
      </van-checkbox-group>
    </div>
    <van-empty description="空空如也~" v-else />
  </div>
  <div class="footer">
    <van-submit-bar
      class="footer__submit-bar"
      :price="sumPrice"
      button-text="提交订单"
      @submit="onSubmit"
      v-show="!isEdit"
    >
      <van-checkbox v-model="selectAll">
        全选
      </van-checkbox>
    </van-submit-bar>
    <div class="footer__edit-bar" v-show="isEdit">
      <div class="footer__edit-bar-inner">
        <van-checkbox v-model="selectAll">
          全选
        </van-checkbox>
        <van-button class="footer__edit-button" round @click="onRemoveList"
          >删除</van-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Notify } from 'vant'

export default {
  name: 'ShoppingCart'
}

// 选中商品列表
const selectedItemList = computed(() =>
  cartList.value.filter(item => item.checked)
)
// 选中商品ID列表
export const selectedIDList = ref([])
// 暂存选中商品ID列表,用于编辑完成后还原选中状态
let selectIDTmpList = []
// 合计金额
export const sumPrice = computed(
  () =>
    selectedItemList.value.reduce(
      (sum, next) => sum + next.price * next.count,
      0
    ) * 100
)
// 全选
export const selectAll = computed({
  get: () =>
    cartList.value.length > 0 && cartList.value.every(item => item.checked),
  set: checked => {
    cartList.value = cartList.value.map(item => {
      item.checked = checked
      return item
    })

    selectedIDList.value = selectedItemList.value.map(item => item.id)
  }
})
export const cartList = ref([
  {
    id: 1,
    name:
      '瑞士I&W手表男表男士机械表全自动时尚休闲商务百搭爱沃驰IW防水腕表【黑色牛皮带】本色深蓝面（超薄进口机芯）',
    thumbnail: 'https://img.yzcdn.cn/vant/cat.jpeg',
    tags: ['限时打折', '满1000减10', '赠折扣劵', '双11狂欢节特价'],
    price: 236,
    count: 1,
    checked: false
  },
  {
    id: 2,
    name:
      '瑞士I&W手表男表男士机械表全自动时尚休闲商务百搭爱沃驰IW防水腕表【黑色牛皮带】本色深蓝面（超薄进口机芯）',
    thumbnail: 'https://img.yzcdn.cn/vant/cat.jpeg',
    tags: ['限时打折', '满1000减10', '赠折扣劵'],
    price: 236,
    count: 1,
    checked: false
  },
  {
    id: 3,
    name:
      '瑞士I&W手表男表男士机械表全自动时尚休闲商务百搭爱沃驰IW防水腕表【黑色牛皮带】本色深蓝面（超薄进口机芯）',
    thumbnail: 'https://img.yzcdn.cn/vant/cat.jpeg',
    tags: ['限时打折', '满1000减10', '赠折扣劵'],
    price: 236,
    count: 1,
    checked: false
  },
  {
    id: 4,
    name:
      '瑞士I&W手表男表男士机械表全自动时尚休闲商务百搭爱沃驰IW防水腕表【黑色牛皮带】本色深蓝面（超薄进口机芯）',
    thumbnail: 'https://img.yzcdn.cn/vant/cat.jpeg',
    tags: ['限时打折', '满1000减10', '赠折扣劵'],
    price: 236,
    count: 1,
    checked: false
  },
  {
    id: 5,
    name:
      '瑞士I&W手表男表男士机械表全自动时尚休闲商务百搭爱沃驰IW防水腕表【黑色牛皮带】本色深蓝面（超薄进口机芯）',
    thumbnail: 'https://img.yzcdn.cn/vant/cat.jpeg',
    tags: ['限时打折', '满1000减10', '赠折扣劵'],
    price: 236,
    count: 1,
    checked: false
  },
  {
    id: 6,
    name:
      '瑞士I&W手表男表男士机械表全自动时尚休闲商务百搭爱沃驰IW防水腕表【黑色牛皮带】本色深蓝面（超薄进口机芯）',
    thumbnail: 'https://img.yzcdn.cn/vant/cat.jpeg',
    tags: ['限时打折', '满1000减10', '赠折扣劵'],
    price: 236,
    count: 1,
    checked: false
  },
  {
    id: 7,
    name:
      '瑞士I&W手表男表男士机械表全自动时尚休闲商务百搭爱沃驰IW防水腕表【黑色牛皮带】本色深蓝面（超薄进口机芯）',
    thumbnail: 'https://img.yzcdn.cn/vant/cat.jpeg',
    tags: ['限时打折', '满1000减10', '赠折扣劵'],
    price: 236,
    count: 1,
    checked: false
  }
])

// 是否编辑
export const isEdit = ref(false)
// 点击编辑
export const onEditTrigger = () => {
  isEdit.value = !isEdit.value
  if (isEdit.value) {
    selectIDTmpList = selectedIDList.value
    selectedIDList.value = []
    cartList.value = cartList.value.map(item => {
      item.checked = false
      return item
    })
  } else {
    selectedIDList.value = selectIDTmpList
    cartList.value = cartList.value.map(item => {
      item.checked = selectIDTmpList.includes(item.id)

      return item
    })
    selectIDTmpList = []
  }
}

// 点击checkbox
export const onCheckboxClick = id => {
  const target = cartList.value.find(item => item.id === id)
  target.checked = !target.checked
}
// 删除
export const onRemove = id => {
  cartList.value = cartList.value.filter(item => item.id !== id)
}
// 点击删除(删除多个)
export const onRemoveList = () => {
  if (!validator()) {
    return false
  }

  cartList.value = cartList.value.filter(
    item => !selectedIDList.value.includes(item.id)
  )
  selectedIDList.value = []
}
// 验证器
const validator = () => {
  if (selectedIDList.value.length === 0) {
    Notify({ type: 'warning', message: '请选择商品' })
    return false
  }

  return true
}
// 提交订单
export const onSubmit = () => {
  if (!validator()) {
    return false
  }

  console.log('提交订单操作')
}
</script>

<style lang="less" scoped>
@import '~@/utils/vant/var';
@import '~@/styles/mixin';

.header {
  padding: 12px;
  background-image: @gradient-blue;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__title {
    margin: 0;
  }
}

.content {
  &__count {
    background-image: @gradient-blue;
    color: #fff;
    padding: 0 12px 56px 12px;
    border-radius: 0 0 12px 12px;
  }

  &__list {
    margin: -48px 0 @tabbar-height 0;
  }

  &__item {
    width: 90%;
    margin: 0 auto 12px auto;
    border-radius: 8px;
    background-color: #fff;

    &-container {
      padding: 12px;
      display: flex;
      align-items: center;
    }
  }
}

.item {
  &__checkbox,
  &__thumbnail {
    flex: 1 0 auto;
  }

  &__content {
    padding-left: 12px;
    display: flex;
  }

  &__info {
    margin-left: 8px;
  }

  &__name {
    .ellipsis();
  }

  &__tags {
    margin: 4px 0;
  }

  &__tag {
    margin-right: 4px;
  }

  &__footer {
    position: sticky;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 8px;
  }

  &__price {
    color: @red;
    font-weight: 700;
  }
}

.footer {
  &__submit-bar {
    bottom: @tabbar-height;
  }
  &__edit-bar {
    position: fixed;
    left: 0;
    bottom: @tabbar-height;
    z-index: 100;
    width: 100%;
    user-select: none;

    &-inner {
      height: @submit-bar-height;
      padding: @submit-bar-padding;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: @submit-bar-text-font-size;
    }
  }

  &__edit-button {
    height: @submit-bar-button-height;
    width: @submit-bar-button-width;
    background-image: @gradient-red;
    color: #fff;
  }
}

.delete-button {
  height: 100%;
  border-radius: 0 8px 8px 0;
}
</style>
