import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import reducer from '../reducers';

//reducer

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, logger];

const store = createStore(reducer, applyMiddleware(...middleware));

export { store, sagaMiddleware };
