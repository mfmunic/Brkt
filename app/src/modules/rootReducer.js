import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import appReducer from './appReducer';
import createBracketReducer from './reducers/createBracketPageReducers';

export default combineReducers({
  routing: routerReducer,
  app: appReducer,
  createBracket: createBracketReducer
});
