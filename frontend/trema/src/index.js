import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/test/App";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const routes = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/test" component={App} />
      <Route exact path="" component={Home} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));
