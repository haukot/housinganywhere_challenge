import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'

import reducers from './reducers';
import rootSaga from './sagas'

export default initialState => {
  const devTools = typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
        ? window.devToolsExtension && window.devToolsExtension()
        : f => f
  const enhancers = compose(devTools);

  const sagaMiddleware = createSagaMiddleware()

  let createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
  const store = createStoreWithMiddleware(reducers, initialState, enhancers)

  sagaMiddleware.run(rootSaga);

  return store
}
