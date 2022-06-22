import api from "./core/index";

const apis = {
   
    getMovies : () => api.get(`/api/movies`),
    getSearch : (payload) =>api.get(`/api/search?title=${payload.text}`),
    putLike : ({movieId})=> api.put(`/api/movie/${movieId}/like`),
    putList : ({movieId})=> api.put(`/api/movie/${movieId}/mylist`),
    getDetail : ({movieId})=> api.get(`/api/movie/${movieId}`),
    getMyList : ()=> api.get(`/api/mylist`),
}

export default apis; 