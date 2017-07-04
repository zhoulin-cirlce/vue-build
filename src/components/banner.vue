<template>
    <div class="banner">
        <mt-swipe :auto="5000" :show-indicators="true">
				<mt-swipe-item v-for="(item , index) in bannerList" :key="index">
						<router-link :to="item.link" class="con">
							<img v-lazy="item.imageUrl" alt="">
						</router-link>
				</mt-swipe-item>
		</mt-swipe>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        props:[
            'bannerList'
        ]
    }
</script>
<style lang="scss">
    .banner{
        width:100%;
        height:7rem;
        .con{
            display:inline-block;
            width:100%;
            height:100%
        }
    }
    img{
        width:100%
    }
</style>