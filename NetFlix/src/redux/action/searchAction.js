export const TypeSearch = {
    SEARCH: 'SEARCH',
    SEARCH_SUCCESS: 'SEARCH_SUCCESS',
}

export const ActionsSearch = {
    requestSearch: (params) => ({ type: TypeSearch.SEARCH, payload: params }),
    searchSuccess: (response) => ({ type: TypeSearch.SEARCH_SUCCESS, payload: response })
}