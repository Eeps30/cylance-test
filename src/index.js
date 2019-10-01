import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import Landing from './pages/landing-page/landing.component';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.getElementById('root')
);

serviceWorker.unregister();
