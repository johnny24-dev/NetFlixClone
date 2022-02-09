import {TypeSearch} from '../action/searchAction'

const initSate = {
    listMovieAndTv:[],
}

const searchReducer = (state = initSate,action) => {
    switch (action.type) {
        case TypeSearch.SEARCH_SUCCESS:
            return {
                ...state,
                listMovieAndTv:action.payload
            }
    
        default:
            return state
    }
}

export default searchReducer