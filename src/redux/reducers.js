/**
 * Created by Tung Le on 22/11/21.
 */

import { combineReducers } from 'redux';
import userReducer from './reducers/user';

export default combineReducers({
  user: userReducer
});
