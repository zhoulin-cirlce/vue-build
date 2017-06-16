<template>
    <div class="task">
        <div style="height:8px;background:RGBA(228,228,228,0.4)"></div>
        <div class="task_title">{{taskTitle}}</div>
        <div class="task_cont">
            <div class="task_list clearfix" v-for="item in taskData">
                <router-link :to="{ name: 'form', params: {status:item.status}}">
                    <div :class="item.iconClass" id="icon"></div>
                    <div class="content ellipsis">
                        <p class="textc">{{item.contantText}}</p>
                        <p class="status">{{item.status}}</p>
                    </div>
                    <div class="jifen">{{item.jifen}}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
    
            }
        },
        props: ['taskTitle', 'taskData']
    }
</script>

<style lang="scss" scoped>
    @import '~assets/icon/icon_style.css';
    .task {
        .task_title {
            font-size: 0.6rem;
            color: #ccc;
            text-indent: 3%;
            height: 28px;
            line-height: 28px;
        }
        .task_list {
            height: 3rem;
            border-top: 1px solid #ccc;
            #icon {
                width: 1rem;
                height: 1rem;
                font-size: 1rem;
                color: #fa6666;
                float: left;
                margin-left: 3%;
                margin-top: 6%
            }
            a {
                width: 100%;
                height: 100%
            }
            .content {
                float: left;
                width: 64%;
                margin-left: 4%;
                margin-top: 3%;
                .textc {
                    font-size: 0.7rem;
                    color: #000
                }
                .status {
                    font-size: 0.6rem;
                    color: #ccc
                }
            }
            .jifen {
                float: right;
                line-height: 3rem;
                margin-right: 3%;
                font-size: 0.7rem;
                color: #dccd78;
            }
        }
    }
</style>