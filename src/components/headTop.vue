<template>
    <header id="head_top">
        <section class="head_goback" @click="$router.go(-1)" v-if="goBack">
            <svg class="icon" width="1rem" height="1rem" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M480.591151 216.192877" fill="#ffffff" /><path d="M475.940225 175.233" fill="#ffffff" /><path d="M369.112174 514.863211l381.074112-379.929032c13.155624-13.132088 13.155624-34.387181 0-47.494711l-11.905144-11.879562c-13.179161-13.107529-34.485419-13.107529-47.642067 0l-416.844803 415.544181c-13.131065 13.131065-13.131065 34.388205 0 47.51927l416.844803 415.544181c13.155624 13.106506 34.511002 13.106506 47.642067 0l11.905144-11.879562c13.155624-13.107529 13.155624-34.362622 0-47.51927L369.112174 514.863211z" fill="#ffffff" /></svg>
        </section>
        <section class="title_head ellipsis" v-if="headTitle">
            <span>{{headTitle}}</span>
        </section>
    </header>
</template>

<script>
    export default {
        data() {
            return {
                
            }
        },
        props: [
            'goBack',
            'headTitle'
        ]
    }
</script>

<style lang="scss" scoped>
    @import '~scss_page';
    #head_top{
        background-color: $theme-color;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        @include wh(100%, 1.95rem);
    }
    .head_goback{
        @include wh(1.6rem, 1.95rem);
        width: 1.6rem;
        height: 1.95rem;
        line-height: 2.5rem;
        text-align:center;
    }
    .head_login{
        right: 0.55rem;
        @include sc(0.65rem, #fff);
        @include ct;
        .login_span{
            color: #fff;
        }
        .user_avatar{
            fill: #fff;
            @include wh(.8rem, .8rem);
        }
    }
    .title_head{
        @include center;
        width: 50%;
        color: #fff;
        text-align: center;
        font-size:0.8rem;
        .title_text{
            @include sc(0.8rem, #fff);
            text-align: center;
            font-weight: bold;
        }
    }
    
</style>