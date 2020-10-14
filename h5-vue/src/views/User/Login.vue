<template>
  <van-nav-bar title="Slime商城登录" left-arrow @click-left="onBack" />
  <van-form class="form" @submit="onSubmit">
    <template v-if="isPhoneLogin">
      <van-field
        v-model="form.phone"
        placeholder="请输入手机号"
        :rules="rules.phone"
        clearable
      />
      <van-field
        v-model="form.code"
        placeholder="请输入短信验证码"
        :rules="rules.code"
        center
        clearable
      >
        <template #button>
          <van-button
            class="send-code__button"
            size="mini"
            type="primary"
            v-show="countDown === 0"
            @click="onSendCode"
          >
            发送验证码
          </van-button>
          <van-button
            class="send-code__button"
            size="mini"
            type="primary"
            disabled
            v-show="countDown !== 0"
          >
            <van-count-down :time="countDown" @finish="countDown = 0">
              <template #default="time">
                <div class="count-down">{{ time.seconds }}S</div>
              </template>
            </van-count-down>
          </van-button>
        </template>
      </van-field>
    </template>
    <template v-else>
      <van-field
        v-model="form.username"
        placeholder="请输入账号"
        :rules="rules.username"
        clearable
      />
      <van-field
        v-model="form.password"
        type="password"
        placeholder="请输入密码"
        :rules="rules.password"
        clearable
      />
    </template>
    <div class="form__button">
      <van-button
        color="linear-gradient(to right, #8E2DE2, #1989fa)"
        native-type="submit"
        round
        block
      >
        登录
      </van-button>
    </div>
    <div class="form__button">
      <van-button type="primary" round plain block>
        一键登录
      </van-button>
    </div>
  </van-form>
  <div class="form__footer">
    <div class="mode__trigger" @click="onModeTrigger">
      {{ isPhoneLogin ? '账号密码登录' : '短信验证码登录' }}
    </div>
    <div class="register">
      手机快速注册
    </div>
  </div>
  <div class="other-way">
    <div class="other-way__title">
      <van-divider>其他登录方式</van-divider>
    </div>
    <div class="other-way__list">
      <div class="way__item way__item--qq">
        <van-image class="way__item-icon" :src="loginWays.qq" />
        <div>QQ</div>
      </div>
      <div class="way__item way__item--wechat">
        <van-image class="way__item-icon" :src="loginWays.wechat" />
        <div>微信</div>
      </div>
    </div>
  </div>
  <div class="footer">
    <span>未注册的手机号验证后将自动创建Slime商城账号, </span>
    <span>登录即代表您已同意</span>
    <router-link to="/" class="footer__policy">Slime商城隐私政策</router-link>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import qq from '@/assets/images/user/qq.png'
import wechat from '@/assets/images/user/wechat.png'
import { phone } from '@/utils/regExp.js'
import { useRouter } from 'vue-router'

export default {
  name: 'Login'
}

const router = useRouter()
export const onBack = () => {
  router.back()
}

export const isPhoneLogin = ref(true)
export const onModeTrigger = () => {
  isPhoneLogin.value = !isPhoneLogin.value
}

export const countDown = ref(0)
export const onSendCode = () => {
  countDown.value = 60000
}

export const form = reactive({
  username: '',
  password: ''
})

export const onSubmit = () => {}

export const rules = {
  username: [
    {
      required: true,
      message: '请输入账号',
      trigger: 'submit'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'submit'
    }
  ],
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'submit'
    },
    {
      pattern: phone,
      message: '请输入正确的手机号',
      trigger: 'submit'
    }
  ],
  code: [
    {
      required: true,
      message: '请输入短信验证码',
      trigger: 'submit'
    },
    {
      pattern: /\d{6}/,
      message: '请输入6位验证码',
      trigger: 'submit'
    }
  ]
}

export const loginWays = {
  qq,
  wechat
}
</script>

<style lang="less" scoped>
.form {
  padding-top: 24px;

  &__button {
    margin: 16px;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    color: @info;
  }
}

.send-code__button {
  min-width: 70px;
}

.count-down {
  color: #fff;
  text-align: center;
}

.other-way {
  text-align: center;
  padding: 48px 16px 16px 16px;
  color: @info;
  position: relative;

  &__list {
    display: flex;
    justify-content: space-around;
    width: 60%;
    margin: 24px auto;
  }
}

.way__item {
  display: inline-block;
  text-align: center;

  &-icon {
    height: 35px;
    width: 35px;
    padding: 4px;
  }

  &--qq &-icon {
    background-color: rgba(@primary, 0.2);
    border-radius: 50%;
  }

  &--wechat &-icon {
    background-color: rgba(@green, 0.2);
    border-radius: 50%;
  }
}

.footer {
  color: @gray-5;
  padding: 16px;
  text-align: center;
  font-size: 12px;

  &__policy {
    color: @primary;
  }
}
</style>
