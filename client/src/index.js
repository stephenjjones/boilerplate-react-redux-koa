/* @flow */
import React from 'react';
import { render } from 'react-dom';

import configureStore from 'store/configureStore';
import Root from 'views/app/containers/Root';

const store = configureStore();

render((
  <Root store={store} />
), document.getElementById('root'));
