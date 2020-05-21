<template>
    <div class="app-layout">
      <header class="header">
        <div>
          <img src="../assets/logo.svg" alt="" class="img">
        </div>
        <div>My shirt shop</div>
      </header>
    </div>

  <router-view/>
</template>

<script>
    export default {
        name: "AppLayout"
    }
</script>

<style lang="stylus" scoped>
@import "../style/main.styl"
</style>

<style lang="stylus" scoped>
  .header
    .img
      width: 64px
      height: 64px
</style>
