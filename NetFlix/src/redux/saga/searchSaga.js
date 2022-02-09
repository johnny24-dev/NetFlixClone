import {ActionsSearch, TypeSearch} from '../action/searchAction'
import {getListTvSearch, getListMovieSearch} from '../../api/Request'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { showAlert } from '../../components/Alert'
import { TYPE } from '../../components/Alert/constants'
export default [
    takeLatest(TypeSearch.SEARCH,getListMovieAndTvSearch),
]


function* getListMovieAndTvSearch(action){
    try {
        const [listMovies, listTvs] = yield all([
       
            call(getListMovieSearch,action.payload),
            call(getListTvSearch,action.payload)
        ])
        if(listMovies && listTvs) {
            const listData = [...listMovies.data.results,...listTvs.data.results]
            yield put(ActionsSearch.searchSuccess(listData))
        }else{
            showAlert(TYPE.error,'Error','Lấy dữ liệu thất bại')
        }
    } catch (error) {
    console.log("🚀 ~ file: searchSaga.js ~ line 20 ~ function*getListMovieAndTvSearch ~ error", error)
        
    }
}