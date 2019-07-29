<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" v-lazy="item.imgUrl" alt />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Icons",
  props: {
    iconList: Array
  },
  data() {
    return {
      swiperOption: {
        autoPlay: false
      }
    };
  },
  computed: {
    pages() {
      const pages = [];
      // 将一维数组拆分为二维数组
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/varibles.scss";
@import "~styles/mixins.scss";
.icons /deep/ .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  overflow: hidden;
  height: 0;
  padding-bottom: 50%;
}
.icon {
  position: relative;
  overflow: hidden;
  float: left;
  width: 25%;
  height: 0;
  padding-bottom: 25%;
  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;
    .icon-img-content {
      display: block;
      margin: 0 auto;
      height: 100%;
    }
  }
}
.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 0.44rem;
  line-height: 0.44rem;
  text-align: center;
  color: $darkTextColor;
  @include ellipsis();
}
</style>
