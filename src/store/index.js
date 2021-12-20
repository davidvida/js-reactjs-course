import { createStore } from 'redux';
import rootReducer from '../reducers';
import { applyMiddleware, compose } from 'redux';
// app middlewares
import { apiMiddleware } from '../middlewares/api';
import { tasksMiddleware } from '../middlewares/tasks';

const coreMiddlewares = [
  apiMiddleware
];

const featureMiddlewares = [
  tasksMiddleware
];

const enhancer = compose(applyMiddleware(...featureMiddlewares, ...coreMiddlewares));

function configureStore() {
  const store = createStore(rootReducer, {}, enhancer);
  return store;
}

export default configureStore;
