import {
  SIGNUP, LOGIN,
} from '../actions/ActionTypes';

const initialState = {
  user: [],
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return { ...state, user: action.payload };
    case LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
export default authReducer;
