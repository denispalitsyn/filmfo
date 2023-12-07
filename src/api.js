import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZmY1MThhYjE5ZTA1OTM3ZGQyYmNmNDdiZjAyMGRkZiIsInN1YiI6IjY1NWUxMTlmZDM5OWU2MDBlYzQzZGY2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0mM90q115YiuoA2kJZtxg7REXj56kUCbRkmWLGl_j90',
  },
});

class MovieApi {
  static async getPopular() {
    const response = await client.get('movie/popular?language=en-US&page=1');

    return response.data.results;
  }

  static async getTopRated() {
    const response = await client.get('movie/top_rated?language=en-US&page=1');

    return response.data.results;
  }

  static async getUpcoming() {
    const response = await client.get('movie/upcoming?language=en-US&page=1');

    return response.data.results;
  }

  static async getMovie(id) {
    const response = await client.get(`movie/${id}?append_to_response=videos,similar,credits&language=en-US`);

    return response.data;
  }

  static async getMovieByGenreId(genreId) {
    const response = await client.get(
      `discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreId}`
    );

    return response.data.results;
  }

  static async search(query) {
    const response = await client.get(
      `search/movie?query=${query}&include_adult=false&language=en-US&page=1`
    );

    return response.data.results;
  }
}

export default MovieApi;
