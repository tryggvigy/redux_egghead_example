import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

export default function configureStore(reducer, initialState) {
  const finalCreateStore = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(reducer, initialState);

  return store;
}
