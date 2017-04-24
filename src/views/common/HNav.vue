<template>
<div>
<header class="fixed-title">
  <h2>
      <span class="room-title" v-text="title"></span>
  </h2>
  </header>
  <div class="container-bars"></div>
</div>  
</template>

<script>
export default {
  props: ['title']  
}
</script>

<style scoped>
.container-bars {
  position: absolute;
  top: 55px;
  right: 10px;
  left: 10px;
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  visibility: hidden;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.2),0 2px 10px 0 rgba(0,0,0,0.16);
  font-weight: bold;
  font-size: 1em;
  opacity: 0;
  -webkit-transition: -webkit-transform 0.4s ease, visibility 0.3s ease, opacity 0.3s ease;
  transition: -webkit-transform 0.4s ease,-moz-transform 0.4s ease,-o-transform 0.4s ease,transform 0.4s ease, visibility 0.3s ease, opacity 0.3s ease;
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}
.fixed-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  padding: 0 10px 0 20px;
  width: 100%;
  height: 61px;
  border-bottom: 1px solid;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-flow: row nowrap;
  flex-flow: row nowrap;
  background-color: #fff;
  border-bottom-color: #eaeaea;
}

.fixed-title.visible h2 {
  overflow: visible;
}

.fixed-title h2 {
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
  font-size: 22px;
  line-height: 29px;
  text-align: center;
}

</style>
