  
<template>
    <div>
        <header-top :go-back="true"></header-top>
        <transition name="router-fade" mode="out-in">
            <div class="">
                <p class="page-container">404 page not found</p>
                <h1>vuex 测试</h1>
                Clicked: {{ getCount }} times {{getNum}}
                <button @click="increment">+</button>
                <button @click="decrement">-</button>
            </div>
        </transition>
    </div>
</template>

<script>
    import headerTop from 'components/headTop'
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        computed: {
            // 使用对象展开运算符将 getters 混入 computed 对象中
            ...mapGetters([
                'getCount',
                'getNum'
                // ...
            ])
        },
        created: function() {
            console.log(mapActions)
        },
        methods: {
            ...mapActions([
                'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
                'decrement'
            ])
            //...mapActions({
            //  add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
            //})
        },
        components: {
            headerTop
        }
    }
</script>

<style lang="scss" scoped>
    .page-container {
        font-size: 20px;
        text-align: center;
        color: rgb(192, 204, 218);
    }
    
    .router-fade-enter-active,
    .router-fade-leave-active {
        transition: all .2s;
    }
    
    .router-fade-enter,
    .router-fade-leave-active {
        opacity: 0;
        transform: translate3d(1rem, 0, 0);
    }
</style>