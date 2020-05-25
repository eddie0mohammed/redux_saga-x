
import * as actionTypes from '../Actions/ActionTypes';


const initialState = {
    hello: ''
}


const helloReducer = (state = initialState, action) => {

    switch (action.type){

        case (actionTypes.RECEIVE_HELLO_WORLD):
            return {
                ...state,
                hello: action.text
            }
        default:
            return state;
    }
}

export default helloReducer;