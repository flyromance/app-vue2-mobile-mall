<template>
  <div class="shopcart">
    <div class="content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo" :class="{highlight:totalCount>0}">
            <span class="icon-shopping_cart"></span>
          </div>
          <div class="num" v-show="totalCount > 0">{{totalCount}}</div>
        </div>
        <div class="price" :class="{highlight:totalPrice>0}">¥{{totalPrice}}</div>
        <div class="desc">另需配送费¥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay" :class="totalPrice >= minPrice ? 'highlight' : ''">{{payDesc}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopcart',
  props: {
    deliveryPrice: {
      type: Number,
      default: 10
    },
    minPrice: {
      type: Number,
      default: 20
    },
    selectFoods: {
      type: Array,
      default() {
        return [{
          price: 10,
          count: 2
        }]
      }
    }
  },
  computed: {
    totalPrice() {
      let total = 0
      this.selectFoods.forEach((food) => {
        total += food.price * food.count
      })
      return total
    },
    totalCount() {
      let count = 0
      this.selectFoods.forEach((food) => {
        count += food.count
      })
      return count
    },
    payDesc() {
      let desc = ''
      if (this.totalPrice === 0) {
        desc = `¥${this.minPrice}起送`
      } else if (this.totalPrice < this.minPrice) {
        desc = `还差¥${this.minPrice - this.totalPrice}起送`
      } else {
        desc = '去结算'
      }
      return desc
    }
  }
}
</script>

<style lang="stylus">
.shopcart
  position fixed
  bottom 0
  left 0
  width 100%
  z-index 50
  background-color #141d27
  color rgba(255, 255, 255, 0.4)
  .content
    display flex
    height 46px
    .content-left
      flex 1
      font-size 0
      .logo-wrapper
        display inline-block
        position relative
        bottom 10px
        width 56px
        height 56px
        margin 0 12px
        padding 6px
        box-sizing border-box
        background-color #141d27
        border-radius 50%
        .logo
          width 100%
          height 100%
          border-radius 50%
          background-color rgba(255, 255, 255, 0.2)
          text-align center
          .icon-shopping_cart
            font-size 24px
            line-height 44px
          &.highlight
            background-color rgb(0, 160, 220)
            color #fff
        .num
          position absolute
          top 0
          right 0
          width 24px
          height 16px
          line-height 16px
          border-radius 16px
          text-align center
          font-weight 700
          font-size 12px
          color #fff
          background-color rgb(240, 20, 20)
          box-shadow 0 4px 8px 0 rgba(0, 0, 0, 0.4)
      .price, .desc
        display inline-block
        line-height 24px
        font-size 14px
        vertical-align top
        margin-top 12px
      .price
        font-size 16px
        padding-right 12px
        border-right 1px solid rgba(255, 255, 255, 0.1)
        &.highlight
          color #fff
      .desc
        margin-left 12px
    .content-right
      flex 0 0 105px
      width 105px
      .pay
        font-size 16px
        text-align center
        line-height 46px
        font-weight 700
        background-color rgba(255, 255, 255, 0.2)     
        &.highlight
          background-color #00b43c
          color #fff
</style>
