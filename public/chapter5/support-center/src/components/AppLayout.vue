<template>
    <div class="app-layout">
        <header class="header">
            <div>
                <img src="../assets/logo.svg" alt="" class="img">
            </div>
            <div>My shirt shop</div>
        </header>

        <NavMenu/>

        <router-view/>
    </div>
</template>

<script>
    import NavMenu from "./NavMenu"
    export default {
        name: "AppLayout",
        components: {
            NavMenu,
        },
    }
</script>

<style lang="stylus">
    @import "../style/main.styl"
</style>

<style lang="stylus" scoped>
    .header
        .img
            width: 64px
            height: 64px
</style>
