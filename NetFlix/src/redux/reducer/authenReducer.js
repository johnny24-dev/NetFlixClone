import {TYPES,ACTIONS} from '../action/authenAction'

const initSate = {
    token:'',
    sessionId:'',
    login:null
}

const authenReducer = (state = initSate, action) => {

    switch (action.type) {
        case TYPES.TOKEN_REQUEST_SUCCESS:
            return {
                ...state,
                token: action.payload.request_token,
            }
        case TYPES.LOGIN_SUCCESS:
            return {
                ...state,
                login:true,
            }
        case TYPES.SESSION_ID_SUCCESS:
            return {
                ...state,
                sessionId:action.payload.session_id
            }
        
        default:
            return state
    }
}

export default authenReducer

