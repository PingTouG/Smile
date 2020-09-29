<template>
  <div class="page">
    <div class="header__search">
      <van-search
        placeholder="请输入搜索关键词"
        input-align="center"
        shape="round"
        readonly
      />
    </div>
    <van-tree-select
      v-model:main-active-index="active"
      height="55vw"
      :items="categoryList"
    >
      <template #content>
        <van-grid :border="false" :column-num="3" icon-size="48">
          <van-grid-item
            v-for="item in categoryList[active].children"
            :key="item.id"
            :icon="item.thumbnail"
            :text="item.text"
          />
        </van-grid>
      </template>
    </van-tree-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'
export default {
  name: 'Categories'
}

export const active = ref(0)
export const categoryList = [
  {
    id: 41,
    text: '食品',
    thumbnail: 'https://img.zhongzee.com/3816170158494318592.png',
    children: [
      {
        id: 42,
        text: '休闲零食',
        thumbnail: 'https://img.zhongzee.com/3816171924988362752.png'
      },
      {
        id: 45,
        text: '方便速食',
        thumbnail: 'https://img.zhongzee.com/3816172203712446464.png'
      },
      {
        id: 69,
        text: '酒水饮料',
        thumbnail: 'https://img.zhongzee.com/3817531506042077184.png'
      },
      {
        id: 47,
        text: '南北干货',
        thumbnail: 'https://img.zhongzee.com/3816171827172999168.png'
      },
      {
        id: 46,
        text: '地方特产',
        thumbnail: 'https://img.zhongzee.com/3816172281390956544.png'
      },
      {
        id: 44,
        text: '礼品礼包',
        thumbnail: 'https://img.zhongzee.com/3816172130261794816.png'
      }
    ]
  },
  {
    id: 48,
    text: '生鲜',
    thumbnail: 'https://img.zhongzee.com/3816170096661889024.png',
    children: [
      {
        id: 50,
        text: '新鲜水果',
        thumbnail: 'https://img.zhongzee.com/3816171560239104000.png'
      },
      {
        id: 49,
        text: '时令果蔬',
        thumbnail: 'https://img.zhongzee.com/3816171680611434496.png'
      },
      {
        id: 51,
        text: '蔬菜制品',
        thumbnail: 'https://img.zhongzee.com/3816171486733926400.png'
      },
      {
        id: 52,
        text: '蛋类制品',
        thumbnail: 'https://img.zhongzee.com/3816171384472600576.png'
      },
      {
        id: 53,
        text: '熟食凉菜',
        thumbnail: 'https://img.zhongzee.com/3816171317112078336.png'
      }
    ]
  },
  {
    id: 54,
    name: '百货',
    thumbnail: 'https://img.zhongzee.com/3816170022477234176.png',
    children: [
      {
        id: 56,
        text: '文具教具',
        thumbnail: 'https://img.zhongzee.com/3816171164800122880.png'
      },
      {
        id: 59,
        text: '生活日用',
        thumbnail: 'https://img.zhongzee.com/3816170909048242176.png'
      },
      {
        id: 60,
        text: '电子产品',
        thumbnail: 'https://img.zhongzee.com/3816170826663723008.png'
      },
      {
        id: 61,
        text: '家用电器',
        thumbnail: 'https://img.zhongzee.com/3816170750381916160.png'
      },
      {
        id: 58,
        text: '节庆礼品',
        thumbnail: 'https://img.zhongzee.com/3816170959455387648.png'
      },
      {
        id: 55,
        text: '鲜花礼盒',
        thumbnail: 'https://img.zhongzee.com/3816171233846755328.png'
      }
    ]
  },
  {
    id: 62,
    name: '美妆',
    thumbnailUrl: 'https://img.zhongzee.com/3816169961064235008.png',
    subCategories: [
      {
        id: 63,
        text: '基础护肤',
        thumbnail: 'https://img.zhongzee.com/3816170674213355520.png'
      },
      {
        id: 64,
        text: '彩妆香氛',
        thumbnail: 'https://img.zhongzee.com/3816170564809129984.png'
      },
      {
        id: 65,
        text: '美容美体',
        thumbnail: 'https://img.zhongzee.com/3816170486954459136.png'
      },
      {
        id: 66,
        text: '身体洗护',
        thumbnail: 'https://img.zhongzee.com/3816170420889976832.png'
      },
      {
        id: 67,
        text: '男士护理',
        thumbnail: 'https://img.zhongzee.com/3816170197765586944.png'
      }
    ]
  }
]
</script>

<style lang="less" scoped></style>
