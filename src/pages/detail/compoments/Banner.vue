<template>
    <div>
        <div class="banner" @click="handleGallaryShow">
            <img :src="bannerImg" alt="">
        <div class="banner-info">
            <div class="banner-tittle">
            {{this.sightName}}
            </div>
            <div class="banner-number">
            <span class="iconfont banner-icon">&#xe692;</span>
            {{this.bannerImg.length}}
            </div>
        </div>
        </div>
        <Fade>
        <Gallary 
            :imgs="gallaryImgs" 
            v-show="showGallary"
            @close="closeGallary"
            ></Gallary>
        </Fade>
    </div>
</template>

<script>
import Fade from 'common/fade/Fade'
import Gallary from 'common/gallary/Gallary'
export default {
    name: 'detailBanner',
    components:{
        Gallary,
        Fade
    },
    props:{
        bannerImg: String,
        sightName: String,
        gallaryImgs: Array
    },
    data(){
        return{
            showGallary:false
        }
    },
    methods:{
        handleGallaryShow(){
            this.showGallary = true
        },
        closeGallary(){
            this.showGallary = false
        }
    }
}
</script>

<style lang="scss" scoped>
    .banner{
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;
        position: relative;
        .banner-img{
            width: 100%;
        }
        .banner-info{
            display: flex;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            line-height: .6rem;
            color: #fff;
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
            .banner-tittle{
                flex: 1;
                font-size: .32rem;
                padding: 0 .2rem;
            }
            .banner-number{
                height: .32rem;
                line-height: .32rem;
                margin-top: .14rem;
                padding: 0 .4rem;
                border-radius: .2rem;
                background: rgba(0, 0, 0, .8);
                font-size: .24rem;
                .banner-icon{
                    font-size: .24rem
                }
            }
        }
    }
</style>
