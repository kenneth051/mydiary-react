import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureStore from 'redux-mock-store';
import {
  fetchEntries, singleEntry, UpdateEntries, loginUser, signUpUser,
} from '../actions/AuthAction';

const baseurl = 'https://infinite-crag-58351.herokuapp.com';
let store;
const mockStore = configureStore([thunk]);

describe('article actions', () => {
  beforeEach(() => {
    store = mockStore({
      articles: [],
      article: [],
      errors: [],
    });
  });

  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('get all entries', () => {
    const responseData = {
      payload: [],
    };
    fetchMock.get(`${baseurl}/API/v1/entries`, responseData);

    const expectedActions = [
      { payload: { payload: [] }, type: 'FETCH_ENTRIES' },
    ];
    store.dispatch(fetchEntries()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('get single entries', () => {
    const responseData = {
      payload: [],
    };
    fetchMock.get(`${baseurl}/API/v1/entries/1`, responseData);

    const expectedActions = [
      { payload: { payload: [] }, type: 'SINGLE_ENTRY' },
    ];
    store.dispatch(singleEntry(1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('update an entry', () => {
    const data = {
      title: 'yyyyy',
      body: 'yyyyy',
    };
    const responseData = {
      payload: [],
    };
    fetchMock.put(`${baseurl}/API/v1/entries/1`, responseData);

    const expectedActions = [
      { payload: { payload: [] }, type: 'UPDATE_ENTRY' },
    ];
    store.dispatch(UpdateEntries(data, 1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it('sign up user', () => {
    const data = {
      username: 'title89',
      lastname: 'body',
      firstname: 'title',
      password: 'body1234567',
      gender: 'female',
      email: 'body@body.com',
    };
    const responseData = {
      payload: [],
    };
    fetchMock.post(`${baseurl}/API/v1/auth/user/signup`, responseData);

    const expectedActions = [
      { payload: { payload: [] }, type: 'SIGNUP' },
    ];
    store.dispatch(signUpUser(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('login user', () => {
    const data = {
      username: 'title89',
      password: 'body1234567',
    };
    const responseData = {
      payload: [],
    };
    fetchMock.post(`${baseurl}/API/v1/auth/users/login`, responseData);

    const expectedActions = [
      { payload: { payload: [] }, type: 'LOGIN' },
    ];
    store.dispatch(loginUser(data)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
