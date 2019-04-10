import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import fetchMiddleware from '../apiLayer/fetchMiddleware';
import rootReducer from '../reducers/index';

// let middleware = [fetchMiddleware];

const store = createStore(
    rootReducer,
    applyMiddleware(fetchMiddleware,logger)
  );
export default store;