<template>
  <section class="page">
    <header class="header">
      <div class="header__location">
        <van-icon name="location-o" />
        <div class="header__location-text">
          中国
        </div>
      </div>
      <div class="header__search">
        <van-search
          placeholder="请输入搜索关键词"
          input-align="center"
          background="#1989fa"
          shape="round"
          readonly
        />
      </div>
      <div class="header__message header__message--active">
        <van-icon name="envelop-o" size="24" />
      </div>
    </header>
    <main>
      <div class="swiper">
        <van-swipe :autoplay="3000">
          <van-swipe-item
            v-for="(image, index) in state.swiperList"
            :key="index"
          >
            <van-image radius="8" :src="image" class="swiper__item" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="quick">
        <s-icon-tag
          class="quick__item"
          v-for="quick in state.quickList"
          :key="quick.text"
          :icon="quick.image"
          :text="quick.text"
        />
      </div>
      <s-gap />
    </main>
  </section>
</template>

<script setup>
import SIconTag from '@/components/SIconTag'
import SGap from '@/components/SGap'
import { reactive } from 'vue'

export default {
  name: 'HomePage',
  components: {
    SIconTag,
    SGap
  }
}

const swiperList = [
  '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/151386/13/1277/145520/5f69c22aE12fae89c/3a066831c26c215a.jpg!q70.jpg.dpg',
  '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/152510/33/666/125019/5f6c04d2Ead02ae7c/04784cbe7d7bd270.jpg!q70.jpg.dpg',
  '//m.360buyimg.com/mobilecms/s700x280_jfs/t1/132405/7/10554/118131/5f6c81b2E300e2a7d/d414eb6631b4151e.jpg!q70.jpg.dpg'
]
const quickList = [
  {
    image:
      '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/125678/35/5947/4868/5efbf28cEbf04a25a/e2bcc411170524f0.png.webp',
    text: '超市'
  },
  {
    image:
      '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png.webp',
    text: '数码'
  },
  {
    image:
      '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/135931/4/3281/5598/5efbf2c0Edbdc82c7/ed9861b4ddfb9f30.png.webp',
    text: '精品服饰'
  },
  {
    image:
      '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/129215/21/5978/3618/5efbf344Ebec23ae8/59712d986b10bb0a.png.webp',
    text: '特价生鲜'
  },
  {
    image:
      '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/116602/7/11200/3796/5efbf375Ebba41029/f07cc166f368fa05.png.webp',
    text: '送货到家'
  },
  {
    image:
      '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/146390/3/1846/4909/5efbf39aEe5f5f797/300071558a9ab078.png.webp',
    text: '充值缴费'
  },
  {
    image:
      '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/143365/25/1824/3716/5efbf3c0E5175e1fb/88f6227257a29f1d.png.webp',
    text: '9.9元拼'
  },
  {
    image:
      '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/113589/24/11332/4897/5efbf3feE705d87db/e5c12d5e943266b9.png.webp',
    text: '领劵'
  },
  {
    image:
      '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/131663/33/3380/3674/5efbf50fEf79cf314/af4b57d2383e605d.png.webp',
    text: '领津贴'
  },
  {
    image:
      '//m.360buyimg.com/mobilecms/s120x120_jfs/t1/123730/37/5924/4189/5efbf567E0a226121/d04df7c74c87cf68.png.webp',
    text: 'PLUS会员'
  }
]

export const state = reactive({
  swiperList,
  quickList
})
</script>

<style lang="less" scoped>
@import '~@/utils/vant/var';

.page {
  padding-bottom: @tabbar-height;
}

.header {
  padding: 0 12px;
  display: flex;
  align-items: center;
  font-size: 12px;
  background-color: @primary;
  color: #fff;

  &__location {
    display: flex;
    align-items: center;

    &-text {
      max-width: 50px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  &__search {
    flex: 1 0 auto;
  }

  &__message {
    position: relative;

    &--active::before {
      content: '';
      position: absolute;
      top: 0;
      right: -2px;
      height: 8px;
      width: 8px;
      border-radius: 50%;
      background-color: @red;
      z-index: 1;
    }
  }
}

.swiper {
  padding: 0 12px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 65%;
    width: 100%;
    background-color: @primary;
    border-radius: 0 0 12px 12px;
  }

  &__item {
    height: 150px;
  }
}

.quick {
  padding: 4px 12px;
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  grid-template-rows: auto auto;

  &__item {
    padding: 4px 0;
  }
}

.activity {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: wrap;

  &__item {
    width: 49%;
  }
}
</style>
