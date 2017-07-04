<template>
    <div class="index">
        <header-Top :head-title="'我的'"></header-Top>
        <div class="content">
            <div class="ment-main">
                <div class="profile">
                    <banner :banner-list="bannerList"></banner>
                    <div class="details">
                        <ul class="in-list bdbr-1px bdbt-1px">
                            <cell :cell-list="cellList"></cell>
                        </ul>
                    </div>
                    <div class="layOut" @click="logout">退出登录</div>
                </div>
            </div>
    
        </div>
    
        <foot_guide></foot_guide>
    </div>
</template>

<script>
    import headerTop from 'components/headTop'
    import foot_guide from 'components/footer'
    import cell from 'components/cell'
    import banner from 'components/banner'
    import { MessageBox } from 'mint-ui';
    export default {
        data() {
            return {
                bannerList: [{
                        link: '/Login',
                        imageUrl: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t6667/290/1495913339/208769/20caf282/595321b3N70d63c46.jpg!q70.jpg'
                    },
                    {
                        link: '/Login',
                        imageUrl: 'https://img1.360buyimg.com/da/jfs/t5638/255/4340728551/99084/71c4f46d/594cccd9Nc18d4386.jpg'
                    },
                    {
                        link: '/Login',
                        imageUrl: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t6175/87/1527048471/155328/21a0964c/59538faaNde929d6a.jpg!q70.jpg'
                    },
                    {
                        link: '/Login',
                        imageUrl: 'https://img1.360buyimg.com/da/jfs/t4567/146/2427964850/85636/894eb2e3/58ef3525N7d6d38b4.jpg'
                    },
                    {
                        link: '/Login',
                        imageUrl: 'https://m.360buyimg.com/mobilecms/s720x322_jfs/t5905/159/3522388799/140115/cb15e51b/59522c58N1618a960.jpg!q70.jpg'
                    }
                ],
                cellList: [{
                        iconClass: 'icon-gift',
                        text: '关于我们'
                    },
                    {
                        iconClass: 'icon-chrome',
                        text: '帮助中心'
                    },
                    {
                        iconClass: 'icon-linkedin',
                        text: '信息披露'
                    }
                ]
            }
        },
        components: {
            headerTop,
            foot_guide,
            cell,
            banner
        },
        methods:{
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
        color:#f97e7e;
        margin-top:10px
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
</style>