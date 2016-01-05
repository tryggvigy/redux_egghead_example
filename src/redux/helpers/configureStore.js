import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export default function configureStore(reducer, initialState) {
  const createStoreWithMiddleware = compose(
    applyMiddleware(
      thunk
  ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);
  const store = createStoreWithMiddleware(reducer, initialState);

  return store;
}
