<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <icons></icons>
    <weekend-hot></weekend-hot>
    <you-love></you-love>

  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader'
import HomeSwiper from './components/HomeSwiper'
import Icons from './components/Icons'
import WeekendHot from './components/WeekendHot'
import YouLove from './components/YouLove'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    Icons,
    WeekendHot,
    YouLove
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
