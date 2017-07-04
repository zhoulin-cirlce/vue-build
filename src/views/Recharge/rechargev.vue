<template>
    <div class="index">
        <header-top :head-title="title" :go-back="true">
        </header-top>
        <div class="content">
            <div class="ment-main">
                <div class="chongzhi">
                    <div v-if="handeltype == 1" class="tips">首笔限额5万，日限额50万</div>
                    <div v-if="handeltype == 2" class="tips col">预计12小时内到账。</div>
                    <div class="jin">
                        <label for="">金额</label>
                        <input v-if="handeltype == 1" type="text" id="jine" placeholder="5元起充" v-model="chongzhi">
                        <input v-if="handeltype == 2" type="text" id="jine" :placeholder="'可取金额'+money+'元'" v-model="quxian">
                    </div>
                    <div v-if="handeltype == 2" class="tipss">
                        <div>1、快速取现2万／笔，普通取现5万／笔</div>
                        <div>2、当日充值金额资金不可使用快速取现</div>
                    </div>
                    <div class="btn_submit chong" v-if="handeltype == 1" @click="RechArge">
                        <mt-button size="large" type="primary">充值</mt-button>
                    </div>
                    <div class="btn_submit" v-if="handeltype == 2" @click="Enchashment">
                        <mt-button size="large" type="primary">取现</mt-button>
                    </div>
                </div>
            </div>
            <aler-tip v-if="showAlert" @closeTip="showAlert = false" :alertText="alertText"></aler-tip>
        </div>
    
    </div>
</template>

<script>
    import headerTop from 'components/headTop'
    import alerTip from 'components/alert'
    import {
        mapGetters,
        mapActions
    } from 'vuex'
    import {
        Toast
    } from 'mint-ui';
    export default {
        name: 'rechar',
        data() {
            return {
                chongzhi: null,
                quxian: null,
                title: '充值',
                handeltype: null,
                showAlert: false, //弹出框
                alertText: null, //弹出信息
                balance: null,
                money:null
            }
        },
        computed: {
            // 使用对象展开运算符将 getters 混入 computed 对象中
            ...mapGetters([
                'getUserinfo',
            ])
        },
        created: function() {
            this.money = this.getUserinfo.money;
            this.balance = this.getUserinfo.balance;
            //handeltype值为1时是充值 2是取现
            const handeltype = this.$route.params.handeltype;
            this.handeltype = handeltype;
            if (handeltype == 1) {
                this.title = '充值'
            }
            if (handeltype == 2) {
                this.title = '取现'
            }
        },
        components: {
            headerTop,
            alerTip
        },
        methods: {
            ...mapActions({
                //触发mutations定义的increment方法
                getuer: 'getuse'
            }),
            RechArge() {
                if ((/^[0-9]*$/).test(this.chongzhi) && this.chongzhi - 5 < 0) {
                    this.alertText = '请输入正确的充值金额';
                    this.showAlert = true;
                } else {
                    let balance = this.getUserinfo.balance;
                    let money = this.getUserinfo.money;
                    //得到新的总金额
                    let Newmoney = Number(money) + Number(this.chongzhi);
                    //得到新的余额
                    let Newbalance = Number(balance) + Number(this.chongzhi);
                    this.getUserinfo.money = Newmoney.toFixed(2);
                    this.getUserinfo.balance = Newbalance.toFixed(2);
                    //通过getuer改变
                    this.getuer(this.getUserinfo);
                    let instance = Toast({
                        message: '充值成功',
                        duration: -1,
                        className: 'bg'
                    });
                    setTimeout(() => {
                        instance.close();
                        this.$router.go(-1);
                    }, 3000);
                }
            },
            Enchashment(){
                let quxian = this.quxian;
                let quxianl = Number(quxian);
                let money = this.getUserinfo.money;
                if(quxianl < this.balance && quxianl > 0){
                    let balance = this.getUserinfo.balance;
                    let Newmoney = money - quxianl;
                    this.getUserinfo.money = Newmoney.toFixed(2);
                    let Newbalance = balance - quxianl;
                    this.getUserinfo.balance = Newbalance.toFixed(2);
                    let instance = Toast({
                        message: '取现成功',
                        duration: -1,
                        className: 'bg'
                    });
                    setTimeout(() => {
                        instance.close();
                        this.$router.go(-1);
                    }, 2000);
                }else{
                    this.alertText = '余额不足';
                    this.showAlert = true;
                }
                
            }

        }
    }
</script>

<style lang="scss">
    @import '~scss_page';
    .mint-button--primary {
        background: $theme-color;
    }
    
    .tipss {
        padding: 20px 5%;
        font-size: 0.5rem;
        color: #ccc
    }
    
    .chong {
        margin-top: 20px
    }
    
    .chongzhi {
        .tips {
            height: 30px;
            line-height: 30px;
            font-size: .5rem;
            text-indent: 5%
        }
        .col {
            color: $theme-color
        }
        .jin {
            width: 100%;
            background: #fff;
            padding: 0 5%;
        }
        label {
            height: 30px;
            line-height: 30px;
            font-size: 0.5rem
        }
        input {
            height: 30px;
            width: 60%;
            outline: none;
            font-size: .6rem
        }
        .btn_submit {
            padding: 0 5%;
            label {
                font-size: 0.7rem !important;
            }
        }
    }
    
    .bg {
        background: $theme-color !important
    }
</style>