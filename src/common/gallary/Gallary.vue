<template>
  <div class="container" @click="closeGallary">
    <div class="wraper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item,index) in imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallary",
  props: {
    imgs: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        observeParents: true,
        observer: true
      }
    };
  },
  methods: {
    closeGallary() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/ .swiper-container {
  overflow: inherit;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;
  .wraper {
    height: 0;
    width: 100%;
    padding-bottom: 100%;
    .swiper-pagination {
      color: #fff;
      bottom: -1rem;
    }
  }
}
</style>
