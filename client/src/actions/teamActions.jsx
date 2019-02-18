import { constants } from '../constants';
import { membersService } from '../services';

function getMembers() {
    return dispatch => {
        dispatch(request());

        membersService.getMembers()
            .then(
                members => dispatch(success(members)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: constants.GETMEMBERS_REQUEST } }
    function success(members) { return { type: constants.GETMEMBERS_SUCCESS, members } }
    function failure(error) { return { type: constants.GETMEMBERS_FAILURE, error } }
}

export const teamActions = {
    getMembers
};