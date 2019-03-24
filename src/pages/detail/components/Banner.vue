<template>
  <div>
    <div class="banner" @click="handleShow">
      <div class="bottom">
        <div class="title">
          大连圣亚海洋世界(AAAA景区)
        </div>
        <div class="pic">
          <span class="iconfont">
            &#xe650;
          </span>
          <span class="num">
            2
          </span>
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery v-show="isShow"
                    @close="handleClose"
                    :gallaryImgs="gallaryImgs"
                    ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/Fade'
export default {
  name: 'DetailBanner',
  data () {
    return {
      isShow: false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallery,
    FadeAnimation
  },
  methods: {
    handleShow () {
      this.isShow = true
    },
    handleClose () {
      this.isShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.banner
  position relative
  height 0
  width 100%
  padding-bottom 55%
  background url('http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg') // img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg)
  background-size 100%
  .bottom
    position absolute
    bottom 0
    width 100%
    height 0.44rem
    color #fff
    background linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))
    .title
      float left
      font-size 0.32rem
      text-indent 0.2rem
    .pic
      float right
      display block
      height 0.3rem
      margin-top 0.06rem
      margin-right 0.06rem
      background-color #000
      border-radius 0.2rem
      padding 0 0.4rem
      line-height 0.3rem
      font-size 0.25rem
      .iconfont
        font-size 0.25rem
</style>
