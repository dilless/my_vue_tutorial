<template>
  <ul class="movies">
    <movie v-for="movie in movies" :key="movie.id" :movie="movie"/>
  </ul>
</template>

<script>
  import Movie from './Movie'
  export default {
    name: "Movies",
    components: {
      Movie,
    },
    data() {
      return {
        movies: [
          {id:0, title: 'Star Wars'},
          {id:1, title: 'Blade Runner'},
        ],
      }
    },
  }
</script>
<style scoped>

</style>
