<template>
  <div>
    <detail-banner :sightName="sightName"
                   :bannerImg="bannerImg"
                   :gallaryImgs="gallaryImgs">
    </detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :categoryList="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  created () {
    this.$axios.get('/api/detail.json')
      .then(res => {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.sightName = data.sightName
          this.bannerImg = data.bannerImg
          this.gallaryImgs = data.gallaryImgs
          this.categoryList = data.categoryList
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
    background-color #fff
</style>
