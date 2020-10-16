import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import allReducer from './reducer';

let clientStore;
const logger = createLogger();

function initStore() {
  const middlewares = [reduxThunk];
  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }
  return createStore(allReducer, compose(applyMiddleware(...middlewares)));
}

export default function configureStore() {
  let store;
  if (!clientStore) {
    store = initStore();
  }
  return store;
}
