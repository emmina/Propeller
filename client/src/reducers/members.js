import { constants } from '../constants';

const initialState = {};

function getMembers(state = initialState, action) {
    switch (action.type) {
        case constants.GETMEMBERS_REQUEST:
            return {
                result: action.members
            };
        case constants.GETMEMBERS_SUCCESS:
            return {
                result: action.members
            };
        case constants.GETMEMBERS_FAILURE:
            return {};
        default:
            return state
    }
}

export {
    getMembers
}