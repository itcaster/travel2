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
  name: 'WeekendHot',
  data () {
    return {
      recommendList: [
        {
          'id': '0001',
          'imgUrl': 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_140x140_80f63803.jpg',
          'title': '故宫',
          'desc': '东方宫殿建筑代表，世界宫殿建筑典范'
        },
        {
          'id': '0002',
          'imgUrl': 'http://img1.qunarzz.com/sight/p0/1511/d2/d2aec2dfc5aa771290.water.jpg_140x140_abb362a7.jpg',
          'title': '南山滑雪场',
          'desc': '北京专业级滑雪圣地'
        },
        {
          'id': '0003',
          'imgUrl': 'http://img1.qunarzz.com/sight/p0/1501/f4/f467729126949c3a.water.jpg_140x140_ef235b1c.jpg',
          'title': '天安门广场',
          'desc': '我爱北京天安门，天安门上太阳升'
        },
        {
          'id': '0004',
          'imgUrl': 'http://img1.qunarzz.com/sight/p0/1501/40/40b2b6c951b28fdd.water.jpg_140x140_1c863e5c.jpg',
          'title': '水立方',
          'desc': '中国的荣耀，阳光下的晶莹水滴'
        },
        {
          'id': '0005',
          'imgUrl': 'http://img1.qunarzz.com/sight/p0/201308/23/b283071686e64dfec8d65eac.jpg_140x140_8c5a7c49.jpg',
          'title': '温都水城养生馆',
          'desc': '各种亚热带植物掩映其间仿佛置身热带雨林'
        }
      ]
    }
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
      padding 0 0.04rem 0.1rem 0
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
