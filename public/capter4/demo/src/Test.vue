<!--<template>-->
<!--<div>-->
<!--  <p>{{ message }}</p>-->
<!--  <input v-model="message">-->
<!--</div>-->
<!--</template>-->
<template lang="pug">
ul.movies
  li.movie Star Wars
  li.movie Blade Runner
</template>
<h1></h1>
<script>
    export default {
        name: "Test",
      data() {
          return {
            message: 'Hello world',
          }
      },
    }
</script>

<style scoped>
  p {
    color: grey;
  }
</style>
