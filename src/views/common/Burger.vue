<template>
<div class="burger">
    <i></i>
    <i></i>
    <i></i>    
    <div class="unread-burger-alert">
    •
    </div>
  </div>
</template>


<style scoped>
.burger {
  position: absolute;
  display: none;
  visibility: hidden;
  top: 5px;
  left: 260px;
  z-index: 140;
  margin-left: 7px;
  padding: 12px;
  cursor: pointer;
  -webkit-transition: -webkit-transform 0.2s ease-out 0.1s;
  transition: -webkit-transform 0.2s ease-out 0.1s,-moz-transform 0.2s ease-out 0.1s,-o-transform 0.2s ease-out 0.1s,transform 0.2s ease-out 0.1s;
}

.burger i {
  display: block;
  margin: 5px 0;
  width: 20px;
  height: 2px;
  opacity: .8;
  -webkit-transition: -webkit-transform 0.2s ease-out, width 0.2s ease-out;
  transition: -webkit-transform 0.2s ease-out,-moz-transform 0.2s ease-out,-o-transform 0.2s ease-out,transform 0.2s ease-out, width 0.2s ease-out;
  background-color: #333;
}

.burger i:nth-child(3) {
  -webkit-transition-delay: 0.1s;
  transition-delay: 0.1s;
}

.burger .unread-burger-alert {
  position: absolute;
  top: 8px;
  right: 4px;
  z-index: 3;
  padding: 0 4px;
  height: 18px;
  min-width: 18px;
  border-radius: 20px;
  text-align: center;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  background-color: #f95555;
    color: #fff;
}

@media all and (max-width:780px) {
  .burger {
    display: inline-block;
    visibility: visible;
    left: 0;
  }
  .burgerleft i:nth-child(1) {
        width: 10px;
        opacity: 1;
        -webkit-transform: translateY(3px) rotate(-45deg);
        transform: translateY(3px) rotate(-45deg);
        -webkit-transform-origin: 50% 50% 0;
        transform-origin: 50% 50% 0;
    }

  .burgerleft i:nth-child(3) {
        width: 10px;
        opacity: 1;
        -webkit-transform: translateY(-3px) rotate(45deg);
        transform: translateY(-3px) rotate(45deg);
        -webkit-transform-origin: 50% 50% 0;
        transform-origin: 50% 50% 0;
    }
}
</style>
