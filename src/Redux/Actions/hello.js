
import * as actionTypes from './ActionTypes';


export const requestHelloWorld = () => {
    return {
        type: actionTypes.REQUEST_HELLO_WORLD
    }
}


// export const receiveHelloWorld = (text) => {
//     return {
//         type: actionTypes.RECEIVE_HELLO_WORLD,
//         text: text
//     }
// }