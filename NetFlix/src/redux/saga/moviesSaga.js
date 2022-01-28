import { takeLatest, call, put, select, } from "redux-saga/effects";
import { showAlert, TYPE } from '../../components/Alert'
import { getData, storeData } from "../../utils/asynstorage";
import KEY_ASYNStORAGE from "../../utils/Constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TYPES,ACTIONS} from '../action/moviesAction'
import { navigate, navigateReplace } from "../../navbar/rootNavigation";
import {getLatestMovie,
    getListMovieTrending,
    getListMovieUpComing,
    getListPopilarMovie,
    getMovieCategory,
    getMovieDetail} from '../../api/Request'
import * as BASE from '../../api/base'

export default [
    takeLatest(TYPES.GET_LIST_MOVIE_CATEGORY,getMoviesCategory),
]

function* getMoviesCategory(){
    const params = {
        api_key:BASE.API_KEY,
        language:'vi'
    }

    try {
        const {error,data} = yield call(getMovieCategory,params)
        if(data){
            yield put(ACTIONS.getListMoviesCategorySuccess(data.genres))
        }
    } catch (error) {
        
    }
}
