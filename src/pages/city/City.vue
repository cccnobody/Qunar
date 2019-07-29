<template>
    <div>
        <cityHeader></cityHeader>
        <Search :cities="cities"></Search>
        <List :hot="hotCities" :cities="cities" :letter="letter"></List>
        <Alphabet :cities="cities" @change="handleLetterChange"></Alphabet>
    </div>
</template>

<script>
import Search from './components/Search'
import cityHeader from './components/Header'
import List from './components/List'
import Alphabet from './components/Alphabet'
import axios from 'axios'

export default {
    name: 'City',
    components:{
        Search,
        cityHeader,
        List,
        Alphabet
    },
    data(){
        return{
            hotCities: [],
            cities: {},
            letter: ''
        }
    },
    methods:{
        getCitys(){
            axios.get('./static/mock/city.json').then(res=>{
                if(res.data.ret == true){
                    this.hotCities = res.data.data.hotCities
                    this.cities = res.data.data.cities
                }
            }
          )
        },
        handleLetterChange(letter){
            this.letter = letter
        }
    },
    mounted(){
        this.getCitys()
    }
}
</script>

<style lang="scss" scoped>

</style>
