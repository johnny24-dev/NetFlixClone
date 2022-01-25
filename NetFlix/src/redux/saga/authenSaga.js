import { takeLatest, call, put, select, } from "redux-saga/effects";
import { createToken, validateAccount,  } from "../../api/Request";
import { navigate } from "../../navbar/rootNavigation";
import { ACTIONS, TYPES } from "../action/authenAction";
import {showAlert, TYPE} from '../../components/Alert'

export default [
    takeLatest(TYPES.TOKEN_REQUEST, createRequestToken),
    takeLatest(TYPES.LOGIN_REQUEST,login)
]

function* createRequestToken(action) {
    try {
        const { error, data } = yield call(createToken, action.payload);
        yield put(ACTIONS.tokenSuccess(data))
        navigate('Login')
    } catch (error) {
        console.log("🚀 ~ file: authenSaga.js ~ line 15 ~ function*createRequestToken ~ error", error)

    }
}

function* login(action) {
    console.log("🚀 ~ file: authenSaga.js ~ line 21 ~ function*login ~ action", action)
    try {
        const {error, data} = yield call(validateAccount,action.payload)
        console.log("🚀 ~ file: authenSaga.js ~ line 22 ~ function*login ~ validate", data)
        yield put(ACTIONS.loginSuccess(data))
        if(!data.success){
            showAlert(TYPE.ERROR,'Sai tài khoản hoặc mật khẩu!')
        }
    } catch (error) {
    console.log("🚀 ~ file: authenSaga.js ~ line 23 ~ function*login ~ error", error)
        
    }
}