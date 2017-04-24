<template>
  <article class="flex-tab-bar" style="display: block;">
      <slot></slot>
  </article>
</template>

<style scoped>
</style>

<style scoped>
.flex-tab-bar {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 130;
  width: 40px;
  height: 100%;
  background: #fff;
}
</style>
