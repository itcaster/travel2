<template>
  <div class="wrapper">
    <mt-swipe :auto="0">
      <mt-swipe-item><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/278a88f18f1523eec8c52f650522be68.jpg_750x200_bc365244.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2df3ba0f23801d7ed5607f4767a18482.jpg_750x200_b4d6aa93.jpg" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/2f5f3ea4698c9b7898db7562d89b91ed.jpg_750x200_bd3b4ce9.jpg" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper'
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .mint-swipe-indicator.is-active
    background-color #fff
    opacity .6
  .wrapper >>> .mint-swipe-indicator
    width .1rem
    height .1rem
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
        width  100%
</style>
