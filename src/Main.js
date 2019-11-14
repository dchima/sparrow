import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from 'pages/app';
import ErrorPage from 'pages/404';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={App} />
      </Switch>
    );
  }
}

export default Main;
