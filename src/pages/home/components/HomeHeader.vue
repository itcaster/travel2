<template>
  <div class="header">
    <div class="header-left iconfont">&#xe67c;</div>
    <div class="header-input">
      <span class="iconfont">&#xe60b;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right iconfont"><span>北京</span>&#xe61c;</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    display flex
    height .88rem
    background-color #03BBD3
    line-height .88rem
    text-align center
    color #fff
    .header-left
      width 0.8rem
      font-size .44rem
    .header-input
      flex 1
      background-color #fff
      margin .16rem 0
      line-height .56rem
      color #ccc
      text-align left
      text-indent .2rem
      border-radius .05rem
    .header-right
      width 1.4rem
</style>
