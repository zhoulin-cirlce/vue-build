<template>
<div>
<div class="rooms-list">
 <div class="wrapper">
    <div class="sidebar">
        <el-menu default-active="1"  class="el-menu-vertical-demo" theme="dark" unique-opened router>
            <el-submenu index="title1">
                <template slot="title"><i class="el-icon-menu"></i>档案管理</template>
                <el-menu-item index="archivesList">档案列表</el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</div></div>
<span class="arrow bottom" ></span>       
        <footer class="footer">
            <a href="http://suneee.ucp.weilian.cn:3001/home"><img style="left: 27px;top: 22px;width: 41%;position: absolute;" :src="sysUsersunee"></a>
        </footer>
</div>
</template>

<script>
    export default {
        data() {
            return {
                sysUsersunee:"http://suneee.ucp.weilian.cn:3001/assets/logo.png"
            }
        }
        ,
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>

<style scoped>
.rooms-list {
    position: absolute;
    top: 60px;
    bottom: 55px;
    display: block;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    direction: rtl;
    -webkit-overflow-scrolling: touch;
}
.rooms-list {
    background-color: #454545;
    -ms-overflow-style: -ms-autohiding-scrollbar;
}

.rooms-list::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background: transparent;
}

.rooms-list::-webkit-scrollbar-thumb {
    -webkit-border-radius: 50px;
    background-color: rgba(255,255,255,0.05);
}

.rooms-list::-webkit-scrollbar-corner {
    background-color: transparent;
}
.rooms-list>.wrapper {
    padding-bottom: 1em;
    padding-left: 8px;
    direction: ltr;
}

    .sidebar{
        display: block;
        background: #454545;
    }
    .el-menu--dark {
    background: #454545;
    }
    .el-menu--dark .el-submenu .el-menu {
        background: #404040；
    }

    .sidebar > ul {
        height:100%;
    }
    .footer {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 15px 0 15px;
    width: 100%;
    height: 55px;
    min-height: 55px;
    text-align: right;
    background: #fff;
    background-color: #404040;
}

.footer .logo {
    display: block;
    margin-top: -1px;
    width: 100%;
    height: 100%;
}

.footer .logo:hover {
    text-decoration: none;
}

.footer small {
    display: block;
    margin-top: 2px;
    margin-bottom: 0;
    padding-right: 4px;
    width: 100%;
    text-transform: lowercase;
    font-weight: 400;
    font-size: 11px;
}

.footer img {
    display: inline-block;
    margin-bottom: -10px;
    max-width: 222px;
    max-height: 43px;
}
</style>
