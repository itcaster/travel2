<template>
  <div class="city">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities"
               :hotCities="hotCities"
               :letter="letter">
    </city-list>
    <city-alphabet :cities="cities"
    @change="LetterChange"></city-alphabet>
  </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    LetterChange (letter) {
      this.letter = letter
    }
  },
  created () {
    this.$axios.get('/api/city.json')
      .then(res => {
        console.log(res)
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.hotCities = data.hotCities
          this.cities = data.cities
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
</script>

<style lang="stylus" scoped>
</style>
