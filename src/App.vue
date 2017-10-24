<template>
  <div id="app">
  <v-header></v-header>

  <div class="tab">
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

  <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  name: 'app',
  components: {
    'v-header': Header
  }
}
</script>

<style lang="stylus">
.tab {
  width: 100%;
  display: flex;
  line-height: 40px;
  height: 40px;
  .tab-item {
    flex: 1;
    text-align: center;
  }
}
</style>
