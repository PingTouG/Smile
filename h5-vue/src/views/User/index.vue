<template>
  <div class="header">
    <div class="header__user">
      <van-image
        class="user__avatar"
        round
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <div class="user__info">
        <div class="user__name">ASDJKLJKL</div>
        <div class="user__phone">
          <span class="phone__text">136****1234</span>
          <router-link class="phone__settings" to="/">
            修改手机号
          </router-link>
        </div>
      </div>
      <van-icon class="user__settings" name="setting-o" size="28" />
    </div>
    <div class="header__asset">
      <div class="asset__item">
        <div class="asset__item-count">2</div>
        <div class="asset__item-text">商品收藏</div>
      </div>
      <div class="asset__item">
        <div class="asset__item-count">3</div>
        <div class="asset__item-text">店铺收藏</div>
      </div>
      <div class="asset__item">
        <div class="asset__item-count">2</div>
        <div class="asset__item-text">我的足迹</div>
      </div>
    </div>
  </div>
  <div class="order">
    <div class="order__list">
      <div class="order__item">
        <van-icon class="order__item-icon" name="balance-pay" size="28" />
        <div class="order__item-text">代付款</div>
      </div>
      <div class="order__item">
        <van-icon class="order__item-icon" name="logistics" size="28" />
        <div class="order__item-text">代收货</div>
      </div>
      <div class="order__item">
        <van-icon class="order__item-icon" name="cash-back-record" size="28" />
        <div class="order__item-text">退款 / 售后</div>
      </div>
    </div>
    <div class="order__item">
      <van-icon
        class="order__item-icon"
        name="orders-o"
        size="28"
        color="#ee0a24"
      />
      <div class="order__item-text">全部订单</div>
    </div>
  </div>
  <s-gap />
  <div class="asset">
    <div class="asset__list">
      <div class="asset__item">
        <div class="asset__item-count">2</div>
        <div class="asset__item-text">优惠劵</div>
      </div>
      <div class="asset__item">
        <div class="asset__item-count">3</div>
        <div class="asset__item-text">红包</div>
      </div>
    </div>
    <div class="asset__item">
      <van-icon
        class="asset__item-icon"
        name="paid"
        color="#ee0a24"
        size="28"
      />
      <div class="order__item-text">我的资产</div>
    </div>
  </div>
  <s-gap />
  <s-card class="tools" title="工具与服务" radius="16px" :is-more="false">
    <div class="tools__list">
      <div class="tools__item">
        <van-image
          class="tools__item-icon"
          round
          src="http://img12.360buyimg.com/img/s70x70_jfs/t1/135809/4/7014/5528/5f35369dE8aff3fab/f4b952a87ea33ae4.png.webp"
        />
        <div class="tools__item-text">
          客户服务
        </div>
      </div>
      <div class="tools__item">
        <van-image
          class="tools__item-icon"
          round
          src="//img12.360buyimg.com/img/s70x70_jfs/t1/143427/38/5400/4413/5f350384Edba4458b/bfcb210d2110a7d8.png.webp"
        />
        <div class="tools__item-text">
          我的预约
        </div>
      </div>
    </div>
  </s-card>
</template>

<script setup>
import SGap from '@/components/SGap'
import SCard from '@/components/SCard'

export default {
  name: 'User',
  components: {
    SGap,
    SCard
  }
}
</script>

<style lang="less" scoped>
@import '~@/utils/vant/var';

.header {
  padding: 12px;
  background-image: @gradient-blue;
  color: #fff;

  &__user {
    display: flex;
    justify-content: space-between;
  }

  &__asset {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 24px 0;
    text-align: center;
  }
}

.user {
  &__avatar {
    height: 60px;
    width: 60px;
  }

  &__info {
    flex: 1 0 auto;
    padding: 8px 12px;
  }

  &__name {
    font-size: 16px;
  }

  &__phone {
    margin-top: 8px;
    display: flex;
    align-items: center;
  }
}

.phone {
  &__text {
    color: @info;
    margin-right: 4px;
  }

  &__settings {
    color: rgba(@primary, 0.8);
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 4px;
    line-height: 1;
    font-size: 10px;
  }
}

.asset__item {
  &-count {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
  }
}

.order,
.asset {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  text-align: center;
  background-color: #fff;

  &__list {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1 0 auto;
  }
}

.order {
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  margin-top: -12px;
}

.asset {
  border-radius: 16px;
}

.tools {
  background-color: #fff;

  &__list {
    display: grid;
    grid-template-columns: repeat(4, 22%);
    row-gap: 10%;
    column-gap: 4%;
    margin-bottom: 12px;
  }

  &__item {
    text-align: center;

    &-icon {
      width: 40px;
      margin-bottom: 4px;
    }
  }
}
</style>
