/* @flow weak */

import merge from 'lodash/object/merge';


// https://github.com/rackt/redux/blob/master/examples/real-world/reducers/index.js
export default function reducer(state = { users: {}, repos: {} }, action) {
  if (action.response && action.response.entities) {
    return merge({}, state, action.response.entities)
  }

  return state
}
