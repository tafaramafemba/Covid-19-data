import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import country from './home/home';

const reducer = combineReducers({
  country,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;