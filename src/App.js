import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import Landingpage from './container/landingpage';
import CreateEntries from './component/CreateEntry';
import UpdateEntry from './component/UpdateEntry';
import GetEntries from './component/GetEntries';
import ViewEntry from './component/SingleEntry';
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
            <Route exact path="/createEntry" component={CreateEntries} />
            <Route exact path="/entry/:id/edit" component={UpdateEntry} />
            <Route exact path="/allEntries" component={GetEntries} />
            <Route exact path="/entry/:id" component={ViewEntry} />
            <Route component={notFound} />
          </Switch>
        </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
