/* @flow weak */

import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';

import pagination from './pagination';
import entities from './entities';
import errorMessage from './errorMessage';


const rootReducer = combineReducers({
  entities,
  pagination,
  errorMessage,
  router
});
