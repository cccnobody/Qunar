<template>
  <div class="homeRec">
    <div class="decollate"></div>
    <div class="recList">
        <p class="like">猜你喜欢</p>
        <ul>
            <router-link :to="'/detail/' + item.id" 
              tag="li" class="ietm border-bottom" 
              v-for="item in recList" 
              :key="item.id">
                <img class="item-img" v-lazy="item.imgUrl" alt />
                <div class="item-info">
                    <p class="itme-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </router-link>
        </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: "HomeRecommend",
  props:{
    recList: Array
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~styles/mixins.scss";
@import "~styles/varibles.scss";
.recList{
    .like{
        height: .8rem;
        line-height: .8rem;
        font-size: .32rem;
        color: #212121;
        padding-left: .4rem;
    }
    .ietm{
        overflow: hidden;
        display: flex;
        height: 1.9rem;
        .item-img{
        width: 1.7rem;
        height: 1.7rem;
        padding: .1rem;
        }
        .item-info{
            flex: 1;
            padding: .3rem .1rem .1rem .1rem;
            min-width: 0;
            .item-title{
                height: .6rem;
                color: #212121;
                font-size: .32rem;
                line-height: .6rem;
                @include ellipsis();
            }
            .item-desc{
                margin-top: .2rem;
                line-height: .5rem;
                color: #ccc;
                @include ellipsis();
            }
        }
    }
}
</style>
