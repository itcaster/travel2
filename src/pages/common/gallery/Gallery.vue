<template>
  <div class="container"  @click="handleBack">
    <div id="item">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(v, i) of gallaryImgs"
                      :key="i">
          <img :src="v">
        </swiper-slide>
        <div class="swiper-pagination"
             slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    gallaryImgs: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleBack () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow inherit
.container
  z-index 12
  position fixed
  top 0
  bottom 0
  left 0
  right 0
  background-color lime
  #item
    position absolute
    width 100%
    top 50%
    transform translateY(-50%)
    img
      width 100%
    .swiper-pagination
      position absolute
      bottom -1rem
      color #fff
      font-size .34rem
</style>
