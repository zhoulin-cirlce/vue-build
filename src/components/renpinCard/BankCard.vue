<template>
    <section class="bankcard">
        <!--<button @click="add">与兄弟组件传值</button>
        <button v-on:click="talk">I like you</button>-->
        <div class="bank_cont">
            <div class="top-bank">
                <div class="" v-show="bankType == 'putong'">
    
                    <div class="top-title">
                        <div class="top-tips">距离银卡还有200积分</div>
                        <div class="month-good">
                            <div class="text">普卡每月专享权益</div>
                            <div class="ab1"></div>
                        </div>
                    </div>
                    <div class="quanlist clearfix">
                        <div class="item-b">
                            <p class="num-li">+0.5%</p>
                            <p class="shuoming">人品宝加息</p>
                        </div>
                        <div class="item-b">
                            <p class="num-li">5元</p>
                            <p class="shuoming">信用卡还款金</p>
                        </div>
                        <div class="item-b">
                            <p class="num-li">100元</p>
                            <p class="shuoming">人品贷抵扣卷</p>
                        </div>
                    </div>
                    <div class="deatils">
                        <router-link :to="{ name: 'Carddeatils', params: {cardtype:'puka'}}">
                            查看详情
                        </router-link>
                    </div>
                </div>
                <div class="" v-show="bankType == 'yinka'">
                    <div class="top-title">
                        <div class="top-tips"></div>
                        <div class="month-good">
                            <div class="text">银卡每月专享权益</div>
                            <div class="ab1"></div>
                        </div>
                    </div>
                    <div class="quanlist clearfix">
                        <div class="item-b">
                            <p class="num-li">+0.5%</p>
                            <p class="shuoming">人品宝加息</p>
                        </div>
                        <div class="item-b">
                            <p class="num-li">5元</p>
                            <p class="shuoming">信用卡还款金</p>
                        </div>
                        <div class="item-b">
                            <p class="num-li">100元</p>
                            <p class="shuoming">人品贷抵扣卷</p>
                        </div>
                    </div>
                    <div class="deatils">
                    <router-link :to="{ name: 'Carddeatils', params: {cardtype:'yinka'}}">
                            查看详情
                        </router-link>
                    </div>
                </div>
                <div class="" v-show="bankType == 'jinka'">
                    <div class="top-title">
                        <div class="top-tips"></div>
                        <div class="month-good">
                            <div class="text">金卡每月专享权益</div>
                            <div class="ab1"></div>
                        </div>
                    </div>
                    <div class="quanlist clearfix">
                        <div class="item-b">
                            <p class="num-li">+0.5%</p>
                            <p class="shuoming">人品宝加息</p>
                        </div>
                        <div class="item-b">
                            <p class="num-li">5元</p>
                            <p class="shuoming">信用卡还款金</p>
                        </div>
                        <div class="item-b">
                            <p class="num-li">100元</p>
                            <p class="shuoming">人品贷抵扣卷</p>
                        </div>
                    </div>
                    <div class="deatils"><router-link :to="{ name: 'Carddeatils', params: {cardtype:'jinka'}}">
                            查看详情
                        </router-link></div>
                </div>
                <div class="" v-show="bankType == 'baijin'">
                    <div class="top-title">
                        <div class="top-tips"></div>
                        <div class="month-good">
                            <div class="text">白金每月专享权益</div>
                            <div class="ab1"></div>
                        </div>
                    </div>
                    <div class="quanlist clearfix">
                        <div class="item-b">
                            <p class="num-li">+0.5%</p>
                            <p class="shuoming">人品宝加息</p>
                        </div>
                        <div class="item-b">
                            <p class="num-li">5元</p>
                            <p class="shuoming">信用卡还款金</p>
                        </div>
                        <div class="item-b">
                            <p class="num-li">100元</p>
                            <p class="shuoming">人品贷抵扣卷</p>
                        </div>
                    </div>
                    <div class="deatils">
                    <router-link :to="{ name: 'Carddeatils', params: {cardtype:'baijin'}}">
                            查看详情
                        </router-link>
                    </div>
                </div>
                <div class="" v-show="bankType == 'heika'">
                    <div class="top-title">
                        <div class="top-tips"></div>
                        <div class="month-good">
                            <div class="text">黑卡每月专享权益</div>
                            <div class="ab1"></div>
                        </div>
                    </div>
                    <div class="quanlist clearfix">
                        <div class="item-b">
                            <p class="num-li">+0.5%</p>
                            <p class="shuoming">人品宝加息</p>
                        </div>
                        <div class="item-b">
                            <p class="num-li">5元</p>
                            <p class="shuoming">信用卡还款金</p>
                        </div>
                        <div class="item-b">
                            <p class="num-li">100元</p>
                            <p class="shuoming">人品贷抵扣卷</p>
                        </div>
                    </div>
                    <div class="deatils">
                    <router-link :to="{ name: 'Carddeatils', params: {cardtype:'heika'}}">
                            查看详情
                        </router-link>
                    </div>
                </div>
            </div>
    
            <div class="bottom-bar clearfix">
                <ul class="steps  clearfix">
                    <li :class="{select:bankType=='putong'}" @click="chooseBankType('putong')">
                        <div class="triangle-down"></div>
                        普卡
                    </li>
                    <li :class="{select:bankType=='yinka'}" @click="chooseBankType('yinka')">
                        <div class="triangle-down"></div>
                        银卡
                    </li>
                    <li :class="{select:bankType=='jinka'}" @click="chooseBankType('jinka')">
                        <div class="triangle-down"></div>
                        金卡
                    </li>
                    <li :class="{select:bankType=='baijin'}" @click="chooseBankType('baijin')">
                        <div class="triangle-down"></div>
                        白金
                    </li>
                    <li :class="{select:bankType=='heika'}" @click="chooseBankType('heika')">
                        <div class="triangle-down"></div>
                        黑卡
                    </li>
                </ul>
    
            </div>
    
        </div>
    
    
    </section>
</template>

<script>
    import bus from '../../bus.js'
    import {mapGetters,mapActions} from 'vuex'
    export default {
        data() {
            return {
                bankType: '',
                count:0
            }
        },
        props: [
            'integral'
        ],
        mounted:function() {
            
            let integral = this.getUserinfo.integral;
            if(integral < 600){
                this.bankType = 'putong'
            }
        },
        computed: {
            // 使用对象展开运算符将 getters 混入 computed 对象中
            ...mapGetters([
                'getUserinfo',
            ])
        },
        methods: {
            chooseBankType(type) {
                console.log(type)
                if (this.bankType !== type) {
                    this.bankType = type
                } else {
    
                }
            },
            talk:function(){
                this.$emit('childsay','我是从子组件BankCard过来的')
            },
            add:function(){
                bus.$emit('inc', this.count+=1)
            }
           

        }
    }
</script>

<style lang="scss">
    .select .triangle-down {
        position: absolute;
        left: 19%;
        top: -20px;
        width: 0;
        height: 0;
        border-left: 11px solid transparent;
        border-right: 11px solid transparent;
        border-top: 11px solid #fff;
    }
    
    .select {
        color: #fff !important;
        border: 1px solid #fff !important;
    }
    
    .steps {
        position: relative;
    }
    
    .steps li {
        position: relative;
        list-style-type: none;
        width: 16%;
        float: left;
        display: block;
        height: 1.5rem;
        background-color: #ccc;
        line-height: 1.5rem;
        border-radius: 32px;
        font-size: 0.6rem;
        color: #dcdbdb;
        text-align: center;
        font-weight: 700;
        margin: 0 5% 0 0;
        border: 1px solid #dcdbdb;
        box-sizing: border-box
    }
    
    .steps li:last-child {
        margin-right: 0
    }
    
    
    /*连接线*/
    
    .steps li~li:after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: #dcdbdb;
        position: absolute;
        left: -35%;
        right: 0;
        top: 49%;
        z-index: -1;
        /*放置在数字后面*/
    }
    
    .top-bank {
        height: 7rem;
        background: #fff;
        border-radius: 10px;
    }
    
    .top-title {
        text-align: center
    }
    
    .top-tips {
        padding: 10px 0;
        color: #ccc;
        font-size: 0.5rem
    }
    
    .quanlist {
        padding-top: 15px
    }
    
    .month-good {
        position: relative;
        width: 100%;
        text-align: center;
        z-index: 2;
    }
    
    .text {
        width: 46%;
        background: #fff;
        margin: 0 auto;
        font-size: 0.6rem;
        color: #271d1d
    }
    
    .ab1 {
        position: absolute;
        width: 90%;
        left: 5%;
        top: 10px;
        height: 1px;
        background: #d0cccc;
        z-index: -1
    }
    
    .item-b:last-child {
        border-right: none
    }
    
    .item-b {
        float: left;
        width: 33.3%;
        border-right: 1px solid #ccc;
        box-sizing: border-box;
        text-align: center;
    }
    
    .num-li {
        font-size: 0.7rem;
        color: rgba(199, 168, 87, 0.73);
        height: 1rem;
        line-height: 1rem;
    }
    
    .shuoming {
        font-size: 0.5rem;
        color: #ccc
    }
    
    .deatils {
        width: 19%;
        height: 25px;
        line-height: 25px;
        text-align: center;
        border: 1px solid #ccc;
        color: #ccc;
        font-size: 0.5rem;
        margin: 15px auto;
        border-radius: 6px;
        a{
            color: #ccc;
            font-size: 0.5rem;
        }
    }
    
    .bankcard {
        background: #ccc;
        .bank_cont {
            width: 85%;
            background: #ccc;
            margin: 0 auto;
            padding: 15px 0;
        }
        .bottom-bar {
            padding: 18px 0 0 0;
            position: relative;
            z-index: 2;
        }
    }
</style>