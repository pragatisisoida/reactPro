import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
// import fetchMiddleware from '../middlewares/fetchMiddleware';
import rootReducer from '../reducers/index';

// let middleware = [fetchMiddleware];

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
  );
export default store;