import api from "./core/index";

const apis = {
    // getComments : ({board_id})=> api.get(`/api/detail/${board_id}/reply`),
    // postComment : (payload)=> api.post(`/api/detail/${payload.board_id}/reply`,{
    //     reply_text: payload.reply_text,
    // }),
    // deleteComment : (payload)=> api.delete(`/api/detail/${payload.board_id}/${payload.reply_id}`),
    // putComment : (payload)=> api.put(`/api/detail/${payload.board_id}/${payload.reply_id}`,{
    //     reply_text: payload.reply_text,
    // }),
    // getRank : ()=>api.get(`/api/best`),
    // deleteComments : (payload)=>api.delete(`/api/detail/${payload.board_id}/reply`)
    getMovies : () => api.get(`/api/movies`),
    getSearch : ({search}) =>api.get(`/api/search?title=${search}`),
    getVideos : ()=> api.get(`/api/movieUrl`),
    postLike : ({movieId})=> api.post(`/api/movie/${movieId}/like`),
    deleteLike : ()=> api.delete(`/`),
}

export default apis; 