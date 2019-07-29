<template>
  <div>
    <router-link to="/" 
     tag="div" 
     class="header-abs"
     v-show="showAbs"
     >
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {
  name: "detailHeader",
  props: {},
  data() {
    return {
        showAbs: true,
        opacityStyle:{
            opacity: 0
        }
    }
  },
  methods: {
      handleScroll(){
          const top = document.documentElement.scrollTop
          if(top > 60){
              let opacity = top / 140
              opacity = opacity > 1 ? 1 : opacity
              this.opacityStyle.opacity = opacity
              this.showAbs = false
          }else{
              this.showAbs = true
          }
      }
  },
  activated(){
      window.addEventListener('scroll',this.handleScroll)
  },
  deactivated(){
      window.removeEventListener('scroll', this.handleScroll)
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
@import "~styles/varibles.scss";
.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
  text-align: center;
  background: rgba(0, 0, 0, 0.8);
  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}
  .header-fixed{
    z-index: 2;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    background: $bgColor;
    font-size: .32rem;
    .header-fixed-back{
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }
  }
</style>
