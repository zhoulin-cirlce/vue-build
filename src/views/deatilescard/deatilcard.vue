  
<template>
    <div class="index" style="z-index:200">
        <header-top :go-back="true" :head-title="'专享权益'"></header-top>
    
        <div class="content" style="background:#fff">
            <div class="ment-main">
                <div class="nav">
                    <div class="nav-top" >
                        <div class="nav-cont" @click="showType('puka')"><div :class="['card ',{ selected:cardtype=='puka'}]">普卡</div></div>
                        <div class="nav-cont" @click="showType('yinka')"><div :class="['card ',{ selected:cardtype=='yinka'}] ">银卡</div></div>
                        <div class="nav-cont" @click="showType('jinka')"><div :class="['card ',{ selected:cardtype=='jinka'}] ">金卡</div></div>
                        <div class="nav-cont" @click="showType('baijin')"><div :class="['card ',{ selected:cardtype=='baijin'}] ">白金</div></div>
                        <div class="nav-cont" @click="showType('heika')"><div :class="['card ',{ selected:cardtype=='heika'}] ">黑卡</div></div>
                    </div>
    
                </div>
                <div class="page-tab-container">
                    <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable value="puka">
                        <mt-tab-container-item id="puka">
                            <mt-cell :key="n" v-for="n in 10" title="tab-container 1"></mt-cell>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="yinka">
                            <mt-cell :key="n" v-for="n in 5" title="tab-container 2"></mt-cell>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="jinka">
                            <mt-cell :key="n" v-for="n in 7" title="tab-container 3"></mt-cell>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="baijin">
                            <mt-cell :key="n" v-for="n in 7" title="tab-container 4"></mt-cell>
                        </mt-tab-container-item>
                        <mt-tab-container-item id="heika">
                            <mt-cell :key="n" v-for="n in 7" title="tab-container 5"></mt-cell>
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
    import {TabContainer,TabContainerItem} from 'mint-ui';
    import {Button} from 'mint-ui';
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    export default {
        computed: {
           
        },
        data() {
            return {
                cardtype:null,
                active: "puka",
                // swipeable: true
            };
        },
    
        created: function() {
            let cardtype = this.$route.params.cardtype;
            this.cardtype = cardtype;
            this.showType(cardtype)
    
        },
        methods: {
            showType(cardtype) {
                this.active = cardtype;
                this.cardtype = cardtype;
            },
        },
        components: {
            headerTop
        }
    }
</script>

<style lang="scss" scoped>
    .ment-main{
        background:#fff
    }
    .selected{
        color:#fa6666 !important;
        font-weight:bold;
    }
    .nav-top {
        width: 100%;
        display: -webkit-box;
        display: flex;
        .nav-cont {
            width: 100%;
            -webkit-box-flex: 1;
            flex: 1;
            background:#f5f5f5;
            .card{
                height:50px;
                text-align:center;
                line-height:50px;
                color:#b3aeae;
                font-size:.5rem;
            }
        }
    }
    
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