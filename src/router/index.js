import React, { Component } from "react";
import { HashRouter, Route,Switch } from "react-router-dom";
import Login from "../index/index";
import News from "../index/News/News";
export default class Router extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={News} />
        </Switch>
      </HashRouter>
    );
  }
}
