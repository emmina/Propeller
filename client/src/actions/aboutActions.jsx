import { constants } from '../constants';
import { aboutService } from '../services';

function getOffices() {
    return dispatch => {
        dispatch(request());

        aboutService.getOffices()
            .then(
                offices => dispatch(success(offices)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: constants.GETOFFICES_REQUEST } }
    function success(offices) { return { type: constants.GETOFFICES_SUCCESS, offices } }
    function failure(error) { return { type: constants.GETOFFICES_FAILURE, error } }
}

export const aboutActions = {
    getOffices
};