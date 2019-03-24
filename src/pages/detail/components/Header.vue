<template>
  <div>
    <div class="backCircle iconfont"
         v-show="isShow"
         @click="HandleBack">
      &#xe67c;
    </div>
    <div class="header"
         v-show="!isShow"
         :style="opacityStyle"
         @click="HandleBack">
      <div class="iconfont">&#xe67c;</div>
      <div class="title">景点详情</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isShow: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    HandleBack () {
      this.$router.push('/')
    },
    handleScroll () {
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop > 60) {
        let opacity = scrollTop / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.isShow = false
        console.log(scroll)
      } else {
        this.isShow = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 绑定全局事件时，需要解绑
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
.backCircle
  position absolute
  top 0.1rem
  left 0.2rem
  width 0.8rem
  height 0.8rem
  background-color #000
  border-radius 50%
  color #ccc
  font-size 0.5rem
  line-height 0.8rem
  text-align center
  opacity 0.8
.header
  position fixed
  top 0
  width 100%
  height 0.88rem
  background-color #00bcd4
  color #fff
  .iconfont
    position absolute
    left 0.2rem
    top 50%
    font-size 0.38rem
    transform translateY(-50%)
  .title
    font-size 0.34rem
    line-height 0.88rem
    text-align center
</style>
