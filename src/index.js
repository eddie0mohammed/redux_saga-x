import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';

import createSagaMiddleware from 'redux-saga';
// import watchHelloSaga from './Redux/Sagas/helloSaga'; 
// import watchFetchDataSaga from './Redux/Sagas/apiSaga';
import rootSaga from './Redux/Sagas/rootSaga';

import rootReducer from './Redux/Reducers/RootReducer';


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(...middleware)
));


// sagaMiddleware.run(watchHelloSaga);
// sagaMiddleware.run(watchFetchDataSaga);
sagaMiddleware.run(rootSaga);

ReactDOM.render(

<Provider store={store}>
    <App />
</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
