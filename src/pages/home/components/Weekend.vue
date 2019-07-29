<template>
  <div class="weekend">
    <div class="recList">
        <p class="goWhere">周末去哪儿</p>
        <ul>
            <li class="ietm border-bottom" v-for="item in weekList" :key="item.id">
                <div class="item-img-wrapper">
                    <img class="item-img" :src="item.imgUrl" alt />
                </div>
                <div class="item-info">
                    <p class="itme-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Weekend",
  props: {
    weekList: Array
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
    .goWhere{
        height: .8rem;
        line-height: .8rem;
        font-size: .32rem;
        color: #212121;
        padding-left: .4rem;
    }
    .ietm{
        .item-img{
            width: 100%;
        }
        .item-info{
            padding: .2rem .1rem .1rem .1rem;
            .item-title{
                height: .44rem;
                color: #212121;
                font-size: .32rem;
                line-height: .44rem;
                @include ellipsis();
            }
            .item-desc{
                margin-top: .2rem;
                line-height: .5rem;
                color: #ccc;
                @include ellipsis();
            }
        }
        .item-img-wrapper{
            overflow: hidden;
            height: 0;
            padding-bottom: 37.09%;
        }
    }
}
</style>
