
import {combineReducers} from 'redux';

import helloReducer from './hello';
import apiReducer from './api';

const rootReducer = combineReducers({
    
    hello: helloReducer,
    api: apiReducer,

});

export default rootReducer;