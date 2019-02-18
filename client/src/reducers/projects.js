import { constants } from '../constants';

const initialState = {};

function getProjects(state = initialState, action) {
    switch (action.type) {
        case constants.GETPROJECTS_REQUEST:
            return {
                projects: action.projects
            };
        case constants.GETPROJECTS_SUCCESS:
            return {
                projects: action.projects
            };
        case constants.GETPROJECTS_FAILURE:
            return {};
        default:
            return state
    }
}

export {
    getProjects
}