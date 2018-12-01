
import {
  SIGNUP, LOGIN, CREATE_ENTRY, FETCH_ENTRIES, SINGLE_ENTRY, UPDATE_ENTRY,
} from './ActionTypes';


const baseurl = 'https://infinite-crag-58351.herokuapp.com';
//const baseurl = 'http://localhost:5000';

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

export const CreateEntries = entryData => dispatch => fetch(`${baseurl}/API/v1/entries`, {
  method: 'POST',
  cache: 'no-cache',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  body: JSON.stringify(entryData),
})
  .then(res => res.json())
  .then((data) => {
    dispatch({
      type: CREATE_ENTRY,
      payload: data,
    });
  });

export const fetchEntries = () => dispatch => fetch(`${baseurl}/API/v1/entries`, {
  method: 'GET',
  cache: 'no-cache',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})
  .then(res => res.json())
  .then(data => dispatch({
    type: FETCH_ENTRIES,
    payload: data,
  }));

export const singleEntry = id => dispatch => fetch(`${baseurl}/API/v1/entries/${id}`, {
  method: 'GET',
  cache: 'no-cache',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
})
  .then((res) => {
    if (res.status === 404) {
      window.location = '/404';
    } else {
      return res.json();
    }
  })
  .then(data => dispatch({
    type: SINGLE_ENTRY,
    payload: data,
  }));

export const UpdateEntries = (updateData, id) => dispatch => fetch(`${baseurl}/API/v1/entries/${id}`, {
  method: 'PUT',
  cache: 'no-cache',
  headers: {
    Accept: 'application/json',
    'Content-type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  body: JSON.stringify(updateData),
})
  .then(res => res.json())
  .then((data) => {
    dispatch({
      type: UPDATE_ENTRY,
      payload: data,
    });
  });
