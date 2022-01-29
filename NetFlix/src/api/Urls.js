
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

//TV shows

export const URL_TV_POPULAR = '/tv/popular'
export const URL_TV_TRENDING = '/trending/tv/week'

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
   URL_TV_VIDEO : (idTv) => (`/movie/${idTv}/videos`),
   URL_MOVIE_RECOMENDATION : (movieId) => (`/movie/${movieId}/recommendations`),
   URL_TV_RECOMENDATION : (tvId) => (`/tv/${tvId}/recommendations`),
   URL_COLECTION : (colectionId) => (`/collection/${colectionId}`),
}
