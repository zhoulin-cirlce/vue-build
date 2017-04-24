<template>
<div class="tab-button">
	<button :title="title"><i :class="mycls"></i></button>
</div>
</template>

<script>
export default {
  props: {
    mycls: '',
    title: ''
  }
}
</script>

<style scoped>
.tab-button:hover {
    background: #eaeaea;
}
.tab-button {
    position: relative;
    text-align: center;
    cursor: pointer;
}
.tab-button {
	position: relative;
	text-align: center;
	cursor: pointer;
}

.tab-button button {
	height: 38px;
}

.tab-button.active {
	border-right: 3px solid;
}

.tab-button.active button {
	margin-left: 3px;
}

.tab-button.active .counter {
	margin-right: -3px;
}
</style>
