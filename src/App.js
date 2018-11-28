import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Landingpage from './container/landingpage';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <Landingpage />
      </div>
      </Provider>
    );
  }
}

export default App;
