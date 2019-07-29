<template>
    <div>
        <detail-banner 
        :bannerImg="bannerImg"
        :sightName="sightName"
        :gallaryImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
            <List :list="list"></List>
        </div>
    </div>
</template>

<script>
import detailBanner from './compoments/Banner'
import detailHeader from './compoments/Header'
import List from './compoments/List'
import axios from 'axios'
export default {
    name: 'Detail',
    components:{
        detailBanner,
        detailHeader,
        List
    },
    data(){
        return{
            list:[],
            sightName: '',
            bannerImg: '',
            gallaryImgs: [],
        }
    },
    methods:{
        getDetailInfo () {
            axios.get('/static/mock/detail.json', {
                params: {
                id: this.$route.params.id
                }
            }).then(this.handleGetDataSucc)
        },
        handleGetDataSucc(res){
            res = res.data
            if(res.ret && res.data){
                const data = res.data
                this.sightName = data.sightName
                this.list = data.categoryList
                this.gallaryImgs = data.gallaryImgs
                this.bannerImg = data.bannerImg
            }
        }
    },
    mounted () {
        this.getDetailInfo()
    }
}
</script>

<style lang="scss" scoped>
  .content{
    height: 30rem;
  }
</style>
