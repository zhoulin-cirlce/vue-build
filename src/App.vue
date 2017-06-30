<template>
	<div id="app">
		<transition name="router-fade" 
			mode="out-in">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>

// import Hello from './components/Hello.vue'

//add test add circle
export default {
	name: 'app',
	components: {
	}
}

</script>
<style scoped>
	@import './styles/comm.scss';
</style>
