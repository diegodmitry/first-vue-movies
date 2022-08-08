import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/'
});

export const getAllmovies = async (search) => {
  const response = await instance.get(`search/movie?api_key=f9a3efe8c813e81a40a9b661bde37457&query=${search}&language=en-EN`);
  return response.data.results;
};

export const getGenres = async () => {  
  const response = await instance.get('genre/movie/list?api_key=f9a3efe8c813e81a40a9b661bde37457&language=en-EN');
  return response.data.genres;
};
