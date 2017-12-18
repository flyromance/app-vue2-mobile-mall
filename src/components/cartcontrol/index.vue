<template>
  <div class="cartcontrol">
    <transition name="fade">
      <div class="cart-decrease" @click="decreaseCart" v-show="food.count > 0">
        <i class="icon-remove_circle_outline inner"></i>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
    <div class="cart-add" @click="addCart()">
      <i class="icon-add_circle"></i>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'cartcontrol',
  props: {
    food: {
      type: Object
    }
  },
  methods: {
    addCart(event) {
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
      // this.$dispatch('cart.add', event)
    },
    decreaseCart() {
      this.food.count > 0 && this.food.count--
    }
  }
}
</script>

<style lang="stylus">
.cartcontrol
  font-size 0
  .cart-decrease
    display inline-block
    padding 6px
    font-size 24px
    line-height 24px
    color rgb(0, 160, 220)
    &.fade-enter-active, &.fade-leave-active
      transition all 0.4s ease
      .inner
        transition all 0.4s ease
    &.fade-enter, &.fade-leave-to
      opacity 0
      transform translate3d(24px, 0, 0)
      .inner
        transform rotate(180deg)
    &.fade-enter-to, &.fade-leave
      opacity 1
      transform translate3d(0, 0, 0)
      .inner
        transform rotate(0deg)
  .cart-add
    display inline-block
    padding 6px
    font-size 24px
    line-height 24px
    color rgb(0, 160, 220)
  .cart-count
    display inline-block
    font-size 12px
    line-height 36px
    vertical-align top
    width 12px
    text-align center
    color rgb(147, 153, 159)
</style>

