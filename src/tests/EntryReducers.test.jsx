import {
  SIGNUP, LOGIN, CREATE_ENTRY, FETCH_ENTRIES, SINGLE_ENTRY, UPDATE_ENTRY,
} from '../actions/ActionTypes';
import entryReducer from '../reducers/EntryReducer';
import authReducer from '../reducers/AuthReducer';

it('sign up entry reducer ', () => {
    authReducer(
    {},
    {
      type: SIGNUP,
    },
  );
});
it('login entry reducer', () => {
    authReducer(
    {},
    {
      type: LOGIN,
    },
  );
});
it('create entry reducer', () => {
  entryReducer(
    {},
    {
      type: CREATE_ENTRY,
    },
  );
});
it('fetch entries reducer', () => {
  entryReducer(
    {},
    {
      type: FETCH_ENTRIES,
    },
  );
});
it('fetch single entry reducer', () => {
  entryReducer(
    {},
    {
      type: SINGLE_ENTRY,
    },
  );
});
it('update entry reducer', () => {
  entryReducer(
    {},
    {
      type: UPDATE_ENTRY,
    },
  );
});
