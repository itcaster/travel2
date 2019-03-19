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
  data () {
    return {
      swiperList: [
        {
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
        },
        {
          id: '0002',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
        },
        {
          id: '0003',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg'
        },
        {
          id: '0004',
          imgUrl: 'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg'
        }
      ]
    }
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
  padding-bottom 28%
  .mint-swipe
    position absolute
    width 100%
    img
      width 100%
</style>
