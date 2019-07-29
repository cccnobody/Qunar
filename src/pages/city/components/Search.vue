<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" v-model="keywords" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keywords">
      <ul>
        <li
          v-for="item in list"
          :key="item.id"
          class="search-item border-bottom"
          @click="handleClick(item.name)"
        >{{item.name}}</li>
        <li v-show="hasNoData">没有查找到相关数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll"
import {mapMutations} from 'vuex'
export default {
  name: "citySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keywords: "",
      list: [],
      timer: null
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    }
  },
  methods: {
      handleClick(city){
          // this.$store.commit('changeCity',city)   //等于下面的语句
          this.changeCity(city)
          this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
  },
  watch: {
    keywords() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keywords) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keywords) > -1 ||
              value.name.indexOf(this.keywords) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/varibles.scss";
.search {
  height: 0.72rem;
  padding: 0 0.1rem;
  background: $bgColor;
  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 0.62rem;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
  }
}
.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  background: #eee;
}
.search-item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  background: #fff;
  color: #666;
}
</style>

