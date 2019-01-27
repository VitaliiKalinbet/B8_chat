import * as actionTypes from './types';

export const setCurrentChannel = channel => ({
    type: actionTypes.SET_CURRENT_CHANNAL,
    payload: channel
});

export const setCurrentDirectUser = directUser => ({
    type: actionTypes.SET_CURRENT_DIRECT_USER,
    payload: directUser
})