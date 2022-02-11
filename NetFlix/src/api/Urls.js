
// Acount
export const URL_REQUEST_TOKEN = '/authentication/token/new'
export const URL_VALIDATE_LOGIN = '/authentication/token/validate_with_login'
export const URL_CREATE_SESSION_ID = '/authentication/session/new'
export const URL_DELETE_SESSION_ID = '/authentication/session'

//movie
export const URL_MOVIES_POPULAR = '/movie/popular'
export const URL_MOVIES_UPCOMMING ='/movie/upcoming'
export const URL_LATEST_MOVIE = '/movie/latest'
export const URL_MOVIE_TRENDING = '/trending/movie/week'
export const URL_CATEGORY_MOVIE = '/genre/movie/list'
export const URL_DISCOVER_MOVIE = '/discover/movie'
export const URL_MOVIE_NOW_PLAYING = '/movie/now_playing'
export const URL_MOVIE_TOP_RATE = '/movie/top_rated'
export const URL_SEARCH_MOVIE = '/search/movie'

//TV shows

export const URL_TV_POPULAR = '/tv/popular'
export const URL_TV_TRENDING = '/trending/tv/week'
export const URL_SEARCH_TV = '/search/tv'


// account
export const URL_ACCOUNT_DETAIL = '/account'

export default {
   URL_REQUEST_TOKEN,
   URL_VALIDATE_LOGIN,
   URL_CREATE_SESSION_ID,
   URL_DELETE_SESSION_ID,
   URL_CATEGORY_MOVIE,
   URL_LATEST_MOVIE,
   URL_MOVIES_POPULAR,
   URL_MOVIES_UPCOMMING,
   URL_MOVIE_DETAIL :(idMovie) => (`/movie/${idMovie}`),
   URL_MOVIE_TRENDING,
   URL_TV_POPULAR,
   URL_TV_DETAIl : (idTv) => (`/tv/${idTv}`),
   URL_TV_TRENDING,
   URL_DISCOVER_MOVIE,
   URL_MOVIE_VIDEO : (idMovie) => (`/movie/${idMovie}/videos`),
   URL_TV_VIDEO : (idTv) => (`/tv/${idTv}/videos`),
   URL_MOVIE_RECOMENDATION : (movieId) => (`/movie/${movieId}/recommendations`),
   URL_TV_RECOMENDATION : (tvId) => (`/tv/${tvId}/recommendations`),
   URL_COLECTION : (colectionId) => (`/collection/${colectionId}`),
   URL_MOVIE_NOW_PLAYING,
   URL_MOVIE_TOP_RATE,
   URL_SEARCH_MOVIE,
   URL_SEARCH_TV,
   URL_ACCOUNT_DETAIL,
   URL_MOVIE_SATE :(idMovie) => (`/movie/${idMovie}/account_states`),
   URL_MOVIE_RATE :(idMovie) => (`/movie/${idMovie}/rating`),
   URL_TV_STATE : (idTv) => (`/tv/${idTv}/account_states`),
   URL_TV_RATE : (idTv) => (`/tv/${idTv}/rating`),
   URL_MARK_AS_FAVORITE : (account_id) => (`/account/${account_id}/favorite`),
}
