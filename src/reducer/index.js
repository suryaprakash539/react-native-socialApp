import {combineReducers} from 'redux';
import postReducer from './post';
import authReducer from './auth';

export default combineReducers({
  auth: authReducer,
  post: postReducer,
});
