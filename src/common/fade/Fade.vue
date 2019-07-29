<template>
    <transition>
        <slot></slot>
    </transition>
</template>

<script>

export default {
    name: 'Fade',
    components:{

    },
    data(){
        return{

        }
    },
    methods:{

    },
    mounted () {
    }
}
</script>

<style lang="scss" scoped>
    .v-leave-to{
      opacity: 0;
    }
    .v-enter{
        opacity: 0;
    } 
    .v-leave-active{
      transition: opacity .5s;
    }
    .v-enter-active{
      transition: opacity .5s;
    }
</style>
