import { combineReducers } from 'redux';

import { getOffices } from './about';
import { getMembers } from './members';
import { getProjects } from './projects';

const rootReducer = combineReducers({
  getOffices,
  getMembers,
  getProjects
});

export default rootReducer;