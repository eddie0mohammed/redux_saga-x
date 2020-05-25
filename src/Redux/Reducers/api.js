
import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    data: []
}

const apiReducer = (state = initialState, action) => {

    switch(action.type){

        case (actionTypes.RECEIVE_DATA):
            return {
                ...state,
                data: action.data
            }

        default: 
            return state
    }
}

export default apiReducer;