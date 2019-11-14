import React, { Component } from 'react';
import { HashRouter, Route, Redirect } from 'react-router-dom';
import App from 'pages/app';
import ErrorPage from 'pages/404';

class Main extends Component {
  render() {
    return (
      <HashRouter basename='/'>
        <Route exact path='/' component={App} />
        <Route exact path='/404' component={ErrorPage} />
        <Redirect to="/404" />
      </HashRouter>
    );
  }
}

export default Main;
