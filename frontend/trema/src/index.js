import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/test/App";
import Home from "./pages/home/Home";
import News from "./pages/news/News"
import { BrowserRouter, Route, Switch } from "react-router-dom";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/test" component={App} />
      <Route exact path="/novosti" component={News} />
      <Route exact path="" component={Home} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
