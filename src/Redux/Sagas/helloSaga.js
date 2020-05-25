import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';

import * as actionTypes from '../Actions/ActionTypes';


//worker saga
function* helloSaga(action){
    // console.log(action)
    try{

        //do api call

        yield put({type: actionTypes.RECEIVE_HELLO_WORLD, text: 'HEYYYYY'});

    }catch(error){
        // yield put({type: actionTypes.ERROR})
    }

}



//watcher saga
function* watchHelloSaga(){
    yield takeEvery(actionTypes.REQUEST_HELLO_WORLD, helloSaga);
}

export default watchHelloSaga;