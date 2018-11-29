import {
  CREATE_ENTRY, FETCH_ENTRIES, SINGLE_ENTRY, UPDATE_ENTRY, 
} from '../actions/ActionTypes';

const initialState = {
  entry: [],
  entries: [],
};
const entryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ENTRY:
      return { ...state, entry: action.payload };
    case FETCH_ENTRIES:
      return { ...state, entries: action.payload };
    case SINGLE_ENTRY:
      return { ...state, entry: action.payload };
    case UPDATE_ENTRY:
      return { ...state, entry: action.payload };
    default:
      return state;
  }
};
export default entryReducer;
