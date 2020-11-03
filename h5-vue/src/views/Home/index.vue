<template>
  <section class="page">
    <header class="header">
      <van-sticky>
        <div class="header__top">
          <div class="header__location">
            <van-icon name="location-o" />
            <div class="header__location-text">
              {{ city }}
            </div>
          </div>
          <div class="header__search">
            <van-search
              placeholder="请输入搜索关键词"
              input-align="center"
              background="transparent"
              shape="round"
              readonly
            />
          </div>
          <div class="header__message header__message--active">
            <van-icon name="bell" size="20" />
          </div>
        </div>
      </van-sticky>
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
      <van-grid class="quick" :border="false" :column-num="5">
        <van-grid-item
          v-for="quick in state.quickList"
          :key="quick.text"
          :icon="quick.image"
          :text="quick.text"
        />
      </van-grid>
    </header>

    <s-gap class="gap" />
    <main>
      <s-card bg-color="#fff" class="seckill">
        <template #title>
          <div class="seckill__title">
            <van-icon name="clock-o" color="#ee0a24" size="24" />
            <div class="seckill__title-container">
              <div class="seckill__title-text">限时秒杀</div>
              <div class="seckill__time">
                <div class="seckill__time-room">
                  10点场次
                </div>
                <van-count-down class="seckill__time-count" :time="time" />
              </div>
            </div>
          </div>
        </template>
        <div class="seckill__list">
          <div
            class="seckill__item"
            v-for="seckillItem in state.seckillList"
            :key="seckillItem.id"
          >
            <van-image
              class="seckill__item-img"
              radius="4"
              fit="cover"
              :src="seckillItem.thumbnail"
            />
            <div class="seckill__price">￥{{ seckillItem.price }}</div>
            <div class="seckill__original-price">
              ￥{{ seckillItem.originalPrice }}
            </div>
          </div>
        </div>
      </s-card>
      <s-gap class="gap" />
      <s-card bg-color="#fff" class="activity" :is-more="false">
        <template #title>
          <div class="activity__header">
            <van-icon name="gift" color="#ed6a0c" size="24" />
            <div class="activity__title">活动专区</div>
          </div>
        </template>
        <div class="activity__list">
          <van-image
            class="activity__item"
            radius="4"
            v-for="image in state.activityList"
            :key="image"
            :src="image"
          />
        </div>
      </s-card>
      <s-gap class="gap" />
      <div class="recommend">
        <div class="recommend__header">
          <div class="recommend__title">每日推荐</div>
        </div>
        <div class="recommend__list">
          <s-product-card
            class="recommend__item"
            v-for="product in state.recommendList"
            :key="product.id"
            :name="product.name"
            :tags="product.tags"
            :thumbnail="product.thumbnail"
            :price="product.price"
          />
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import SGap from '@/components/SGap'
import SCard from '@/components/SCard'
import SProductCard from '@/components/SProductCard'
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'HomePage',
  components: {
    SGap,
    SCard,
    SProductCard
  }
}
const store = useStore()

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
const seckillList = [
  {
    id: 22,
    originalPrice: 125,
    price: 85,
    thumbnail:
      '//img10.360buyimg.com/n7/s150x150_jfs/t1/89098/29/17891/340126/5e8bddcaEb6c2ba10/ff232054676776de.jpg.dpg'
  },
  {
    id: 23,
    originalPrice: 55,
    price: 20,
    thumbnail:
      '//img10.360buyimg.com/n7/s150x150_jfs/t1/128726/5/5140/68963/5eeb8a39E1b9d35a0/ef5fa3b679e37828.jpg.dpg'
  },
  {
    id: 24,
    originalPrice: 75,
    price: 35,
    thumbnail:
      '//img10.360buyimg.com/n7/s150x150_jfs/t1/151519/35/704/171412/5f6caef8E0135b4c7/fbde246242c6bc33.jpg.dpg'
  },
  {
    id: 25,
    originalPrice: 50,
    price: 25,
    thumbnail:
      '//img10.360buyimg.com/n7/s150x150_jfs/t1/111909/17/18810/169647/5f6c49ceEc8c06b3d/b905417ea52717cc.jpg.dpg'
  },
  {
    id: 26,
    originalPrice: 50,
    price: 25,
    thumbnail:
      '//img10.360buyimg.com/n7/s150x150_jfs/t1/111909/17/18810/169647/5f6c49ceEc8c06b3d/b905417ea52717cc.jpg.dpg'
  },
  {
    id: 27,
    originalPrice: 50,
    price: 25,
    thumbnail:
      '//img10.360buyimg.com/n7/s150x150_jfs/t1/111909/17/18810/169647/5f6c49ceEc8c06b3d/b905417ea52717cc.jpg.dpg'
  }
]
const activityList = [
  '//m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg',
  '//m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg',
  '//m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg',
  '//m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg'
]
const recommendList = [
  {
    id: 31,
    price: 85,
    tags: ['满减', '限时秒杀'],
    name:
      '子牧棉麻秋季冬新款 女韩版衬衫领ins分娃娃领减龄修身毛衣长袖针织衫0860 5300红色 均码',
    thumbnail:
      '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/42276/21/15101/95949/5d7f484fE281524c5/faf666685f8f4403.jpg!q70.dpg.webp'
  },
  {
    id: 33,
    price: 169,
    name:
      '美的（Midea）电磁炉 触控按键 一键爆炒 电磁灶微晶面板 六大烹饪功能  定时功能 C21-RT2140（赠渗氮炒锅）',
    thumbnail:
      '//img12.360buyimg.com/mobilecms/s372x372_jfs/t1/138926/27/8050/135075/5f58ad0cEf0d3f852/7a2d6e9a5c3beb37.jpg!q70.dpg.webp'
  },
  {
    id: 33,
    price: 35,
    tags: ['满减', '限时秒杀', '赠劵', '新人特惠'],
    name:
      '米家 小米电磁炉 99档微调控火 低温烹饪技术 火锅炒菜蒸煮煎炸汤粥5大模式 可定时',
    thumbnail:
      '//img14.360buyimg.com/mobilecms/s372x372_jfs/t1/130583/12/1346/97778/5ed85df4Ebea5c892/ba6276c0e5bc239c.jpg!q70.dpg.webp'
  },
  {
    id: 34,
    price: 25,
    name:
      '享趣 折叠躺椅懒人沙发家用午休午睡床多功能办公室靠背沙滩单人靠椅子40扁管多功能折叠床配厚垫',
    thumbnail:
      '//img10.360buyimg.com/mobilecms/s372x372_jfs/t1/116585/37/9831/230812/5edf1661E64e143f9/6c16079142f76134.jpg!q70.dpg.webp'
  },
  {
    id: 35,
    name:
      '新日（Sunra）电动自行车新国标代驾折叠锂电池小型成人男女迷你单车助力电瓶车 标准版炫酷黑 定制汽车电芯 助力60公里',
    price: 25,
    thumbnail:
      '//img13.360buyimg.com/mobilecms/s372x372_jfs/t1/119230/16/18605/170558/5f6d9d2cEcf0d7708/dc6e7e2cd2e234cf.jpg!q70.dpg.webp'
  }
]

export const state = reactive({
  swiperList,
  quickList,
  seckillList,
  activityList,
  recommendList
})
export const activityHeight = '200px'
export const activityRow = 2
export const activityColumn = computed(() =>
  parseInt(activityList.length / activityRow)
)
export const time = ref(12000000)
export const city = computed(() =>
  store.getters.city ? store.getters.city : '定位中...'
)
</script>

<style
  lang="less"
  vars="{ activityHeight, activityRow, activityColumn }"
  scoped
>
@import '~@/utils/vant/var';

.header {
  background-color: #fff;

  &__top {
    display: flex;
    align-items: center;
    padding: 0 12px;
    font-size: 12px;
    background-color: @primary;
    color: #fff;
  }

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
      top: 2px;
      right: 2px;
      height: 6px;
      width: 6px;
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

.seckill,
.activity,
.recommend {
  width: calc(100% - 24px);
  margin: 0 auto;

  &__header {
    display: flex;
    align-items: center;
  }
}

.seckill {
  &__title {
    display: flex;
    align-items: center;
    color: @red;

    &-container {
      margin: 0;
      display: flex;
      align-items: center;
    }

    &-text {
      margin: 0 0 0 4px;
    }
  }

  &__time {
    display: flex;
    align-items: center;
    margin-left: 4px;
    border: 1px solid @red;
    border-radius: 20px;
    font-size: 10px;
    font-weight: 700;

    &-room {
      display: flex;
      align-items: center;
      align-self: stretch;
      color: #fff;
      background-color: @red;
      border-radius: 20px;
      padding: 0 4px;
    }

    &-count {
      color: @red;
      padding: 0 8px;
    }
  }

  &__list {
    display: flex;
    overflow-y: auto;
    padding-bottom: 2px;
  }

  &__item {
    text-align: center;
    margin-left: 8px;
    &:first-child {
      margin-left: 0;
    }

    &-img {
      height: 80px;
      width: 80px;
    }
  }

  &__price {
    color: @red;
    font-weight: 700;
  }

  &__original-price {
    font-size: 10px;
    text-decoration: line-through;
    color: @info;
  }
}

.activity {
  &__title {
    color: @orange-dark;
    margin: 0 0 0 4px;
  }

  &__list {
    height: var(--activityHeight);
    display: grid;
    grid-template-columns: repeat(
      var(--activityColumn),
      calc(100% / var(--activityColumn))
    );
    grid-template-rows: repeat(var(--activityRow), auto);
    column-gap: 1%;
    row-gap: 1%;
  }
}

.recommend {
  &__header {
    padding: 12px;
    justify-content: center;
    background-color: #fff;
  }

  &__title {
    color: @orange-dark;
    margin: 0;
    position: relative;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 700;

    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 35px;
      height: 20px;
    }

    &::before {
      top: 0;
      left: 0;
      border-top: 3px solid @orange;
      border-left: 3px solid @orange;
      border-top-left-radius: 4px;
    }

    &::after {
      bottom: 0;
      right: 0;
      border-bottom: 3px solid @orange;
      border-right: 3px solid @orange;
      border-bottom-right-radius: 4px;
    }
  }

  &__list {
    padding-top: 10px;
    display: grid;
    grid-template-columns: repeat(2, 48%);
    column-gap: 10px;
    row-gap: 10px;
  }
}
</style>
