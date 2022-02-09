import { all } from 'redux-saga/effects';
import authenSaga from './authenSaga'
import moviesSaga from './moviesSaga';
import searchSaga from './searchSaga';
export default function* rootSaga() {
    yield all([
    /** 01 */ ...authenSaga,
    /** 02 */ ...moviesSaga,
    /** 03 */ ...searchSaga,
    
    ]);
}