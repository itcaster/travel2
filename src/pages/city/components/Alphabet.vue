<template>
  <div class="alphabet">
    <div class="letter"
         v-for="(v, key) of cities"
         :key="key"
         @touchstart="HandleStart"
         @touchmove="HandleMove"
         @touchend="HandleEnd"
         @click="HandleClick"
         :ref="key">
      {{key}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  data () {
    return {
      touchTrue: false,
      timer: null,
      topValue: 0
    }
  },
  props: {
    cities: Object
  },
  // updated () {
  //   console.log(this.$refs.A)
  // },
  computed: {
    list () {
      const list = []
      for (let k in this.cities) {
        list.push(k)
      }
      return list
    }
  },
  methods: {
    HandleClick (e) {
      this.$emit('change', e.target.innerText)
    },
    HandleStart () {
      this.touchTrue = true
    },
    HandleMove (e) {
      if (this.touchTrue) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.topValue = e.targetTouches[0].clientY - 150
          const index = Math.floor(this.topValue / 20)
          if (!(index >= 0 && index < this.list.length)) return
          this.$emit('change', this.list[index])
        }, 16)
      }
    },
    HandleEnd () {
      this.touchTrue = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.alphabet
  position absolute
  right 0
  top 3rem
  .letter
    width 0.4rem
    height 0.4rem
    line-height 0.4rem
    font-size 0.3rem
    color skyblue
    text-align center
</style>
