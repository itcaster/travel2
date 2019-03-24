<template>
  <div class="searchList">
    <div class="search">
      <input v-model="spell"
             type="text"
             id="search"
             autocomplete = "off"
             placeholder="输入城市名或拼音">
    </div>
    <div class="result"
         ref="wrapper"
         v-show="spell">
      <div>
        <div class="cities"
             v-show="hasNoData">
          没有找到匹配数据
        </div>
        <div class="cities"
             v-for="v of list"
             :key="v.id"
             @click="HandleClick(v.name)">
          {{v.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Bscroll from 'better-scroll'
export default {
  name: 'CitySearch',
  data () {
    return {
      spell: '',
      list: [],
      timer: null
    }
  },
  props: {
    cities: Object
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  methods: {
    HandleClick (city) {
      this.spell = ''
      this.$router.push({
        path: '/'
      })
      // this.$store.commit('changeCity', city) 同步修改，不需要actions
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    spell () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.spell) {
        this.list = []
        return
      }
      this.searching = true
      this.timer = setTimeout(() => {
        const spellCities = []
        for (let i in this.cities) {
          this.cities[i].forEach(v => {
            if (v.spell.indexOf(this.spell) > -1 ||
            v.name.indexOf(this.spell) > -1) {
              spellCities.push(v)
            }
          })
        }
        this.list = spellCities
      }, 10)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
.search
  height 0.7rem
  background-color #03bbd3
  padding 0 0.1rem
  box-sizing border-box
  #search
    width 100%
    height 0.6rem
    text-align center
    border-radius 0.06rem
    padding 0 0.1rem
    box-sizing border-box
.result
  overflow hidden
  position absolute
  z-index 10
  top 1.58rem
  left 0
  right 0
  bottom 0
  background-color #eee
.cities
  height 0.76rem
  background-color #fff
  border 1px solid #eeeeee
  line-height 0.8rem
  text-indent 0.2rem
</style>
