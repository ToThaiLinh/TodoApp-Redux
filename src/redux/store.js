import { legacy_createStore as createStore } from 'redux'

import { composeWithDevTools } from '@redux-devtools/extension';
import  rootReducer from './reducer';

const composeEnhancers = composeWithDevTools(
  // Specify here name, actionsDenylist, actionsCreators and other options
);
const store = createStore(
  rootReducer,
  composeEnhancers
);

export default store