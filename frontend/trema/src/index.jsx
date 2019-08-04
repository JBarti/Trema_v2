import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './pages/test/App';
import Home from './pages/home/home';
import News from './pages/news/news';

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path='/test' component={App} />
      <Route exact path='/novosti' component={News} />
      <Route exact path='' component={Home} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
