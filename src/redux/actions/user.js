import { LOGIN, SIGN_UP, LOGOUT } from './contansts';

/**
 *
 * @param {} data
 * @returns
 */
export function loginAction(body, resolve, reject) {
  return {
    type: LOGIN,
    body,
    resolve,
    reject
  };
}

export function signUpAction(body, resolve, reject) {
  return {
    type: SIGN_UP,
    body,
    resolve,
    reject
  };
}

export function logoutAction(resolve, reject) {
  return {
    type: LOGOUT,
    resolve,
    reject
  };
}
