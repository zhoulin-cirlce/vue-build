<template>
    <div class="index">
        <header-top :head-title="'人品投资'">
            <router-link to="/messge" slot="messagecenter" class="messri">消息中心</router-link>
        </header-top>
    
        <div class="content">
            <div class="ment-main">
                <mt-loadmore :top-method="loadTop" ref="loadmore">
    
                    <div class="renpin">
                        <div class="alltotal ">
                            <div class="clowh">昨日收益(元)<span></span></div>
                            <div class="clowh aftermoney">{{shouyi}}</div>
                            <div class="clowh">总资产(元)</div>
                            <div class="clowh afallmoney">{{money}}</div>
                        </div>
                        <div class="payaessay f_clear">
                            <span class="pay">
                                <router-link :to="{ name: 'rechar', params: {handeltype:1}}">
                                        充值
                                    </router-link>
                                </span>
                            <span>
                                <router-link :to="{ name: 'rechar', params: {handeltype:2}}">
                                    取现
                                </router-link>
                            </span>
                        </div>
                        <div class="prolist">
                            <div class="balance f_clear">
                                <div class="proname"><span>余额(4.43%)</span><span class="prodes ">自动竞购人品宝</span></div>
                                <div class="promon">￥{{balance}}</div>
                            </div>
                            <div class="balance f_clear">
                                <div class="proname"><span>人品宝(6.10%)</span><span class="prodes ">存取便捷，收益稳健</span></div>
                                <div class="promon">￥{{yuebao}}</div>
                            </div>
                            <div class="balance f_clear">
                                <div class="proname"><span>人品宝定期(4.43%)</span><span class="prodes f_fnt2">短期免排队，长期收益高</span></div>
                                <div class="promon">￥0.00</div>
                            </div>
                            <div class="balance f_clear">
                                <div class="proname"><span>余额(4.43%)<span class="num">99+</span></span><span class="prodes f_fnt2">自动竞购人品宝</span></div>
                                <div class="promon liji">立即投资</div>
                            </div>
                        </div>
                        <div class="explain">
                            <div class="state"><span class="zijin"></span>账户资金由新浪支付托管 江西银行存管对接中</div>
                            <div class="custanum f_clear">
                                <!--成交金额-->
                                <div class="accrumony f_clear">
                                    <span class="jepic jpme"></span>
                                    <div class="leiji">
                                        <span>266.08亿元</span>
                                        <span>累计成交金额</span>
                                    </div>
                                </div>
                                <!--成交用户-->
                                <div class="accrucust f_clear">
                                    <span class="jepic jpmm"></span>
                                    <div class="leiji">
                                        <span>464.9万人</span>
                                        <span>累计成交用户</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                </mt-loadmore>
            </div>
        </div>
        <foot_guide></foot_guide>
    
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    import headerTop from 'components/headTop'
    import foot_guide from 'components/footer'
    export default {
        name: 'Investment',
        data() {
            return {
                bottomText: '',
                money: '', //总资产
                shouyi: '', //收益
                balance: '', //余额
                yuebao: ''
            };
        },
        created: function() {
            const useInfo = this.$store.state.userInfo;
            this.money = useInfo.money;
            this.yuebao = useInfo.yuebao;
            this.balance = useInfo.balance;
            this.shouyi = useInfo.shouyi;
    
        },
        methods: {
            ...mapActions([
                'getuse'
            ]),
            loadTop(id) {
                setTimeout(() => {
                    this.$refs.loadmore.onTopLoaded(id);
                }, 1500);
    
            }
    
    
        },
        components: {
            headerTop,
            foot_guide
        }
    };
</script>

<style lang="scss">
    @import '~scss_page';
    .change_city {
        right: 0.4rem;
        @include sc(0.6rem, #fff);
        @include ct;
    }
    
    .messri {
        right: 0.55rem;
        font-size: 0.65rem;
        color: #fff;
        position: absolute;
        top: 50%;
        -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        transform: translateY(-50%);
    }
    
    .mint-indicator-mask {
        z-index: 999 !important;
    }
    
    .mint-loadmore {
        height: 100%
    }
    
    .f_clear:after {
        display: block;
        clear: both;
        content: ".";
        visibility: hidden;
        height: 0;
        line-height: 0;
        zoom: 1;
    }
    
    .alltotal {
        background: #fa6666;
        padding: 4% 0;
        font-size: 0.6rem;
    }
    
    .alltotal .clowh {
        color: white;
        text-align: center;
        line-height: 20px;
    }
    
    .alltotal .aftermoney {
        margin: 5% 0 7% 0;
        font-size: 1.5rem;
    }
    
    .alltotal .afallmoney {
        margin-top: 5px;
        font-size: .8rem;
    }
    
    .payaessay {
        width: 100%;
        padding: 2% 0;
        background: #FFFFFF;
        color: #6B6B6B;
    }
    
    .payaessay span {
        width: 49.2%;
        display: inline-block;
        float: left;
        text-align: center;
        height: 30px;
        line-height: 30px;
    }
    
    .payaessay .pay {
        border-right: 1px solid #EBEBEB;
    }
    
    .prolist {
        margin-top: 10px;
        background: #FFFFFF;
        color: #6B6B6B;
    }
    
    .prolist .balance {
        border-bottom: 1px solid #F2F2F2;
        padding: 3% 5%;
        line-height: 18px;
    }
    
    .prolist .balance .proname {
        float: left;
    }
    
    .prolist .balance .prodes {
        color: #B3B3B3;
        display: block;
        font-size: 0.6rem;
        margin-top: 5px
    }
    
    .prolist .balance .promon {
        float: right;
        margin-top: 3%;
    }
    
    .prolist .balance .liji {
        border: 1px solid #FE5959;
        color: #FE5959;
        border-radius: 15px;
        padding: 2% 4%;
        margin-top: 2%;
    }
    
    .prolist .balance .num {
        display: inline-block;
        font-size: 0.5rem;
        border: 1px solid #FE5959;
        color: #FE5959;
        border-radius: 8px;
        padding: 0 6px;
        margin-left: 5px;
    }
    
    .explain .state {
        background: #fff;
        color: #B3B3B3;
        padding: 3%;
        text-align: center;
        font-size: 0.5rem;
    }
    
    .explain .zijin {
        background: url(../../assets/icon_safe.png) no-repeat;
        height: 15px;
        width: 21px;
        margin-left: 1%;
        background-size: 12px;
        display: inline-block;
        vertical-align: middle
    }
    
    .explain .custanum {
        background: #fff;
        margin: 5% 0;
        color: #B3B3B3;
        font-size: 0.5rem;
    }
    
    .explain .custanum .accrumony {
        width: 49.2%;
        float: left;
        border-right: 1px solid #EBEBEB;
        height: 2rem;
    }
    
    .explain .custanum .accrucust {
        width: 49.2%;
        float: left;
        height: 2rem;
    }
    
    .leiji {
        float: left;
        margin: 3%
    }
    
    .leiji span {
        display: block;
    }
    
    .jepic {
        float: left;
        margin: 7% 0 0 24%;
    }
    
    .jpmm {
        background: url(../../assets/icon-me-ucenter.png) no-repeat;
        height: 20px;
        width: 21px;
        background-size: 20px;
        display: inline-block;
        vertical-align: middle
    }
    
    .jpme {
        background: url(../../assets/icon-bank-w.png) no-repeat;
        height: 20px;
        width: 21px;
        background-size: 20px;
        display: inline-block;
        vertical-align: middle
    }
    
    .router-slid-enter-active,
    .router-slid-leave-active {
        transition: all .3s;
    }
    
    .router-slid-enter,
    .router-slid-leave-active {
        transform: translate3d(2rem, 0, 0);
        opacity: 0;
    }
</style>