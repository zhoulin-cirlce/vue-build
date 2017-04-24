<template>
	<el-row class="container">
	<div id="rocket-chat":class="[{ 'menu-closed': isClosed },{ 'menu-opened': isOpened }, menunav]">
    <aside class="side-nav" role="navigation">
		<navigation></navigation>
		<sidebar></sidebar>
		</aside>
		<section class="main content-container">
		<burger @click.native="menuType" :class="{ 'burgerleft': burgerLeft }"></burger>
			<transition>
				<router-view></router-view>
			</transition>
		</section>
	</div></el-row>
</template>

<script>
import Navigation from '../common/Navigation.vue';
import Sidebar from '../common/Sidebar.vue';
import Burger from '../common/Burger.vue';

	export default {
		data() {
            return {
                menunav:'menu-nav',
                isClosed: false,
                isOpened: false,
                burgerLeft:false
            }
        },
		components:{
            Navigation,Sidebar,Burger
        },
        methods: {
		    menuType () {
		      this.burgerLeft=!this.burgerLeft;
		      this.isOpened=!this.isOpened;
		      console.log("arrow");
		    }
		  }
	}

</script>
<style type="text/css">
#rocket-chat {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    visibility: visible;
    width: auto;
    height: auto;
    opacity: 1;
    -webkit-transition: opacity 0.2s ease-out;
    transition: opacity 0.2s ease-out;
}
.side-nav {
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 100;
	display: block;
	overflow: visible;
	padding: 12px 0 0 0;
	width: 260px;
	height: auto;
	-webkit-transition: -webkit-transform 0.3s ease-out;
	transition: -webkit-transform 0.3s ease-out,-moz-transform 0.3s ease-out,-o-transform 0.3s ease-out,transform 0.3s ease-out;
}

.side-nav:before {
	position: absolute;
	top: 59px;
	left: 8px;
	width: 189px;
	height: 1px;
	content: " ";
}
.main {
			position: fixed;
		    top: 0;
		    right: 0;
		    bottom: 0;
		    left: 260px;
		    width: auto;
		    height: auto;
		    -webkit-transition: right 0.25s cubic-bezier(0.5, 0, 0.1, 1);
		    transition: right 0.25s cubic-bezier(0.5, 0, 0.1, 1);
}
@media all and (max-width:1100px) {
	#rocket-chat .flex-opened {
		right: 40px;
	}
}
@media all and (max-width:780px) {
     .side-nav {
        top: 0;
        -webkit-transition: -webkit-transform 0.3s ease-out;
        transition: -webkit-transform 0.3s ease-out,-moz-transform 0.3s ease-out,-o-transform 0.3s ease-out,transform 0.3s ease-out;
    }
     .main {
        left: 0;
        z-index: 120;
        background-color: #fff;
    }

     .main.notransition {
        -webkit-transition: -webkit-transform 0s;
        transition: -webkit-transform 0s,-moz-transform 0s,-o-transform 0s,transform 0s;
    }

     .main, .flex-tab-bar {
        -webkit-transition: -webkit-transform 0.2s linear;
        transition: -webkit-transform 0.2s linear,-moz-transform 0.2s linear,-o-transform 0.2s linear,transform 0.2s linear;
    }
    .menu-opened .side-nav {
        -webkit-transform: translateX(0px);
        transform: translateX(0px);
    }
    .menu-opened .main {
        -webkit-transform: translateX(260px);
        transform: translateX(260px);
    }
}	


@media all and (max-width:500px) {
	.flex-tab-bar {
		display: none;
	}

	.main {
		right: 0;
	}
}

</style>
