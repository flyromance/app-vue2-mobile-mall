<template>
  <span class="text-icon-wrapper">
      <span v-show="showIcon" class="icon" :class="className"></span>
      <span class="text">{{_text}}</span>
  </span>
</template>

<script>
export default {
  name: 'icon',
  props: {
    type: {
      type: Number,
      default: 1
    },
    size: {
      type: Number,
      default: 12
    },
    reverse: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    showIcon() {
      return this.type > 0
    },
    _text() {
      return this.text
    },
    className() {
      var map = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
      return map[this.type] + '-' + this.size
    }
  }
}
</script>

<style lang="stylus">
@import '../../common/style/mixin'

.text-icon-wrapper
  font-size 0
  .text
    font-size 12px
  .icon
    display inline-block
    margin-right 4px
    width 16px
    height 16px
    background-size 16px 16px
    vertical-align top
    &.decrease-12
      bg-image('image/decrease_1')
    &.discount-12
      bg-image('image/discount_1')
    &.special-12
      bg-image('image/special_1')
    &.guarantee-12
      bg-image('image/guarantee_1')
    &.invoice-12
      bg-image('image/invoice_1')
    &.decrease-16
      bg-image('image/decrease_2')
    &.discount-16
      bg-image('image/discount_2')
    &.special-16
      bg-image('image/special_2')
    &.guarantee-16
      bg-image('image/guarantee_2')
    &.invoice-16
      bg-image('image/invoice_2')
</style>
