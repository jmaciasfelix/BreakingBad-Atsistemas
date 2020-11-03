//redux
import { createStore as createStoreRedux, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
//reducers
import { reducers } from 'reducers';
//redux-saga
import createSagaMiddleware from 'redux-saga';
import sagas from 'sagas';

export const createStore = () => {
  const composeEnhancers = composeWithDevTools({});
  const sagaMiddleware = createSagaMiddleware();
  const store = createStoreRedux(
    reducers,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(sagas);
  return store;
};
