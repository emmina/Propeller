import { constants } from '../constants';
import { projectsService } from '../services';

function getProjects() {
    return dispatch => {
        dispatch(request());
        console.log('AKCIJA')

        projectsService.getProjects()
            .then(
                projects => dispatch(success(projects)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: constants.GETPROJECTS_REQUEST } }
    function success(projects) { return { type: constants.GETPROJECTS_SUCCESS, projects } }
    function failure(error) { return { type: constants.GETPROJECTS_FAILURE, error } }
}

export const projectsActions = {
    getProjects
};