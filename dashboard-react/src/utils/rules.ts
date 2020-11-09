import { Rule } from 'antd/lib/form'

const validateTrigger = 'onSubmit'

/**
 * @method isRequired
 * @description 必填项
 * @param message 提示信息
 * @returns 校验规则
 */
export const isRequired = (message = '必填项'): Rule => ({
  required: true,
  validateTrigger,
  message,
})

/**
 * @method min
 * @description 最小长度
 * @param min 最小长度
 * @returns 校验规则
 */
export const min = (min = 6): Rule => ({
  min,
  validateTrigger,
  message: `至少${min}位`,
})

/**
 * @method isNumber
 * @description 是否为数字
 * @returns 校验规则
 */
export const isNumber = (): Rule => ({
  pattern: /\d/,
  message: '只能为数字',
  validateTrigger,
})

/**
 * @method isNumber
 * @description 是否为邮箱
 * @returns 校验规则
 */
export const isEmail = (): Rule => ({
  pattern: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  message: '请输入正确的邮箱格式',
  validateTrigger,
})

/**
 * @method isURL
 * @description 是否为url
 * @param message 错误信息
 * @returns 校验规则
 */
export const isURL = (message = '请输入正确的地址'): Rule => ({
  type: 'url',
  message,
  validateTrigger,
})
