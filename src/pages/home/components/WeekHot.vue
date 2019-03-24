<template>
  <div class="container">
    <div class="hot-title">
      <div class="title-left">
        <span class="iconfont">&#xe606;</span>
        <span>本周热门榜单</span>
      </div>
      <div class="title-right">
        <span>全部榜单</span>
        <span class="iconfont">&#xe62b;</span>
      </div>
    </div>
    <ul class="hot-content">
      <li class="hot-each" v-for="v of recommendList" :key="v.id">
        <img :src="v.imgUrl"
             alt="">
        <div class="name">{{v.title}}</div>
        <p class="price">￥121.5起</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WeekHot',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
.container
  height 3.8rem
  background-color #fff
  margin-bottom 0.2rem
  .hot-title
    padding 0.2rem 0.2rem
    height 1rem
    box-sizing border-box
    line-height 0.6rem
    font-size 0.34rem
    .title-left
      float left
      .iconfont
        color red
    .title-right
      float right
      font-size 0.24rem
      color #aaa
  .hot-content
    overflow auto
    white-space nowrap
    padding 0 0.2rem 0.14rem
    >.hot-each
      display inline-block
      padding 0 0.1rem 0.1rem 0
      text-align center
      img
        width 2rem
        height 2rem
      .name
        margin-top 0.08rem
        font-size 0.24rem
      .price
        color orange
        margin-top 0.04rem
</style>
