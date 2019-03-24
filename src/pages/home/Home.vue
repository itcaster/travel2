<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <icons :iconList="iconList"></icons>
    <week-hot :recommendList="recommendList"></week-hot>
    <you-love :weekendList="weekendList"></you-love>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import Icons from './components/Icons'
import WeekHot from './components/WeekHot'
import YouLove from './components/YouLove'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    WeekHot,
    YouLove
  },
  data () {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  created () {
    this.getHomeInfo()
  },
  methods: {
    getHomeInfo () {
      this.$axios.get('/api/index.json?city=' + this.city)
        .then(res => {
          console.log(res)
          res = res.data
          if (res.ret && res.data) {
            const data = res.data
            this.swiperList = data.swiperList
            this.iconList = data.iconList
            this.recommendList = data.recommendList
            this.weekendList = data.weekendList
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.lastCity = this.city
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style>
</style>
