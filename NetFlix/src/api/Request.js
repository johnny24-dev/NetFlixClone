
import NAxios from "./NAxios"
import Urls from './Urls';


const processResponse = (promise) => {
    return promise.then(response => ({ error: null, data: response?.data })).catch(error => ({ error, data: error?.response?.data }))
}

export const buildGetParams = (params, haveQuestionMark = false) => {
    if (!params || params.length === 0) {
        return '';
    }
    if (haveQuestionMark) {
        return `&${Object.entries(params).map(x => (`${x[0]}=${x[1]}`)).join('&')}`
    }
    return `?${Object.entries(params).map(x => (`${x[0]}=${x[1]}`)).join('&')}`
}

// authen

export const createToken = (params) => {
    return processResponse(NAxios.get(`${Urls.URL_REQUEST_TOKEN}${buildGetParams(params)}`))
}

export const validateAccount = (params) => {
    return processResponse(NAxios.post(`${Urls.URL_VALIDATE_LOGIN}${buildGetParams(params.apiKey)}`,params.body))
}

export const createSessionId = (params) => {
    return processResponse(NAxios.post(`${Urls.URL_CREATE_SESSION_ID}${buildGetParams(params.apiKey)}`,params.body))
}

export const deleteSessionId = (params) => {
    return processResponse(NAxios.delete(`${Urls.URL_DELETE_SESSION_ID}${buildGetParams(params.apiKey)}`,{data:params.body}))
}

// moives

export const getListPopilarMovie = (params) => {
    return processResponse(NAxios.get(`${Urls.URL_MOVIES_POPULAR}${buildGetParams(params)}`))
}

export const getListMovieUpComing = (params) => {
    return processResponse(NAxios.get(`${Urls.URL_MOVIES_UPCOMMING}${buildGetParams(params)}`))
}

export const getLatestMovie = (params) => {
    return processResponse(NAxios.get(`${Urls.URL_LATEST_MOVIE}${buildGetParams(params)}`))
}

export const getMovieDetail = (id,params) => {
    return processResponse(NAxios.get(`${Urls.URL_MOVIE_DETAIL}/${id}${buildGetParams(params)}`))
}

export const getListMovieTrending = (params) => {
    return processResponse(NAxios.get(`${Urls.URL_MOVIE_TRENDING}${buildGetParams(params)}`))
}

export const getMovieCategory = (params) => {
    return processResponse(NAxios.get(`${Urls.URL_CATEGORY_MOVIE}${buildGetParams(params)}`))
}

//TV

export const getListTVPopular = (params) => {
    return processResponse(NAxios.get(`${Urls.URL_TV_POPULAR}${buildGetParams(params)}`))
}

export const getListTVTrending = (params) => {
    return processResponse(NAxios.get(`${Urls.URL_TV_TRENDING}${buildGetParams(params)}`))
}

export const getTVDetail = (params) => {
    return processResponse(NAxios.get(`${Urls.URL_TV_DETAIl}${buildGetParams(params)}`))
}

export const getListDiscoverMovie = (params) => {
    return processResponse(NAxios.get(`${Urls.URL_DISCOVER_MOVIE}${buildGetParams(params)}`))
}








