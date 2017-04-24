<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'app',
		components: {
		}
	}

</script>

<style lang="scss">
html {
	height: 100%;
}

html.noscroll {
	overflow: hidden;
}
img{padding: 0; border:0; margin:0}
body {
	position: relative;
	overflow: visible;
	padding: 0;
	width: 100%;
	height: 100%;
	font-size: .875rem;
	font-family: -apple-system,BlinkMacSystemFont,Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI","Segoe UI Emoji","Segoe UI Symbol","Meiryo UI";
	line-height: 1rem;
	-webkit-font-smoothing: antialiased;
	color: #444;
}

input,button,select,textarea {
	font-size: inherit;
	font-family: inherit;
	line-height: inherit;
	outline:none;
}

input:focus {
	outline: none;
	box-shadow: 0 0 0;
}

textarea,select,input[type='text'],input[type='number'],input[type='email'],input[type='url'],input[type='password'],input[type='time'] {
	position: relative;
	padding: 2px 8px;
	width: 100%;
	height: 35px;
	outline: none;
	border: 1px solid;
	border-radius: 5px;
	line-height: normal;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	border-color:#eaeaea;
}
.clearfix {
	clear: both;
}

.clearfix::after {
	clear: both;
	display: table;
	content: "";
}

*,*:before,*:after {
	box-sizing: border-box;
}

*:not(input):not(textarea),*:not(input):not(textarea):before,*:not(input):not(textarea):after {
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

button {
	padding: 0;
	border: none;
	background: none;
	color: inherit;
	text-align: left;
	text-transform: inherit;
	font-style: inherit;
	cursor: pointer;
}

	body {
		margin: 0px;
		padding: 0px;
		/*background: url(assets/bg1.jpg) center !important;
		background-size: cover;*/
		// background: #1F2D3D;
		font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
		font-size: 14px;
		-webkit-font-smoothing: antialiased;
	}
	
	#app {

	}
	
	.el-submenu [class^=fa] {
		vertical-align: baseline;
		margin-right: 10px;
	}
	
	.el-menu-item [class^=fa] {
		vertical-align: baseline;
		margin-right: 10px;
	}
	
	.toolbar {
		background: #f2f2f2;
		padding: 10px;
		//border:1px solid #dfe6ec;
		margin:10px 0px;
		.el-form-item {
			margin-bottom: 10px;
		}
	}
.wrapper,.el-table__body-wrapper {
	-ms-overflow-style: -ms-autohiding-scrollbar;
}

.wrapper::-webkit-scrollbar,.el-table__body-wrapper::-webkit-scrollbar {
	width: 6px;
	height: 6px;
	background: transparent;
}

.wrapper::-webkit-scrollbar-thumb,.el-table__body-wrapper::-webkit-scrollbar-thumb {
	-webkit-border-radius: 50px;
	background-color: rgba(180,180,180,0.75);
}

.wrapper::-webkit-scrollbar-corner,.el-table__body-wrapper::-webkit-scrollbar-corner {
	background-color: transparent;
}
</style>