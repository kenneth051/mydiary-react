import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Landingpage from './container/landingpage';
import notFound from './component/Notfound';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route component={notFound} />
          </Switch>
        </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
