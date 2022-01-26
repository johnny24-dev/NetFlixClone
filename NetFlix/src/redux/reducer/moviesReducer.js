import { TYPES } from "../action/moviesAction";

const initSate = {
    popular : {
        page:1,
        listMovie:[]
    },
    upcoming: {
        page:1,
        listMovie:[]
    },
    latest:{
    },
    detail:{},
    trending:{
        page:1,
        listMovie:[]
    },
    category:[]
}

const moviesReducer = (state = initSate, action) => {
    switch (action.type) {
        case TYPES.GET_LIST_MOVIES_POPULAR_SUCCESS:
            return{
                ...state,
                popular:action.payload
            }
        case TYPES.GET_LIST_MOVIES_TRENDING_SUCCESS:
            return{
                ...state,
                trending:action.payload
            }
        case TYPES.GET_LATEST_MOVIE_SUCCESS:
            return{
                ...state,
                latest:action.payload
            }
        case TYPES.GET_MOVIE_DETAIL_SUCCESS:
            return{
                ...state,
                detail:action.payload
            }
        case TYPES.GET_LIST_MOVIE_CATEGORY_SUCCESS:
            return {
                ...state,
                category:action.payload
            }
        case TYPES.GET_LIST_MOVIES_UPCOMING_SUCCESS:
            return {
                ...state,
                upcoming:action.payload
            }
    
        default:
            return state
    }
}

export default moviesReducer