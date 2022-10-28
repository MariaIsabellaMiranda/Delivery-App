import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';

export default function App() {
  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/costumer/products"> produtos</Route>
      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}
