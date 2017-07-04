  
<template>
    <div class="index" style="z-index:200">
        <header-top :go-back="true" :head-title="''"></header-top>
    
        <div class="content" style="background:#fff">
            <div class="ment-main">
                <div>
                    <p class="page-container">404 page not found</p>
                    <h1>vuex 测试</h1>
                    Clicked: {{ getCount }} times
                    <button @click="add">+</button>
                    <button @click="dec">-</button>
                </div>
    
                <div class="nav">
                    <mt-button size="small" @click="test('puka')">tab 1</mt-button>
                    <!--<mt-button size="small" @c""lick="active = 'tab-container1'">tab 1</mt-button>-->
                    <mt-button size="small" class="jinka" @click="test('jinka')">tab 2</mt-button>
                    <mt-button size="small" @click="test('heika')">tab 3</mt-button>
                </div>
                <div class="page-tab-container">
                    <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable value="puka">
                        <mt-tab-container-item id="puka">
                            <mt-cell :key="n" v-for="n in 10" title="tab-container 1"></mt-cell>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="jinka">
                            <mt-cell :key="n" v-for="n in 5" title="tab-container 2"></mt-cell>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="heika">
                            <mt-cell :key="n" v-for="n in 7" title="tab-container 3"></mt-cell>
                        </mt-tab-container-item>
                    </mt-tab-container>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
    import headerTop from 'components/headTop'
    import {
        TabContainer,
        TabContainerItem
    } from 'mint-ui';
    import {
        Button
    } from 'mint-ui';
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
        data() {
            return {
                active: "puka",
                // swipeable: true
            };
        },
    
        created: function() {
            console.log(mapActions)
    
        },
        methods: {
            test(id) {
                this.active = id
                console.log(this.active)
            },
            // ...mapActions([
            //     'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
            //     'decrement'
            // ])
            ...mapActions({
                //触发mutations定义的increment方法
                add: 'increment', // 映射 this.add() 为 this.$store.dispatch('increment')
                dec: 'decrement',
            })
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
        transition: all .3s;
    }
    
    .router-fade-enter,
    .router-fade-leave-active {
        transform: translate3d(100%, 0, 0);
        opacity: .6;
    }
</style>