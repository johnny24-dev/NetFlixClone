export const TYPES = {
    GET_LIST_MOVIES_POPULAR : 'GET_LIST_MOVIES_POPULAR',
    GET_LIST_MOVIES_POPULAR_SUCCESS :'GET_LIST_MOVIES_POPULAR_SUCCESS',
    GET_LIST_MOVIES_UPCOMING: 'GET_LIST_MOVIES_UPCOMING',
    GET_LIST_MOVIES_UPCOMING_SUCCESS: 'GET_LIST_MOVIES_UPCOMING_SUCCESS',
    GET_LATEST_MOVIE : 'GET_LATEST_MOVIE',
    GET_LATEST_MOVIE_SUCCESS : 'GET_LATEST_MOVIE_SUCCESS',
    GET_MOVIE_DETAIL: 'GET_MOVIE_DETAIL',
    GET_MOVIE_DETAIL_SUCCESS : 'GET_MOVIE_DETAIL_SUCCESS',
    GET_LIST_MOVIES_TRENDING : 'GET_LIST_MOVIES_TRENDING',
    GET_LIST_MOVIES_TRENDING_SUCCESS : 'GET_LIST_MOVIES_TRENDING_SUCCESS',
    GET_LIST_MOVIE_CATEGORY : 'GET_LIST_MOVIE_CATEGORY',
    GET_LIST_MOVIE_CATEGORY_SUCCESS: 'GET_LIST_MOVIE_CATEGORY_SUCCESS',
}

export const ACTIONS = {
    getListMoviesPopularRequest : (params) => ({type:TYPES.GET_LIST_MOVIES_POPULAR,payload:params}),
    getListMoviesPopularSuccess : (response) => ({type:TYPES.GET_LIST_MOVIES_POPULAR_SUCCESS,payload:response}),
    getListMoviesUpcomingRequest: (params) => ({type:TYPES.GET_LIST_MOVIES_UPCOMING, payload:params}),
    getListMoviesUpcomingSuccess : (response) => ({type:TYPES.GET_LIST_MOVIES_UPCOMING_SUCCESS, payload:response}),
    getLatestMovie : (params) => ({type:TYPES.GET_LATEST_MOVIE, payload:params}),
    getLatestMovieSuccess: (response) => ({type:TYPES.GET_LATEST_MOVIE_SUCCESS, payload:response}),
    getMovieDetail : (params) => ({type:TYPES.GET_MOVIE_DETAIL, payload:params}),
    getMovieDetailSuccess : (response) => ({type:TYPES.GET_MOVIE_DETAIL_SUCCESS, payload:response}),
    getListMoviesTrending : (params) => ({type:TYPES.GET_LIST_MOVIES_TRENDING, payload:params}),
    getListMoviesTrendingSuccess : (response) => ({type:TYPES.GET_LIST_MOVIES_TRENDING_SUCCESS, payload:response}),
    getListMoviesCategory: (params) => ({type:TYPES.GET_LIST_MOVIE_CATEGORY, payload:params}),
    getListMoviesCategorySuccess: (response) => ({type:TYPES.GET_LIST_MOVIE_CATEGORY_SUCCESS, payload:response})
}