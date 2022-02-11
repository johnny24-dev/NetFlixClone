import { all } from 'redux-saga/effects';
import authenSaga from './authenSaga'
import moviesSaga from './moviesSaga';
import searchSaga from './searchSaga';
import accountSaga from './accountSaga';
export default function* rootSaga() {
    yield all([
    /** 01 */ ...authenSaga,
    /** 02 */ ...moviesSaga,
    /** 03 */ ...searchSaga,
    /** 04 */ ...accountSaga,
    
    ]);
}