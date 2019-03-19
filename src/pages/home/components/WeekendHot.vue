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
      <li class="hot-each">
        <img src="http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_250x250_8c54e203.jpg" alt="">
        <div class="name">上海野生动物园</div>
        <p class="price">￥121.5起</p>
      </li>
      <li class="hot-each">
        <img src="http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_250x250_8c54e203.jpg" alt="">
        <div class="name">上海野生动物园</div>
        <p class="price">￥121.5起</p>
      </li>
      <li class="hot-each">
        <img src="http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_250x250_8c54e203.jpg" alt="">
        <div class="name">上海野生动物园</div>
        <p class="price">￥121.5起</p>
      </li>
      <li class="hot-each">
        <img src="http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_250x250_8c54e203.jpg" alt="">
        <div class="name">上海野生动物园</div>
        <p class="price">￥121.5起</p>
      </li>
      <li class="hot-each">
        <img src="http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_250x250_8c54e203.jpg" alt="">
        <div class="name">上海野生动物园</div>
        <p class="price">￥121.5起</p>
      </li>
      <li class="hot-each">
        <img src="http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_250x250_8c54e203.jpg" alt="">
        <div class="name">上海野生动物园</div>
        <p class="price">￥121.5起</p>
      </li>
      <li class="hot-each">
        <img src="http://img1.qunarzz.com/sight/p0/1603/17/170481fb9caf500790.water.jpg_250x250_8c54e203.jpg" alt="">
        <div class="name">上海野生动物园</div>
        <p class="price">￥121.5起</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'WeekendHot'
}
</script>

<style lang="stylus" scoped>
  .container
    height 3.8rem
    background-color #fff
    margin-bottom .2rem
    .hot-title
      padding .2rem .2rem
      height 1rem
      box-sizing border-box
      line-height .6rem
      font-size .34rem
      .title-left
        float left
        .iconfont
          color red
      .title-right
        float right
        font-size .24rem
        color #aaa
    .hot-content
      overflow auto
      white-space nowrap
      padding 0 0.2rem .14rem
      >.hot-each
        display inline-block
        padding 0 .04rem .1rem 0
        text-align center
        img
          width 2rem
          height 2rem
        .name
          margin-top .08rem
          font-size .24rem
        .price
          color orange
          margin-top .04rem
</style>
