
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
    console.log('request:>>',`${Urls.URL_REQUEST_TOKEN}${buildGetParams(params)}`)
    return processResponse(NAxios.get(`${Urls.URL_REQUEST_TOKEN}${buildGetParams(params)}`))
}

export const validateAccount = (params) => {
console.log("🚀 ~ file: Request.js ~ line 26 ~ validateAccount ~ params", params)
    return processResponse(NAxios.post(`${Urls.URL_VALIDATE_LOGIN}${buildGetParams(params.apiKey)}`,params.body))
}


