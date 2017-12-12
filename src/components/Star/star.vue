<template>
  <div class="star" :class="starType">
    <span v-for="itemClass in itemClasses" :class="itemClass" class="star-item" :key="itemClass.$index"></span>
  </div>
</template>

<script>
const LENS = 5
export default {
  props: {
    size: {
      type: Number
    },
    score: {
      type: Number
    }
  },
  computed: {
    starType() {
      return `star-${this.size}`
    },
    itemClasses() {
      if (!this.score) {
        return []
      }
      let num = Math.floor(this.score)
      let ret = new Array(num).fill('star-on')
      if (this.score >= num + 0.5) {
        ret.push('star-half')
      } else {
        ret.push('star-off')
      }
      if (ret.length < LENS) {
        ret = ret.concat(new Array(LENS - ret.length).fill('star-off'))
      }
      return ret
    }
  }
}
</script>

<style lang="stylus">
@import '../../common/style/mixin'

.star
  font-size 0
  .star-item
    display inline-block
  &.star-48
    .star-item
      width 20px
      height 20px
      background-size 20px 20px
      margin-right 22px
      &:last-child
        margin 0
    .star-on
      bg-image('image/star48_on')
    .star-half
      bg-image('image/star48_half')
    .star-off
      bg-image('image/star48_off')
  &.star-36
    .star-item
      width 15px
      height 15px
      background-size 15px 15px
      margin-right 16px
    .star-on
      bg-image('image/star36_on')
    .star-half
      bg-image('image/star36_half')
    .star-off
      bg-image('image/star36_off')
  &.star-24
    .star-item
      width 10px
      height 10px
      background-size 10px 10px
      margin-right 5px
    .star-on
      bg-image('image/star24_on')
    .star-half
      bg-image('image/star24_half')
    .star-off
      bg-image('image/star24_off')
    
</style>

