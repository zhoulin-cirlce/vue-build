<template>
	<div class="cardindex index">
		<headerTop :head-title="title" ></headerTop>
		<div class="content">
			<div class="ment-main">
	
				<div class="top">
					<bank-card :integral="integral" @childsay="listenTohome"></bank-card>
				</div>
				<div class="cc">{{childsay}}</div>
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
		</div>
		<foot_guide></foot_guide>
		<loading v-show="getShowStause"></loading>
	</div>
</template>

<script>
	import {
		Swipe,
		SwipeItem,
		Indicator
	} from 'mint-ui';
	import headerTop from 'components/headTop'
	import foot_guide from 'components/footer'
	import loading from 'components/loading'
	import taskList from 'components/renpinCard/TaskList'
	import BankCard from 'components/renpinCard/BankCard'
	import {mapGetters,mapActions} from 'vuex'
	import {getTaskList,getCardList,getUserListPage} from '../../api/api';
	export default {
		data() {
			return {
				taskTitle: '每月任务，快速加积分', //人品卡 列表头部
				taskData: "",
				title: '人品卡',
				baseUrl: 'https://fuss10.elemecdn.com',
				cardList: '',
				integral: null, //用户积分,
				childsay: ''
			}
		},
		computed:{
			...mapGetters([
                'getShowStause'
            ])
			
		},
		methods: {
			
			//获取子组件BankCard 传来的值
			listenTohome: function(data) {
				this.childsay = data;
				console.log(data)
			},
			//获取数据
			async initdata() {
				// Indicator.open({
				// 	text: 'Loading...',
				// 	spinnerType: 'fading-circle'
				// });
				//获取用户信息
				let user = sessionStorage.getItem('user');
				//console.log(user)
				console.log(this.$store.state.userInfo)
				if (user) {
					user = JSON.parse(user);
					this.sysUserName = user.name || '';
					this.sysUserAvatar = user.avatar || '';
					this.integral = user.integral || '';
				};
				getCardList().then(data => {
					//取得cardListlen长度
					let cardListlen = data.data.cardList.length;
					//返回一个新数组
					let newarr = data.data.cardList.concat([]);
					//处理后的数据 
					let cardarr = [];
					for (let i = 0, j = 0; i < cardListlen; i += 8, j++) {
						cardarr[j] = newarr.splice(0, 8);
					}
					this.cardList = cardarr;
				})
	
				await getTaskList().then(data => {
	
					this.taskData = data.data.TaskList
	
				});
				//Indicator.close()
			}
		},
		mounted() {
			this.initdata()
			getUserListPage({page:7}).then(data =>{
				console.log(data)
			})
		},
		components: {
			headerTop,
			taskList,
			BankCard,
			foot_guide,
			loading
		}
	}
</script>

<style scoped lang="scss">
	@import '~scss_page';
	#card {
		background: #fff
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