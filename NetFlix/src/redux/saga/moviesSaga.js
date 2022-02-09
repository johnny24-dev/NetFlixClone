import { takeLatest, call, put, select, } from "redux-saga/effects";
import { TYPES, ACTIONS } from '../action/moviesAction'
import {
    getMovieCategory,
} from '../../api/Request'
import * as BASE from '../../api/base'

export default [
    takeLatest(TYPES.GET_LIST_MOVIE_CATEGORY, getMoviesCategory),
]

function* getMoviesCategory() {
    const params = {
        api_key: BASE.API_KEY,
        language: 'vi'
    }

    try {
        const { error, data } = yield call(getMovieCategory, params)
        if (data) {
            yield put(ACTIONS.getListMoviesCategorySuccess(data.genres))
        }
    } catch (error) {

    }
}
