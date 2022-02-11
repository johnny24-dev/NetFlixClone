export const TypeAccout = {
    GET_DETAIL : 'GET_DETAIL',
    GET_DETAIL_SUCCESS : 'GET_DETAIL_SUCCESS',

}

export const ActionsAccount = {
    getDetail:(params) => ({type:TypeAccout.GET_DETAIL, payload:params}),
    getDetailSuccess: (response) => ({type:TypeAccout.GET_DETAIL_SUCCESS, payload:response}),
}