import * as actionTypes from '../actions/types';

const channel = (state = null, action) => {
    switch(action.type) {
        case actionTypes.SET_CURRENT_CHANNAL:
            return {...action.payload, isPrivateChannel: false}
        case actionTypes.SET_CURRENT_DIRECT_USER:
            return {...action.payload, isPrivateChannel: true}
        default:
            return state;
    }
}

export default channel;