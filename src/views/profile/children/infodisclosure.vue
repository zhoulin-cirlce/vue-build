<template>
    <div class="index">
        <header-Top :head-title="'信息披露'" :go-back="true"></header-Top>
        <div class="content">
            <div class="ment-main">
                <div class="about">
                    <div class="aoods">
                        <div>资金排队列表：</div>
                        <div class="brea">目前实时排队用户 <span class="colred">{{totalpeo}}</span>人，排队资金为<span class="colred">{{totalmoney}}</span>元。</div>
                        <table>
                            <tr class="bgco">
                                <td>ID</td>
                                <td>排队资金</td>
                            </tr>
                            <tr v-for="(item , index) in piList" ::key="index">
                                <td>{{item.id}}</td>
                                <td>{{item.money}}元</td>
                            </tr>
                        </table>
                    </div>
                    <div @click="loadMore" class="load" v-show="length != 0">查看更多></div>
                    <div v-show="length == 0" class="load">没有更多</div>
                </div>
                <loading v-show="getShowStause"></loading>
            </div>
            
        </div>
    
    </div>
</template>

<script>
    import {getUserListPage} from '../../../api/api';
    import {mapGetters,mapActions} from 'vuex'
    import loading from 'components/loading'
    import headerTop from 'components/headTop'
    export default {
        data() {
            return {
                page :1,
                totalpeo:"",
                totalmoney:"",
                piList:[],
                length:null,
            }
        },
        created:function(){
            this.init()
        },
        computed:{
			...mapGetters([
                'getShowStause'
            ])
			
		},
        components: {
            headerTop,
            loading
        },
        methods:{
            init(){
                getUserListPage({page:this.page}).then(data =>{
                    let List = data.data;
                    this.totalpeo = List.total;
                    this.totalmoney = List.tomoney;
                    let info = List.users;
                    this.length = info.length;
                    for(const index in info){
                        this.piList.push(info[index])
                    }
                })
            },
            loadMore(){
                this.page ++;
                this.init();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .index{
        z-index:101
    }
    .about {
        padding:20px 3%;
        p{
        padding: 10px;
        line-height: 30px;
        }
    }
    .brea{
        word-break: break-all;
    }
    .colred{
        color:red
    }
    table{
        margin-top:20px;
        border-collapse:collapse;
        width:100%;
        th{
            width:100%;
        }
        td{
            width:50%;
            height:30px;
            line-height:30px;
            text-align:center;
            border:1px solid #ccc;
        }
    }
    .bgco{
        background:#dedede
    }
    .load{
        width:100%;
        height:30px;
        line-height:30px;
        text-align:center;
        color:#4260f1
    }
</style>