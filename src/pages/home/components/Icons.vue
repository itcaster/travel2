<template>
  <div class="icons">
    <mt-swipe :auto="0">
      <mt-swipe-item>
        <ul>
          <li>
            <img src="http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png" alt="">
            <div>超级故宫</div>
          </li>
          <li>
            <img src="http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png" alt="">
            <div>超级故宫</div>
          </li>
          <li>
            <img src="http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png" alt="">
            <div>超级故宫</div>
          </li>
          <li><img src="http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png" alt=""><div>超级故宫</div></li>
          <li><img src="http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png" alt=""><div>超级故宫</div></li>
          <li><img src="http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png" alt=""><div>超级故宫</div></li>
          <li><img src="http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png" alt=""><div>超级故宫</div></li>
          <li><img src="http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png" alt=""><div>超级故宫</div></li>
        </ul>
      </mt-swipe-item>
      <mt-swipe-item>
        <ul>
          <li><img src="http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png" alt=""><div>超级故宫</div></li>
          <li><img src="http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png" alt=""><div>超级故宫</div></li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  .icons >>> .mint-swipe-indicator.is-active
    background-color skyblue
    opacity .6
  .icons >>> .mint-swipe-indicator
    width .1rem
    height .1rem
  .icons
    height 3.8rem
    padding-bottom .2rem
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
          margin-top .14rem
          img
            width 1.1rem
          div
            margin-top .1rem
</style>
