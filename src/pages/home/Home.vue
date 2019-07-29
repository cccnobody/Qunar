<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <Icnos :iconList="iconList"></Icnos>
    <home-recommend :recList="recommendList"></home-recommend>
    <Weekend :weekList="weekendList"></Weekend>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import HomeHeader from "./components/HomeHeader"
import HomeSwiper from "./components/Swiper"
import Icnos from "./components/Icons"
import HomeRecommend from "./components/HomeRecommend"
import Weekend from "./components/Weekend"
import axios from "axios"

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    Icnos,
    HomeRecommend,
    Weekend
  },
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated(){
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo() {
      axios.get("/static/mock/index.json?city=" + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      // console.log(res)
      if (res.data.ret == true) {
        // this.city = res.data.data.city
        this.swiperList = res.data.data.swiperList
        this.iconList = res.data.data.iconList
        this.recommendList = res.data.data.recommendList
        this.weekendList = res.data.data.weekendList
      }
    }
  }
};
</script>


<style lang="stylus"></style>
