/* eslint-disable prefer-template */
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import App from 'pages/app';
import ErrorPage from 'pages/404';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={App} />
        <Route exact path={process.env.PUBLIC_URL + '/hi'} component={ErrorPage} />
        <Redirect to={`${process.env.PUBLIC_URL}/404`} />
      </Switch>
    );
  }
}

export default Main;
