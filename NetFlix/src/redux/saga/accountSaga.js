import { takeLatest, call, put, select, } from "redux-saga/effects";
import { getAccountDetail } from "../../api/Request";
import { navigate, navigateReplace } from "../../navbar/rootNavigation";
import { showAlert, TYPE } from '../../components/Alert'
import { getData, storeData } from "../../utils/asynstorage";
import KEY_ASYNStORAGE from "../../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActionsAccount, TypeAccout } from "../action/accountAction";


export default [
    takeLatest(TypeAccout.GET_DETAIL,getDetail)
]

function* getDetail(action){
    try {
        const {error,data} = yield call(getAccountDetail,action.payload);
        if(!error){
            yield put(ActionsAccount.getDetailSuccess(data))
        }else{
            showAlert(TYPE.ERROR,'ERROR','Lấy dữ liệu thất bại!')
        }
    } catch (error) {
    console.log("🚀 ~ file: accountSaga.js ~ line 24 ~ function*getDetail ~ error", error)
    }
}