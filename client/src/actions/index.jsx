import { createAction } from 'redux-act';

import { aboutActions } from './aboutActions';
import { projectsActions } from './projectsActions';
import { teamActions } from './teamActions';

export { aboutActions ,projectsActions, teamActions };

export const setLocale = createAction('SET_LOCALE');