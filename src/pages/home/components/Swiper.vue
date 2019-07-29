<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="swiperList.length">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" v-lazy="item.imgUrl" />
      </swiper-slide>
      <!-- <swiper-slide>I'm Slide 1</swiper-slide> -->
      <!-- 控制轮播下面的小点 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    swiperList: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 3500
      }
    };
  },
  computed: {
    // showSwiper () {
    //   return this.list.length
    // }
  }
};
</script>


<style lang="scss" scoped>
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: red;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
  .swiper-img {
    width: 100%;
  }
}
</style>
