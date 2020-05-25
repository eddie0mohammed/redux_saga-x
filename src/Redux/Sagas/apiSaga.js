
import { put, takeEvery, call} from 'redux-saga/effects';
import axios from "axios";

import * as actionTypes from '../Actions/ActionTypes';


//fetch data function
const fetchData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return res.data;
}

//worker
function* fetchDataSaga(action){
console.log(action);
    try{

        const data = yield call(fetchData);
        console.log(data);

        yield put({type: actionTypes.RECEIVE_DATA, data: data});

    }catch(err){
        console.log(err);
        // yield put({type: actionTypes.ERROR})
    }
}




//watcher
function* watchFetchDataSaga(){

    yield takeEvery(actionTypes.REQUEST_DATA, fetchDataSaga);
}

export default watchFetchDataSaga;