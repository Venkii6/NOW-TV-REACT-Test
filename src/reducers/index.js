import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import messageReducer from './messageReducer';

export const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  messagesData : messageReducer      
});
