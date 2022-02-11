import { TypeAccout } from "../action/accountAction";

const initSate = {
    info:{},
    listMoviesFavorite:[],
    listTvShowsFavorite:[]
}


const accountReducer = (state = initSate,action) => {
    switch (action.type) {
        case TypeAccout.GET_DETAIL_SUCCESS:
            return {
                ...state,
                info:action.payload
            }
    
        default:
            return state
    }
}

export default accountReducer