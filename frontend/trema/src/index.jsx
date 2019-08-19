import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './pages/test/App';
import Home from './pages/home/Home';
import News from './pages/news/News';
import store from './store';

store.subscribe(() => {
  console.log('STORE CHANGED', store.getState());
});

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
