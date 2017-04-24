<template>
  <div class="main-content">
  <section class="messages-container">
      <slot></slot>
  </section>
  </div>
</template>

<style scoped>
</style>

<style scoped>
.main-content {
    position: fixed;
    top: 0;
    right: 40px;
    bottom: 0;
    left: 260px;
    width: auto;
    height: auto;
    -webkit-transition: right 0.25s cubic-bezier(0.5, 0, 0.1, 1);
    transition: right 0.25s cubic-bezier(0.5, 0, 0.1, 1);
}
.messages-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-right: 1px solid #eaeaea;
}
@media all and (max-width:780px) {

     .main-content {
        left: 0;
    }
  }
</style>
