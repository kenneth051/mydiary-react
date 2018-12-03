import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store';
import ProtectedRoute from './common/AuthToken';
import Landingpage from './container/landingpage';
import CreateEntries from './component/CreateEntry';
import UpdateEntry from './component/UpdateEntry';
import GetEntries from './component/GetEntries';
import ViewEntry from './component/SingleEntry';
import notFound from './component/Notfound';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <ToastContainer />
          <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landingpage} />
            <ProtectedRoute exact path="/createEntry" component={CreateEntries} />
            <ProtectedRoute exact path="/entry/:id/edit" component={UpdateEntry} />
            <ProtectedRoute exact path="/allEntries" component={GetEntries} />
            <ProtectedRoute exact path="/entry/:id" component={ViewEntry} />
            <Route component={notFound} />
          </Switch>
        </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
