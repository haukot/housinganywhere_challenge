import { createStore, compose, applyMiddleware } from 'redux';
import reducers from './reducers';

export default initialState => createStore(reducers, initialState);//, applyMiddleware(thunk);
