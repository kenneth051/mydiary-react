
import {
  SIGNUP, LOGIN,
} from './ActionTypes';


const baseurl = 'http://localhost:5000';

// const myHeaders = new Headers({
//   Accept: 'application/json',
//   'Content-type': 'application/json',
//   Token: localStorage.getItem('token'),
// });

export const signUpUser = userData => dispatch => fetch(`${baseurl}/API/v1/auth/user/signup`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  body: JSON.stringify(userData),
})
  .then(res => res.json())
  .then((data) => {
    dispatch({
      type: SIGNUP,
      payload: data,
    });
  });

export const loginUser = loginData => dispatch => fetch(`${baseurl}/API/v1/auth/users/login`, {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
  },
  body: JSON.stringify(loginData),
})
  .then(res => res.json())
  .then((data) => {
    dispatch({
      type: LOGIN,
      payload: data,
    });
  });
