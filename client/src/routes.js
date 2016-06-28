/* @flow */

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'views/app/containers/App';
import NoMatch from 'components/NoMatch';

export default (
  <Route path="/" component={App} />
);
