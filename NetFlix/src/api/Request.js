
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

