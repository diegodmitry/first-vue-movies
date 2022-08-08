<template>
  
    <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/w500/'+movie.poster_path"/>
    <!-- load default image -->
    <img v-else src="/img/poster.jpg"/>

    <h2>{{movie.title}}</h2>

    <h5 v-if="movie.release_date">Released on {{dateFormat(movie.release_date)}}</h5>
    <!-- load default date -->
    <h5 v-else >date unknown</h5>

    <h4>{{movie.vote_average}}/10<span>&#127775;</span></h4>

    <ul v-if="movie.genre_ids">
      <li v-for="movieGenre in genresMovies(movie.genre_ids)">
        {{movieGenre}}
      </li>
    </ul>
    <ul v-else>
      <li v-for="genre in movie.genres">
        {{genre.name}}
      </li>
    </ul>

    <h3 v-if="movie.overview">Synopsis</h3>
    <p>{{movie.overview}}</p>
</template>

<script>

export default {
  props: {
    movie: Object,
    genres: Object,
  },
  methods: {
    dateFormat(date) {
      let [yy, mm, dd] = date.split('-')
      return [dd, mm, yy].join('/');
    },
    genresMovies(idGenre){
      let genresArray = [];
      idGenre.forEach((element, i) => {
        this.genres.forEach((el, j) => {
          if (idGenre[i] === this.genres[j].id) {
            genresArray.push(this.genres[j].name)
          }
        })
      });
      return genresArray;
    }
  },
}
</script>
