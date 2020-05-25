
import {all, fork} from 'redux-saga/effects';


import watchFetchDataSaga from './apiSaga';
import watchHelloSaga from './helloSaga';


export default function* rootSaga(){

    yield all([
        fork(watchFetchDataSaga),
        fork(watchHelloSaga)
    ])
};

