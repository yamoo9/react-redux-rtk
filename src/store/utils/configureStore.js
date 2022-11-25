// 참고
// - https://redux.js.org/api/createstore
// - https://redux-toolkit.js.org/api/configureStore

import { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

function configureStore({ reducer, preloadedState, devTools }) {
  let rootReducer;

  if (typeof reducer === 'function') {
    rootReducer = reducer;
  }

  if (reducer && !Array.isArray(reducer) && typeof reducer) {
    rootReducer = combineReducers(reducer);
  }

  const enhancer = devTools ? devToolsEnhancer() : undefined;

  return createStore(rootReducer, preloadedState, enhancer);
}

export default configureStore;
