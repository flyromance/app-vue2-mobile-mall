<template>
    <div>
      <!-- <div class="content-wrapper">
        <div class="avatar">
          <img width="64" height="64" :src="seller.avatar" alt="">
        </div>
        <div class="content">
          <div class="title">
            <span class="brand"></span>
            <span class="name">{{seller.name}}</span>
          </div>
          <div class="description">
            {{sell.description}} / {{seller.deliveryTime}}
          </div>
        </div>
      </div> -->
      <div class="bulletin-wrapper">
        {{seller.avatar}}
      </div>
    </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  mounted () {
    console.log(this.seller)
  }
}
</script>

<style lang='stylus'>
</style>
