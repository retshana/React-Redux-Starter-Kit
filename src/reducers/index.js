import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import app from './app';
import currency from './currency';

const rootReducer = combineReducers({
  app,
  currency,
  form: formReducer,
});

export default rootReducer;
