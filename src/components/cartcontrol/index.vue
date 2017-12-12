<template>
  <div class="cartcontrol">
    <div class="cart-decrease icon-remove_circle_outline" @click="decreaseCart" v-show="food.count > 0"></div>
    <div class="cart-count" v-show="food.count">{{food.count}}</div>
    <div class="cart-add icon-add_circle" @click="addCart"></div>
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
    addCart() {
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
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
  .cart-decrease, .cart-add
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

