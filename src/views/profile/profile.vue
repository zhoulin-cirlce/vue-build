<template>
    <div>
        <div class="index">
            <header-Top :head-title="'我的'"></header-Top>
            <div class="content">
                <div class="ment-main">
                    <div class="profile">
                        <banner :banner-list="bannerList"></banner>
                        <div class="details">
                            <ul class="in-list bdbr-1px bdbt-1px">
                                <cell :cell-list="filelist"></cell>
                            </ul>
                        </div>
                        <div class="layOut" @click="logout">退出登录</div>
                    </div>
    
                </div>
    
            </div>
            <foot_guide></foot_guide>
    
        </div>
        <transition name="router-slid" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import headerTop from 'components/headTop'
    import foot_guide from 'components/footer'
    import cell from 'components/cell'
    import banner from 'components/banner'
    import {MessageBox} from 'mint-ui';
    import {getProfileList,getbannerList} from '../../api/api';
    export default {
        data() {
            return {
                bannerList: [],
                filelist: []
            }
        },
        mounted: function() {
            getProfileList().then(data => {
                this.filelist = data.data.profile
            });
            getbannerList().then(data => {
                this.bannerList = data.data.bannerList
            })
        },
        components: {
            headerTop,
            foot_guide,
            cell,
            banner
        },
        methods: {
            //退出登录
            logout: function() {
                var _this = this;
                MessageBox.confirm('确认退出吗?').then(action => {
                    sessionStorage.removeItem('user');
                    _this.$router.push('/login');
                });
    
            }
        }
    }
</script>

<style scoped lang="scss">
    .layOut {
        background: #fff;
        text-indent: 41px;
        height: 44px;
        line-height: 44px;
        width: 100%;
        overflow: hidden;
        display: -webkit-box;
        display: -moz-box;
        vertical-align: middle;
        color: #f97e7e;
        margin-top: 10px
    }
    
    .profile {
        height: 100%;
        background: #f9f9f9;
    }
    
    .in-list {
        width: 100%;
        background-color: white;
        overflow: hidden;
        position: relative;
    }
    
    .bdbt-1px:before {
        height: 1px;
        content: '';
        width: 100%;
        border-bottom: 1px solid #e3e5e9;
        position: absolute;
        top: -1px;
        left: 0;
        transform: scaleY(.5);
        -webkit-transform: scaleY(.5);
        z-index: 10;
    }
    
    .in-list li {
        list-style-type: none;
    }
    
    .in-list .in-item {
        height: 44px;
        line-height: 44px;
        width: 100%;
        overflow: hidden;
        display: -webkit-box;
        display: -moz-box;
        vertical-align: middle;
    }
    
    .w-18 {
        width: 18px;
    }
    
    .couponIn-icon {
        height: 100%;
        display: table-cell;
        margin-right: 10px;
        line-height: 44px;
        vertical-align: top;
    }
    
    .couponIn-icon img {
        width: 100%;
        vertical-align: middle;
    }
    
    .in-item .in-item-info {
        vertical-align: middle;
        padding-right: 10px;
        -webkit-box-flex: 1;
        -moz-box-flex: 1;
        margin-left: 10px;
        position: relative;
    }
    
    .in-item-info span {
        display: inline-block;
        vertical-align: middle;
    }
    
    .profile-Order {
        font-size: 14px;
        color: #232326;
    }
    
    .fl {
        float: left;
        font-size: 0;
        font-size: 0.6rem;
        i {
            margin: 2px 8px 0 5px;
            vertical-align: middle;
        }
    }
    
    .frddd {
        float: right;
        font-size: 0;
        margin-right: 2%
    }
    
    .in-item-info span {
        display: inline-block;
        vertical-align: middle;
    }
    
    .profile-AllOrder {
        font-size: 12px;
        color: #848689;
        margin-right: 3px;
    }
    
    .bdbr-1px:after {
        height: 1px;
        content: '';
        width: 100%;
        border-top: 1px solid #e3e5e9;
        position: absolute;
        bottom: -1px;
        right: 0;
        transform: scaleY(.5);
        -webkit-transform: scaleY(.5);
        z-index: 10;
    }
    
    .router-slid-enter-active,
    .router-slid-leave-active {
        transition: all .3s;
    }
    
    .router-slid-enter,
    .router-slid-leave-active {
        transform: translate3d(100%, 0, 0);
        opacity: 1;
    }
</style>