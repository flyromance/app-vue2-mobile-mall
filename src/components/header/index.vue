<template>
    <div class="header">
      <div class="content-wrapper">
        <div class="avatar">
          <img width="64" height="64" :src="seller.avatar" alt="">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{seller.description}}/{{seller.deliveryTime}}
          </div>
          <div v-if="seller.supports" class="support">
            <div class="icon" :class="classMap[seller.supports[0].type]"></div>
            <div class="text">{{seller.supports[0].description}}</div>
          </div>
        </div>
        <div v-if="seller.supports" class="support-count" @click="showDetail">
          <span class="count">{{seller.supports.length}}个</span>
          <i class="icon-keyboard_arrow_right"></i>
        </div>
      </div>
      <div class="bulletin-wrapper">
        <span class="bulletin-icon"></span><span class="bulletin-title">{{seller.bulletin}}</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
      <div class="background">
        <img :src="seller.avatar" width="100%" height="100%">
      </div>
      <transition name="fade">
        <div class="detail" v-show="detailShow">
          <div class="detail-wrapper clearfix">
            <div class="detail-main">
              <h1 class='name'>{{seller.name}}</h1>
              <div class="star-wrapper">
                <star :size="48" :score="seller.score"></star>
              </div>
              <div class="info-box">
                <div class="box-hd">
                  <div class="line"></div>
                  <div class="title">优惠信息</div>
                  <div class="line"></div>
                </div>
                <div class="box-bd">
                  <ul v-if="seller.supports" class="supports-list">
                    <li v-for="item in seller.supports" :key="item.index">
                      <span class="icon" :class="classMap[item.type]"></span>
                      <span class="text">{{item.description}}</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="info-box seller-info">
                <div class="box-hd">
                  <div class="line"></div>
                  <div class="title">商家公告</div>
                  <div class="line"></div>
                </div>
                <div class="box-bd">
                  <p>{{seller.bulletin}}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="detail-close" v-on:click="closeDetail">
            <i class="icon-close"></i>
          </div>
        </div>
      </transition>
    </div>
</template>

<script>
import Star from '@/components/Star/star'

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      detailShow: false
    }
  },
  components: {
    star: Star
  },
  beforeCreate() {
    // debugger
    console.log(2, 'beforeCreate')
  },
  created() {
    // debugger
    console.log(2, 'created')
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  beforeMount() {
    // debugger
    console.log(2, 'beforeMount')
  },
  mounted () {
    // debugger
    console.log(2, 'mounted')
  },
  methods: {
    closeDetail() {
      this.detailShow = false
    },
    showDetail() {
      this.detailShow = true
    }
  }
}
</script>

<style lang='stylus'>
@import '../../common/style/mixin';

.header
  position relative
  color #fff
  background-color rgba(7, 17, 27, 0.5)
  .background
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index -1
    filter blur(10px)

.detail
  position fixed
  z-index 100
  top 0
  left 0
  height 100%
  width 100%
  overflow auto
  background-color rgba(7, 17, 27, 0.8)
  &.fade-enter-active, &.fade-leave-active
    transition all 0.3s linear
  &.fade-enter-to, &.fade-leave
    opacity 1
    background-color rgba(7, 17, 27, 0.8)
  &.fade-enter, &.fade-leave-to
    opacity 0
    background-color rgba(7, 17, 27, 0)
  .detail-wrapper
    min-height 100%
    padding-top 1px
    .detail-main
      margin-top 64px
      padding-bottom 64px
      .name
        line-height 16px
        font-size 16px
        text-align center
        font-weight 700
        margin-bottom 16px
      .star-wrapper
        text-align center
        margin-bottom 28px
    .info-box
      margin 0 36px 28px
      .box-hd
        display flex
        margin-bottom 24px
        .title
          padding 0 12px
          text-align center
        .line
          flex 1
          position relative
          top -6px
          border-bottom 1px solid rgba(255,255,255,0.2)
      .box-bd
        padding 0 12px
      .supports-list
        li
          margin-bottom 12px
          font-size 0
          line-height 16px
          height 16px
          .text
            font-size 12px
          .icon
            display inline-block
            margin-right 4px
            width 16px
            height 16px
            background-size 16px 16px
            vertical-align top
            &.decrease
              bg-image('image/decrease_2')
            &.discount
              bg-image('image/discount_2')
            &.special
              bg-image('image/special_2')
            &.guarantee
              bg-image('image/guarantee_2')
            &.invoice
              bg-image('image/invoice_2')
    .seller-info
      .box-bd
        line-height 24px
  .detail-close
    font-size 32px
    width 32px
    height 32px
    margin -32px auto 0 auto
    position relative
    color rgba(255, 255, 255, .5)

.bulletin-wrapper
  background-color rgba(7, 17, 27, 0.2)
  height 28px
  line-height 28px
  padding 0 22px 0 12px
  overflow hidden
  text-overflow ellipsis
  white-space nowrap
  position relative
  .bulletin-icon
    display inline-block
    width 22px
    height 12px
    bg-image('image/bulletin')
    background-size 22px 12px
    vertical-align top
    margin-top 8px
  .bulletin-title
    font-size 10px
    margin 0 4px
  i.icon-keyboard_arrow_right
    position absolute
    bottom 8px
    right 12px

.content-wrapper 
  padding: 24px 24px 18px 24px
  font-size 0
  position relative
  .avatar
    display inline-block
    img 
      border-radius 2px
  .content
    margin-left 16px
    vertical-align top
    font-size 12px
    display inline-block
    .title
      margin 2px 0 8px 0
      font-size 0
      .brand
        display inline-block
        width 30px
        height 18px
        bg-image('image/brand')
        background-size 30px 18px
      .name 
        vertical-align top
        font-weight bold
        font-size 16px
        margin-left 6px
        line-height 18px
    .description
      margin-bottom 10px
      line-height 12px
    .support
      font-size 0
      .icon
        display inline-block
        width 12px
        height 12px
        margin-right 4px
        background-size 12px 12px
        &.decrease
          bg-image('image/decrease_1')
        &.discount
          bg-image('image/discount_1')
        &.special
          bg-image('image/special_1')
        &.guarantee
          bg-image('image/guarantee_1')
        &.invoice
          bg-image('image/invoice_1')
      .text
        display inline-block
        vertical-align top
        font-size 12px
  .support-count
    position absolute
    right 12px
    bottom 18px
    padding 7px 8px
    border-radius 15px
    background-color rgba(0, 0, 0, 0.2)
    .count
      font-size 10px
      margin-right 2px
      vertical-align top
    i 
      font-size 10px

</style>
