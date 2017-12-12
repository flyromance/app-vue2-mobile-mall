<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import Header from '@/components/header'
import router from './router'
const ERR_OK = 0
export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  beforeCreate() {
    // debugger
    console.log(1, 'beforeCreate')
  },
  created () {
    // debugger
    console.log(1, 'created')
    var that = this
    this.$http.get('/api/seller').then(function (res) {
      var _res = res.body
      if (_res.errno === ERR_OK) {
        // set函数，把_res.data改造了
        that.seller = _res.data
        // console.log(that.seller)
      }
    })
  },
  beforeMount() {
    // debugger
    console.log(1, 'beforeMount')
  },
  mounted() {
    // debugger
    console.log(1, 'mounted')
  },
  components: {
    'v-header': Header
  },
  router
}
</script>

<style lang="stylus">
@import './common/style/index.styl'

.tab {
  width: 100%;
  display: flex;
  line-height: 40px;
  height: 40px;
  border-1px(rgba(7, 17, 27, 0.1))
  .tab-item {
    flex: 1;
    text-align: center;
    
    a {
      display block
      font-size 14px
      color: rgb(77, 85, 93)
    }
    a.active {
      color: red
    }
  }
}
</style>
