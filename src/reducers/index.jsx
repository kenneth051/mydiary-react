import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import entryReducer from './EntryReducer';

export default combineReducers({
  users: authReducer,
  entries: entryReducer,
});
