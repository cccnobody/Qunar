<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      <input type="text" placeholder="输入城市/景点/游玩主题">
    </div>
      <div class="header-right">
          <router-link to="./city">
          {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
          </router-link>
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'HomeHeader',
    computed:{
      ...mapState(['city'])
    }
}
</script>

<style lang="scss" scoped>
@import '~styles/varibles.scss';
.header{
    display: flex;
    line-height: $headerHeight;
    background: $bgColor;
    color: #fff;
    .header-left{
        width: .64rem;
        float: left;
    }
    .back-icon{
        text-align: center;
        font-size: .4rem;
    }
    .header-input{
        flex: 1;
        height: .64rem;
        line-height: .64rem;
        margin-top: .12rem;
        margin-left: .2rem;
        padding-left: .2rem;
        background: #fff;
        border-radius: .1rem;
        color: #ccc;
        input{
            width:4rem;
            position: relative;
            top: -.01rem;
        }
    }
    .header-right{
        min-width: 1.04rem;
        padding: 0 .1rem;
        float: right;
        text-align: center;
        color: #FFF;
        .arrow-icon{
            margin-left: -.04rem;
            font-size: .24rem;
            color: #fff;
        }
    }
    input::-webkit-input-placeholder{
        color:#ccc;
    }
    input::-moz-placeholder{   /* Mozilla Firefox 19+ */
        color:#ccc;
    }
    input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
        color:#ccc;
    }
    input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
        color:#ccc;
    }
}
</style>

