import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import CreateEntries from '../component/CreateEntry';
import RegistrationForm from '../component/Register';
import LoginForm from '../component/login';
import Main from '../component/Main';
import UpdateEntry from '../component/UpdateEntry';
import GetEntries from '../component/GetEntries';
import ViewEntry from '../component/SingleEntry';
import store from '../store';


Enzyme.configure({ adapter: new Adapter() });

describe('entries components', () => {
  const mockStore = configureMockStore();
  beforeEach(() => {
    mockStore({});
  });
  const getEvent = () => ({
    preventDefault: jest.fn(),
  });

  it('should test get all entries without crashing', () => {
    mount(<Router><GetEntries store={store} /></Router>);
  });
  it('should test create entry without crashing', () => {
    mount(<Router><CreateEntries store={store} /></Router>);
  });
  it('should test update entry without crashing', () => {
    const props = {
      entry: {
        results: { title: 'man' },
      },
    };
    mount(<Router><UpdateEntry store={store} match={{ params: { id: 2 } }} {...props} /></Router>);
  });
  it('should test view entry without crashing', () => {
    mount(<Router><ViewEntry store={store} match={{ params: { id: 2 } }} /></Router>);
  });
  it('should test register user without crashing', () => {
    const props = {
      user: {
        user: { token: 'kjbhvgftryfuv' },
      },
      loginUser: jest.fn(),
      LoggedInUser: jest.fn(),
    };
    const component = shallow(<RegistrationForm store={store} {...props} />).dive().instance();
    component.change({ target: { value: 'firstname' } });
    component.handleSubmit({ preventDefault() {} });
  });
  it('should test login user without crashing', () => {
    const component = shallow(<LoginForm store={store} />).dive().instance();
    component.Change({ target: { value: 'firstname' } });
    component.handleSubmit({ preventDefault() {} });
  });
  it('should test main page create entry without crashing', () => {
    const props = {
      action_to_main: 'create_entry',
      id: 1,
      CreateEntries: jest.fn(),
      UpdateEntries: jest.fn(),
    };
    const component = shallow(<Main store={store} {...props} />).dive().instance();
    component.onchange({ target: { value: 'title' } });
    component.handleChange({ target: { value: 'body' } });
    component.onhandleSubmit({ preventDefault() {} });
  });
  it('should test main page update entry without crashing', () => {
    const props = {
      action_to_main: 'update_entry',
      id: 2,
      UpdateEntries: jest.fn(),
    };
    const component = shallow(<Main store={store} {...props} />).dive().instance();
    component.onchange({ target: { value: 'title1' } });
    component.handleChange({ target: { value: 'body1' } });
    component.onhandleSubmit({ preventDefault() {} });
  });
});
