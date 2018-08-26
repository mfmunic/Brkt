import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import createBracketReducer from './reducers/createBracketPageReducers';
import adminBracketReducer from './reducers/adminBracketPageReducers';

export default combineReducers({
  routing: routerReducer,
  createBracket: createBracketReducer,
  brktsOwned: adminBracketReducer
});
