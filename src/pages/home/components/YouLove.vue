<template>
  <div class="love">
    <div class="love-title">
      <span class="iconfont">&#xe755;</span>
      <span>猜你喜欢</span>
    </div>
    <ul class="scenic">
      <li>
        <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg" alt="">
        <div class="info">
          <div class="scenic-name">
            魔都迪士尼乐园
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
            全球最拥挤的迪士尼乐色场
          </div>
        </div>
      </li>
      <li>
        <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg" alt="">
        <div class="info">
          <div class="scenic-name">
            魔都迪士尼乐园
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
            全球最拥挤的迪士尼乐色场
          </div>
        </div>
      </li>
      <li>
        <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg" alt="">
        <div class="info">
          <div class="scenic-name">
            魔都迪士尼乐园
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
            全球最拥挤的迪士尼乐色场
          </div>
        </div>
      </li>
      <li>
        <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg" alt="">
        <div class="info">
          <div class="scenic-name">
            魔都迪士尼乐园
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
            全球最拥挤的迪士尼乐色场
          </div>
        </div>
      </li>
      <li>
        <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_200x200_2039e660.jpg" alt="">
        <div class="info">
          <div class="scenic-name">
            魔都迪士尼乐园
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
            全球最拥挤的迪士尼乐色场
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'YouLove'
}
</script>

<style lang="stylus" scoped>
  .love
    background-color #fff
    padding .2rem
    .love-title
      padding-top .1rem
      height 1rem
      box-sizing border-box
      font-size .36rem
      .iconfont
        color red
    .scenic
      >li
        display flex
        height 3rem
        border-bottom 1px solid #eee
        img
          width 2rem
          height 2rem
        .info
          flex 1
          padding-left .3rem
          .scenic-name
            font-size .36rem
            padding-top .2rem
          .comment
            height 0.4rem
            margin .2rem .2rem .2rem 0
            .level
              float left
              color orange
              margin-right .3rem
              line-height .3rem
            .much
              float left
              font-size .24rem
              line-height .4rem
          .price
            padding .2rem 0 .4rem
            .num
              font-size .4rem
              color orange
            .place
              float right
              line-height .4rem
          .feature
            padding-top .2rem
            color #f99
            font-size .24rem
</style>
