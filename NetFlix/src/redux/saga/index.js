import { all } from 'redux-saga/effects';
import authenSaga from './authenSaga'

export default function* rootSaga() {
    yield all([
    /** 01 */ ...authenSaga,
    
    ]);
}