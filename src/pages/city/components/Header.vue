<template>
  <div class="header">
    <div class="back iconfont" @click="HandleBack">&#xe67c;</div>
    <div class="header-title">城市选择</div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader',
  methods: {
    HandleBack () {
      this.$router.history.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    position relative
    overflow hidden
    height .86rem
    line-height .86rem
    box-sizing border-box
    background-color #03bbd3
    color #fff
    .back
      position absolute
      top 0
      left 0.2rem
      width 0.4rem
      font-size .32rem
    .header-title
      font-size .4rem
      text-align center
</style>
