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
  props: {
    iconList: Array
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
