import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import createBracketReducer from './reducers/createBracketReducer';
import adminBracketReducer from './reducers/adminBracketPageReducers';
import updateBracketReducer from './reducers/updateBracketReducer';

export default combineReducers({
  routing: routerReducer,
  createBracket: createBracketReducer,
  brktsOwned: adminBracketReducer,
  updateBracket: updateBracketReducer
});
