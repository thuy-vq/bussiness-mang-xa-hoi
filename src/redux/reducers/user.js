import {
  GET_USR_INFO_SUCCESSFUL,
  LOGIN_SUCCESSFUL,
  LOGOUT_SUCCESSFUL
} from '../actions/contansts';

const initialState = {
  userInfo: {}
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESSFUL:
      return {
        ...state,
        userInfo: action.userInfo
      };
    case GET_USR_INFO_SUCCESSFUL:
      return {
        ...state,
        userInfo: action.payload
      };
    case LOGOUT_SUCCESSFUL:
      return {
        ...state,
        userInfo: {}
      };
    default:
      return {
        ...state
      };
  }
}
