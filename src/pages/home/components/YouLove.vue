<template>
  <div class='love'>
    <div class="love-title">
      <span class="iconfont">&#xe755;</span>
      <span>猜你喜欢</span>
    </div>
    <ul class="scenic">
      <router-link tag="li"
                   v-for="v of weekendList"
                   :key="v.id"
                   :to="'/detail/' + v.id">
        <img :src="v.imgUrl"
             alt="">
        <div class="info">
          <div class="scenic-name">
            {{v.title}}
          </div>
          <div class="comment">
            <span class="level">★★★★★</span>
            <span class="much">54654条评论</span>
          </div>
          <div class="price">
            <span class="num">￥789起</span>
            <span class="place">浦东新区</span>
          </div>
          <div class="feature">
            {{v.desc}}
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'YouLove',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
.love
  background-color #fff
  padding 0.2rem
  .love-title
    padding-top 0.1rem
    height 0.8rem
    box-sizing border-box
    font-size 0.36rem
    .iconfont
      color red
  .scenic
    li
      display flex
      height 3rem
      border-bottom 1px solid #eee
      padding-top 0.2rem
      box-sizing border-box
      img
        width 2rem
        height 2rem
      .info
        flex 1
        padding-left 0.3rem
        .scenic-name
          font-size 0.36rem
          padding-top 0.2rem
        .comment
          height 0.4rem
          margin 0.2rem 0.2rem 0.2rem 0
          .level
            float left
            color orange
            margin-right 0.3rem
            line-height 0.3rem
          .much
            float left
            font-size 0.24rem
            line-height 0.4rem
        .price
          padding 0.2rem 0 0.4rem
          .num
            font-size 0.4rem
            color orange
          .place
            float right
            line-height 0.4rem
        .feature
          color #f99
          font-size 0.24rem
</style>
