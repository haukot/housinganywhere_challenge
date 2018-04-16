import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// import root from './Root';

export default combineReducers({
  // root,
  form: formReducer,
});
