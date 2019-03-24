<template>
  <div class="list">
    <div class="item" v-for="(v, i) of categoryList" :key="i">
      <div class="item-title">
        {{v.title}}
      </div>
      <div v-if="v.children" class="item-children">
        <detail-list :categoryList="v.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array
  }
}
</script>

<style lang="stylus" scoped>
  .list
    font-size .34rem
    background-color #fff
    .item-title
      height 0.8rem
      border-bottom 1px solid #ccc
      line-height .7rem
      padding 0 .2rem
    .item-children
        padding 0 .2rem
</style>
