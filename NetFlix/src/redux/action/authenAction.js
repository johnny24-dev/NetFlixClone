export const TYPES = {

    TOKEN_REQUEST :'TOKEN_REQUEST',
    TOKEN_REQUEST_SUCCESS:'TOKEN_REQUEST_SUCCESS',
    TOKEN_REQUEST_ERROR:'TOKEN_REQUEST_ERROR',
    LOGIN_REQUEST: 'ACCOUNT_LOGIN_REQUEST',
    LOGIN_SUCCESS: 'ACCOUNT_LOGIN_SUCCESS',
    LOGIN_ERROR: 'ACCOUNT_LOGIN_ERROR',
    LOGGED_IN: 'LOGGED_IN',
    SESSION_ID_REQUEST: 'SESSION_ID_REQUEST',
    SESSION_ID_SUCCESS: 'SESSION_ID_SUCCESS',

    LOGOUT_REQUEST: 'ACCOUNT_LOOUT_REQUEST',
}

export const ACTIONS = {

    tokenRequest:(params) => ({type:TYPES.TOKEN_REQUEST, payload:params}),
    tokenSuccess: (response) => ({type:TYPES.TOKEN_REQUEST_SUCCESS, payload:response}),

    sessionIdRequest : (params) => ({type:TYPES.SESSION_ID_REQUEST, payload:params}),
    sessionIdSuccess: (response) => ({type:TYPES.SESSION_ID_SUCCESS, payload:response}),

    loginRequest: (params) => ({ type: TYPES.LOGIN_REQUEST, payload: params }),
    loginSuccess: (response) => ({ type: TYPES.LOGIN_SUCCESS, payload: response }),
    loginError: (message) => ({ type: TYPES.LOGIN_ERROR, payload: message }),
    loggedIn: (token) => ({ type: TYPES.LOGGED_IN, payload: { token } }),

    logoutRequest: (noRestart) => ({ type: TYPES.LOGOUT_REQUEST, payload: noRestart }),

}