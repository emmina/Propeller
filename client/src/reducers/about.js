import { constants } from '../constants';

const initialState = {};

function getOffices(state = initialState, action) {
    switch (action.type) {
        case constants.GETOFFICES_REQUEST:
            return {
                offices: action.offices
            };
        case constants.GETOFFICES_SUCCESS:
            return {
                offices: action.offices
            };
        case constants.GETOFFICES_FAILURE:
            return {};
        default:
            return state
    }
}

export {
    getOffices,
}