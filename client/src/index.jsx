import React from 'react';
import ReactDOM from 'react-dom';
import Router, { Route } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import routes from './routes';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      { routes }
    </Router>
  </Provider>,
  document.getElementById('app')
);
