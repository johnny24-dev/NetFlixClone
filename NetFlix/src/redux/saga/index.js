import { all } from 'redux-saga/effects';
import authenSaga from './authenSaga'
import moviesSaga from './moviesSaga';
export default function* rootSaga() {
    yield all([
    /** 01 */ ...authenSaga,
    /** 02 */ ...moviesSaga,
    
    ]);
}