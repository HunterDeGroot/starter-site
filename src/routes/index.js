import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../components/Home';
import Hello from '../components/Hello';
import Counter from '../components/Counter';
import PageNotFound from '../components/utilities/PageNotFound';
import NavBar from '../components/utilities/NavBar';

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/hello" component={Hello} />
      <Route path="/counter" component={Counter} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
);

export default routes;
