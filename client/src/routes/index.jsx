import React from 'react';
import { Route, IndexRoute } from 'react-router';
import BaseLayout from '../layouts/BaseLayout';
import HomeView from '../views/HomeView';

const routes = (
  <Route path="/" component={ BaseLayout }>
    <IndexRoute component={ HomeView } />
  </Route>
);

export default routes;
