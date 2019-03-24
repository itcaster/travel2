<template>
  <div class="content"
       ref="wrapper">
    <div>
      <div class="nowCity">
        <div class="title">当前城市</div>
        <div class="list">
          <div class="button-wrapper">
            <button>{{this.currentCity}}</button>
          </div>
        </div>
      </div>
      <div class="hotCity">
        <div class="title">热门城市</div>
        <div class="hot-list">
          <div class="button-wrapper"
               v-for="(v, i) of hotCities"
               :key="i"
               @click="HandleClick(v.name)">
            <button>{{v.name}}</button>
          </div>
        </div>
      </div>
      <ul>
        <li class="cityList"
            v-for="(v, key) of cities"
            :key="key"
            :ref="key">
          <div class="title">{{key}}</div>
          <ul>
            <li class="cities"
                v-for="ele of v"
                :key="ele.id"
                @click="HandleClick(ele.name)">
              {{ele.name}}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        const ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele)
      }
    }
  },
  methods: {
    HandleClick (city) {
      // this.$router.push('/')
      this.$router.push({ path: '/' })
      // this.$store.commit('changeCity', city) mutations同步修改，不需要actions
      // this.$store.dispatch('changeCity', city) actions异步修改
      this.changeCity(city) // 借助辅助函数映射后的方法
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.content
  overflow hidden
  position absolute
  top 1.56rem
  left 0
  right 0
  bottom 0
  .list
    height 0.9rem
    background-color #fff
    padding 0.1rem
    padding-right 0.6rem
    box-sizing border-box
  .hot-list
    overflow hidden
    background-color #fff
    padding 0.2rem
    padding-right 0.6rem
    box-sizing border-box
  .title
    height 0.5rem
    background-color #eee
    line-height 0.5rem
    color #666
    font-size 0.26rem
    text-indent 0.2rem
  .button-wrapper
    float left
    width 33.33%
    padding 0 0.1rem
    margin 0.1rem 0
    box-sizing border-box
    button
      width 100%
      height 0.5rem
      background #fff
      border 1px solid #ccc
      border-radius 0.06rem
  .cities
    height 0.76rem
    background-color #fff
    border 1px solid #eeeeee
    line-height 0.8rem
    text-indent 0.2rem
</style>
