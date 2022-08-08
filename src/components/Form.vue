<template>
  <div class="form-component">
    <div class='form-container'>
      <form>
        <!-- // quando o valor do input é alterado o search recebe o seu valor -->
        <input type="text" placeholder='Search' id="search-input" @input="search = $event.target.value" />
      </form>
      <!-- buttons -->
      <div class='btn-sort-container'>
        <div class='btn-sort' id="goodToBad" @click="setSortGoodBad">
          Top<span>&#8594;</span>
        </div>
        <div class='btn-sort' id="badToGood" @click="setSortGoodBad">
          Down<span>&#8594;</span>
        </div>
      </div>

    </div>
    <div class="result">
      <div class="card" v-for="movie in movies" :key="movie.id">
        <Card :movie="movie" :genres="genres"/>
      </div>
    </div>
  </div>
</template>
<script>
import { getAllmovies, getGenres } from '../services/rest/api';
import Card from './Card.vue';

export default {
  // exportat para o app
  components: {
    Card
  },
  data() {
    return {
      movies:[],
      genres:[],
      search:'code'
    }
  },
  methods: {
    async getMovies() {
      // eu set o filmes para dentro do estado
      this.movies = await getAllmovies(this.search);
      this.genres = await getGenres();
    },
    setSortGoodBad(e) {
      this.movies.sort((a, b) => {
        if (e.target.id === 'goodToBad') {
          return b.vote_average - a.vote_average;
        } else if (e.target.id === 'badToGood') {
          return a.vote_average - b.vote_average;
        }else {
          return '';
        }
      })
    }
  },
  created(){ // quando o components for criado a funcao será executada
    this.getMovies()
  },
  watch:{ // monitora o data selecionado
    search(){ // monitora o search dentro de data
      this.getMovies()
    }
  }
}
</script>