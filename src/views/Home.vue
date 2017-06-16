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
	<div>
		<headerTop :head-title="title" :go-back="true"></headerTop>
		<div class="top">
			<bank-card :integral="integral"></bank-card>
		</div>
		<div class="sw-card clearfix" id="card">
			<mt-swipe :auto="4000" :show-indicators="false">
				<mt-swipe-item v-for="(item , index) in cardList" :key="index">
					<div v-for="card in item" :key="card.id" class="link_to">
						<router-link :to="{}">
							<img :src="baseUrl+card.image_url" alt="">
							<p>{{card.title}}</p>
						</router-link>
					</div>
				</mt-swipe-item>
	
			</mt-swipe>
		</div>
		<task-list :task-title="taskTitle" :task-data="taskData"></task-list>
	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem
	} from 'mint-ui';
	import headerTop from 'components/headTop'
	import taskList from 'components/renpinCard/TaskList'
	import BankCard from 'components/renpinCard/BankCard'
	export default {
		data() {
			return {
				taskTitle: '每月任务，快速加积分', //人品卡 列表头部
				taskData: [{
						iconClass: "icon-gift",
						jifen: "+30积分",
						contantText: "首次购买定期500元",
						status: '500'
					},
					{
						iconClass: "icon-delicious",
						jifen: "+10积分",
						contantText: "人品货代成功完成一笔接待",
						status: '未完成'
					},
					{
						iconClass: "icon-gift",
						jifen: "+30积分",
						contantText: "首次购买定期500元",
						status: '已成功购买0/500'
					},
					{
						iconClass: "icon-delicious",
						jifen: "+10积分",
						contantText: "人品货代成功完成一笔接待",
						status: '未完成'
					},
					{
						iconClass: "icon-gift",
						jifen: "+30积分",
						contantText: "首次购买定期500元",
						status: '已成功购买0/500'
					},
					{
						iconClass: "icon-delicious",
						jifen: "+10积分",
						contantText: "人品货代成功完成一笔接待",
						status: '未完成'
					},
					{
						iconClass: "icon-pinterest",
						jifen: "+100积分",
						contantText: "成功邀请好友投资并获得佣金",
						status: '未完成'
					}
				],
				title: '人品卡',
				baseUrl: 'https://fuss10.elemecdn.com',
				cardList: [{
						id: 15,
						title: "每月翻牌",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "霸气十足",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "信用卡还款",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "人品专家",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "给你花",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "人品贷",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "美食",
						image_url: "/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg",
					},
					{
						id: 15,
						title: "办信用卡",
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
				],
				integral: null //用户积分
			}
		},
		methods: {
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
		},
		mounted() {
			//获取用户信息
			let user = sessionStorage.getItem('user');
			console.log(user)
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
				this.integral = user.integral || '';
			};
			//取得cardListlen长度
			let cardListlen = this.cardList.length;
			//返回一个新数组
			let newarr = this.cardList.concat([]);
			//处理后的数据 
			let cardarr = [];
			for (let i = 0, j = 0; i < cardListlen; i += 8, j++) {
				cardarr[j] = newarr.splice(0, 8);
			}
			this.cardList = cardarr
		},
		components: {
			headerTop,
			taskList,
			BankCard
		}
	}
</script>

<style scoped lang="scss">
	@import '~scss_page';
	.top {
		margin-top: 1.95rem;
	}
	
	.sw-card {
		height: 7.3rem;
	}
	
	.link_to {
		-webkit-tap-highlight-color: transparent;
		-webkit-font-smoothing: antialiased;
		width: 25%;
		float: left;
		text-align: center;
		img {
			margin-top: 0.3rem;
			margin-bottom: 0.3rem;
			@include wh(1.8rem, 1.8rem);
		}
		p {
			text-align: center;
			@include sc(0.6rem, #666);
		}
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