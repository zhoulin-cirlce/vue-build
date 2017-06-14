<template>
	<!--<el-row class="container">
				<el-col :span="24" class="header">
					
					<el-col :span="24" class="userinfo">
						<el-dropdown trigger="hover">
							<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar" /> {{sysUserName}}</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
				</el-col>
				<el-col :span="24" class="main">		
					<section class="content-container">
						<div class="grid-content bg-purple-light">
							<el-col :span="24" class="content-wrapper">
								<transition name="fade" mode="out-in">
									<router-view></router-view>
								</transition>
							</el-col>
						</div>
					</section>
				</el-col>
			</el-row>-->
	<section>
		<div class="sw-card" id="card">
			<mt-swipe :auto="0">
				<mt-swipe-item v-for="(item , index) in cardList" :key="index">
					<a v-for="card in item" :key="card.id">
						{{card.title}}
					</a>
				</mt-swipe-item>
	
			</mt-swipe>
		</div>
	</section>
</template>

<script>
	import {Swipe,SwipeItem} from 'mint-ui';
	export default {
		data() {
			return {
				// sysName:'VUEADMIN',
				// collapsed:false,
				// sysUserName: '',
				// sysUserAvatar: '',
				// form: {
				// 	name: '',
				// 	region: '',
				// 	date1: '',
				// 	date2: '',
				// 	delivery: false,
				// 	type: [],
				// 	resource: '',
				// 	desc: ''
				//}
				cardList: [{
						id: 15,
						title: "美食",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "美食",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "美食",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "美食",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "美食",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "美食",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "美食",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "美食",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "美食",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "美食",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "美食",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
				]
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function(a, b) {},
			//退出登录
			logout: function() {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {
	
				});
	
	
			},
			//折叠导航栏
			collapse: function() {
				this.collapsed = !this.collapsed;
			},
			showMenu(i, status) {
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			};
			//取得cardListlen长度
			let cardListlen = this.cardList.length;
			//返回一个新数组
			let newarr = this.cardList.concat([]);
			//处理后的数据 
			let cardarr = [];
			for (let i = 0, j = 0; i < cardListlen; i += 8, j++) {
				cardarr[j] = newarr.splice(0,8);
			}
			this.cardList = cardarr
		}
	}
</script>

<style scoped lang="scss">
	@import '~scss_vars';
	.sw-card {
		height: 220px
	}
	.container {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
		.header {
			height: 60px;
			line-height: 60px;
			background: $color-primary;
			color: #fff;
			.userinfo {
				text-align: right;
				padding-right: 35px;
				float: right;
				.userinfo-inner {
					cursor: pointer;
					color: #fff;
					img {
						width: 40px;
						height: 40px;
						border-radius: 20px;
						margin: 10px 0px 10px 10px;
						float: right;
					}
				}
			}
			.logo {
				//width:230px;
				height: 60px;
				font-size: 22px;
				padding-left: 20px;
				padding-right: 20px;
				border-color: rgba(238, 241, 146, 0.3);
				border-right-width: 1px;
				border-right-style: solid;
				img {
					width: 40px;
					float: left;
					margin: 10px 10px 10px 18px;
				}
				.txt {
					color: #fff;
				}
			}
			.logo-width {
				width: 230px;
			}
			.logo-collapse-width {
				width: 60px
			}
			.tools {
				padding: 0px 23px;
				width: 14px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
			}
		}
		.main {
			display: flex;
			// background: #324057;
			position: absolute;
			top: 60px;
			bottom: 0px;
			overflow: hidden;
			aside {
				flex: 0 0 230px;
				width: 230px;
				// position: absolute;
				// top: 0px;
				// bottom: 0px;
				.el-menu {
					height: 100%;
				}
				.collapsed {
					width: 60px;
					.item {
						position: relative;
					}
					.submenu {
						position: absolute;
						top: 0px;
						left: 60px;
						z-index: 99999;
						height: auto;
						display: none;
					}
				}
			}
			.menu-collapsed {
				flex: 0 0 60px;
				width: 60px;
			}
			.menu-expanded {
				flex: 0 0 230px;
				width: 230px;
			}
			.content-container {
				// background: #f1f2f7;
				flex: 1;
				// position: absolute;
				// right: 0px;
				// top: 0px;
				// bottom: 0px;
				// left: 230px;
				overflow-y: scroll;
				padding: 20px;
				.breadcrumb-container {
					//margin-bottom: 15px;
					.title {
						width: 200px;
						float: left;
						color: #475669;
					}
					.breadcrumb-inner {
						float: right;
					}
				}
				.content-wrapper {
					background-color: #fff;
					box-sizing: border-box;
				}
			}
		}
	}
</style>