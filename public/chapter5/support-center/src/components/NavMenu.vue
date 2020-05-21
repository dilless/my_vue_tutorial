<template>
    <nav class="menu">
        <!-- links here -->
        <router-link :to="{ name: 'home' }" exact>Home</router-link>
        <router-link :to="{ name: 'faq' }">FAQ</router-link>
    </nav>
</template>

<script>
    export default {
        name: "NavMenu"
    }
</script>

<style lang="stylus" scoped>
    @import "../style/imports"

    .router-link-active {
        border-bottom-color $primary-color
    }

</style>
