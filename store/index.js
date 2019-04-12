import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import apiMiddleware from '../apiLayer/apiMiddleware';
import rootReducer from '../reducers/index';

// let middleware = [fetchMiddleware];

const store = createStore(
    rootReducer,
    applyMiddleware(apiMiddleware,logger)
  );
export default store;