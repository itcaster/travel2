<template>
  <div class="icons">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(ele, i) of pages" :key="i">
        <ul>
          <li v-for="v of ele"
              :key="v.id">
            <img :src="v.imgUrl"
                 alt="">
            <div>{{v.desc}}</div>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      iconList: [
        {
          'id': '0001',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png',
          'desc': '景点门票'
        },
        {
          'id': '0002',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png',
          'desc': '滑雪季'
        },
        {
          'id': '0003',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png',
          'desc': '泡温泉'
        },
        {
          'id': '0004',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png',
          'desc': '动植园'
        },
        {
          'id': '0005',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png',
          'desc': '游乐园'
        },
        {
          'id': '0006',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png',
          'desc': '必游榜单'
        },
        {
          'id': '0007',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png',
          'desc': '演出'
        },
        {
          'id': '0008',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png',
          'desc': '城市观光'
        },
        {
          'id': '0009',
          'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png',
          'desc': '一日游'
        }
      ]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((v, i) => {
        const page = Math.floor(i / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(v)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
.icons >>> .mint-swipe-indicator.is-active
  background-color skyblue
  opacity 0.6
.icons >>> .mint-swipe-indicator
  width 0.1rem
  height 0.1rem
.icons
  height 3.8rem
  padding-bottom 0.2rem
  background-color #eee
  .mint-swipe
    background-color #fff
    ul
      overflow hidden
      li
        float left
        width 25%
        height 50%
        text-align center
        margin-top 0.14rem
        img
          width 1.1rem
        div
          margin-top 0.1rem
</style>
