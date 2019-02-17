import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './helpers/store';

import Router from './helpers/Router';

import './App.css';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={Router} />
        </BrowserRouter>
    </Provider>
    )
  }
}

export default App;
