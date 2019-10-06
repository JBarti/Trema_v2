import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import './index.css';
import App from './pages/test/App';
import Home from './pages/home/home';
import News from './pages/news/news';
import AboutUs from './pages/aboutUs/aboutUs';


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path='/test' component={App} />
      <Route path='/novosti' component={News} />
      <Route path='/aboutUs' component={AboutUs} />
      <Route exact path='' component={Home} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
