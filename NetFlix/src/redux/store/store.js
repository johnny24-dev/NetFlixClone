import { createStore, applyMiddleware } from 'redux';
import allReducers from '../reducer';
//Redux saga
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga';
//Middleware
const sagaMiddleware = createSagaMiddleware();
//Từ applyMiddleware vào Reducers thì tạo một store, sagaMiddleware nằm giữa Action và Reducers.
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default store;