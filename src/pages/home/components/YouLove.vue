<template>
  <div class='love'>
    <div class="love-title">
      <span class="iconfont">&#xe755;</span>
      <span>猜你喜欢</span>
    </div>
    <ul class="scenic">
      <li v-for="v of weekendList" :key="v.id">
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
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'YouLove',
  data () {
    return {
      weekendList: [
        {
          'id': '0001',
          'imgUrl': 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
          'title': '北京温泉排行榜',
          'desc': '细数北京温泉，温暖你的冬天'
        },
        {
          'id': '0002',
          'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg',
          'title': '北京必游TOP10',
          'desc': '来北京必去的景点非这些地方莫属'
        },
        {
          'id': '0003',
          'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
          'title': '寻找北京的皇城范儿',
          'desc': '数百年的宫廷庙宇，至今依旧威严霸气'
        },
        {
          'id': '0004',
          'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
          'title': '学生最爱的博物馆',
          'desc': '周末干嘛？北京很多博物馆已经免费开放啦'
        },
        {
          'id': '0005',
          'imgUrl': 'http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg',
          'title': '儿童剧场，孩子的乐园',
          'desc': '带宝贝观看演出，近距离体验艺术的无穷魅力'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
.love
  background-color #fff
  padding 0.2rem
  .love-title
    padding-top 0.1rem
    height 1rem
    box-sizing border-box
    font-size 0.36rem
    .iconfont
      color red
  .scenic
    >li
      display flex
      height 3rem
      border-bottom 1px solid #eee
      padding-top .2rem
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
