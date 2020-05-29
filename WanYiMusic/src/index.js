import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes/index'
import {Router,hashHistory } from 'react-router'
import {Provider } from 'react-redux'
import store from './store/index.ts'
ReactDOM.render((
  <Router store={store}   history={hashHistory} routes={routes}>
      <Provider ></Provider>
  </Router>
), document.getElementById('root'));

