
import * as actionTypes from './ActionTypes';


export const fetchData = () => {
    return {
        type: actionTypes.REQUEST_DATA,
        email: 'test'
    }
}