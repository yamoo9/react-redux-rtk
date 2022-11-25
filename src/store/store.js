import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './rootReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

const store = createStore(rootReducer, devToolsEnhancer());

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
