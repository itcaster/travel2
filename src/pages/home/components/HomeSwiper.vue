<template>
  <div class="wrapper">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="v of swiperList" :key="v.id"><img :src="v.imgUrl"
             alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .mint-swipe-indicator.is-active
  background-color #fff
  opacity 0.6
.wrapper >>> .mint-swipe-indicator
  width 0.1rem
  height 0.1rem
  background-color #eee
.wrapper
  position relative
  overflow hidden
  width 100%
  height 0
  padding-bottom 31.25%
  .mint-swipe
    position absolute
    width 100%
    img
      width 100%
</style>
