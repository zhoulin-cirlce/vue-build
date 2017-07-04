<template>
    <div>
        <li v-for="(item , index) in cellList" :key="index">
            <div class="in-item  my-item">
                <div class="in-item-info my-item bdbr-1px">
                    <div class="fl">
                        <i :class="item.iconClass +' icon iconfont'"></i>
                        <span class="profile-Order">{{item.text}}</span>
                    </div>
                    <div class="frddd">
                        <span class="profile-AllOrder"></span>
                        <span class="profile-arrow"></span>
                    </div>
                </div>
            </div>
        </li>
    </div>
</template>

<script>
    export default {
        name: 'cell',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App',
            };
        },
        props: ['cellList']
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '~assets/icon/icon_style.css';
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
            margin:2px 8px 0 5px;
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
    
    .profile-arrow {
        width: 11px;
        height: 15px;
        background-position: 0 -20px;
        vertical-align: middle;
        display: block;
        background: url(../assets/nextpre.png) no-repeat;
        background-size: 8px 15px;
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