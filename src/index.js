import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, Link, NavLink, BrowserRouter as Router, Switch } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
const routing = (
  <Router>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
  </Router>
);
root.render(
routing, root
);
