import { takeLatest, call, put, select, } from "redux-saga/effects";
import { createToken, validateAccount, createSessionId, deleteSessionId, getMovieCategory } from "../../api/Request";
import { navigate, navigateReplace } from "../../navbar/rootNavigation";
import { ACTIONS, TYPES } from "../action/authenAction";
import { showAlert, TYPE } from '../../components/Alert'
import { getData, storeData } from "../../utils/asynstorage";
import KEY_ASYNStORAGE from "../../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default [
    takeLatest(TYPES.TOKEN_REQUEST, createRequestToken),
    takeLatest(TYPES.LOGIN_REQUEST, login),
    takeLatest(TYPES.LOGOUT_REQUEST,logout)
]

function* createRequestToken(action) {
    console.log("🚀 ~ file: authenSaga.js ~ line 17 ~ function*createRequestToken ~ action", action)
    try {

        const sessionId = yield getData(KEY_ASYNStORAGE.SESSION_ID);
        
        if (sessionId) {
            yield put(ACTIONS.sessionIdSuccess({ session_id: sessionId }))
            navigateReplace('Tabs')
        } else {
            const { error, data } = yield call(createToken, action.payload);
            yield put(ACTIONS.tokenSuccess(data))
            navigateReplace('Login')
        }
    } catch (error) {
        console.log("🚀 ~ file: authenSaga.js ~ line 15 ~ function*createRequestToken ~ error", error)

    }
}

function* login(action) {
    try {
        const { error, data } = yield call(validateAccount, action.payload)
        console.log("🚀 ~ file: authenSaga.js ~ line 22 ~ function*login ~ validate", data)
        yield put(ACTIONS.loginSuccess(data))
        if (!data.success) {
            showAlert(TYPE.ERROR, 'Sai tài khoản hoặc mật khẩu!')
        } else {
            let params = {
                ...action.payload, body: {
                    request_token: action.payload.body.request_token
                }
            }
            const { error, data } = yield call(createSessionId, params)
            if (data.success) {
                storeData(KEY_ASYNStORAGE.SESSION_ID, data.session_id)
                yield put(ACTIONS.sessionIdSuccess(data))
                yield call(getMovieCategory,)
                navigateReplace('Tabs')
            } else {
                showAlert(TYPE.ERROR, 'ERROR', 'Có lỗi xảy ra!')
            }
        }
    } catch (error) {
        console.log("🚀 ~ file: authenSaga.js ~ line 23 ~ function*login ~ error", error)

    }
}

function* logout(action) {
    console.log("🚀 ~ file: authenSaga.js ~ line 64 ~ function*logout ~ action", action)
    try {
        const { error, data } = yield call(deleteSessionId, action.payload)
        console.log("🚀 ~ file: authenSaga.js ~ line 67 ~ function*logout ~ data", data)
        if (data.success) {
            yield AsyncStorage.clear()
            const { error, data } = yield call(createToken, action.payload.apiKey);
            yield put(ACTIONS.tokenSuccess(data))
            navigateReplace('Login')
        }else {
            showAlert(TYPE.ERROR, 'ERROR', 'Có lỗi xảy ra!')
        }
    } catch (error) {
    console.log("🚀 ~ file: authenSaga.js ~ line 74 ~ function*logout ~ error", error)
    }
}