<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul class="menu-list">
        <li class="menu-item" v-for="(item, index) in goods"
          :class="{current:currentIndex===index}" :key="index" @click="selectMenu(index)">
          <div class="menu-item-wrapper border-1px">
            <icon :text="item.name" :size="12" :type="item.type"></icon>
          </div>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foodsWrapper">
      <ul>
        <li class="food-list j_food-list" v-for="item in goods" :key="item.$index">
          <div class="title">{{item.name}}</div>
          <ul>
            <li class="food-item border-1px" v-for="food in item.foods" :key="food.$index">
              <div class="item-img">
                <img width="57px" :src="food.icon">
              </div>
              <div class="item-content">
                <div class="name">{{food.name}}</div>
                <div class="desc">{{food.description}}</div>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">¥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                  <cartcontrol :food="food"></cartcontrol>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"
      :select-foods="selectFoods"></shopcart>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import icon from '@/components/Icon/icon'
import shopcart from '@/components/Shopcart'
import cartcontrol from '@/components/cartcontrol'

const ERR_OK = 0
export default {
  name: 'goods',
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: [],
      listHeight: [],
      scrollY: 0
    }
  },
  created() {
    this.$http.get('/api/goods')
      .then((res) => {
        res = res.body
        if (res.errno === ERR_OK) {
          this.goods = res.data
          this.$nextTick(() => {
            this._initScroll()
            this.calculate()
          })
        }
      })
  },
  mounted() {
  },
  components: {
    icon,
    shopcart,
    cartcontrol
  },
  computed: {
    currentIndex() {
      for (let i = 0; i < this.listHeight.length - 1; i++) {
        if (this.scrollY >= this.listHeight[i] && this.scrollY <= this.listHeight[i + 1]) {
          return i
        }
      }
      return 0
    },
    selectFoods() {
      let foods = []
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food)
          }
        })
      })
      return foods
    }
  },
  methods: {
    _initScroll() {
      if (!this.menuScroll) {
        this.menuScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        })
        this.foodsScroll = new BScroll(this.$refs.foodsWrapper, {
          probeType: 3,
          click: true
        })
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y))
        })
      } else {
        this.menuScroll.reflesh()
        this.foodsScroll.reflesh()
      }
    },
    calculate() {
      let foodList = this.$refs.foodsWrapper.querySelectorAll('.j_food-list')
      let height = 0
      this.listHeight.push(height)
      for (let i = 0; i < foodList.length; i++) {
        let item = foodList[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    },
    selectMenu(index, e) {
      console.log(index)
      let foodList = this.$refs.foodsWrapper.querySelectorAll('.j_food-list')
      let el = foodList[index]
      this.foodsScroll.scrollToElement(el, 300)
    }
  }
}
</script>

<style lang='stylus'>
@import '../../common/style/mixin'

.goods
  display flex
  position absolute
  bottom 46px
  top 174px
  width 100%
  overflow hidden
  .menu-wrapper
    flex: 0 0 80px
    width 80px
    background #f3f5f7
    .menu-item
      display table
      width 56px
      height 54px
      line-height 14px
      padding 0 12px
      .menu-item-wrapper
        display table-cell
        vertical-align middle
        border-1px(rgba(7, 17, 27, 0.1))
      &.current
        position relative
        margin-top -1px
        background-color #fff
        font-weight 700
        .menu-item-wrapper
          border-none()
  .foods-wrapper
    flex 1
    .title
      padding-left 14px
      color rgb(147, 153, 159)
      height 26px 
      line-height 26px
      border-left 2px solid #d9dde1
      background-color #f3f5f7
    .food-item
      display flex
      margin 18px
      padding-bottom 18px
      border-1px(rgba(7, 17, 27, 0.1))
      &:last-child
        margin-bottom 0
        border-none()
      .item-img
        flex 0 0 57px
        margin-right 10px
      .item-content
        flex 1
        position relative
        .name
          font-size 14px
          line-height 14px
          height 14px
          margin 2px 0 8px 0
          color rgb(7, 17, 27)
        .desc, .extra
          line-height 12px
          font-size 10px
          color rgb(147, 153, 159)
          margin-bottom 8px
        .extra
          display flex
          .count
            display inline-block
            margin-right 12px
        .price
          .now, .old
            font-weight 700
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            color rgb(147, 153, 159)
            text-decoration line-through
        .cartcontrol-wrapper
          position absolute
          right 0
          bottom -10px
</style>

