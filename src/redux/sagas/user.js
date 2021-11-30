import { all, call, put, takeLatest } from 'redux-saga/effects';
import { getUserInfo, login, logout, signUp } from '../../utils/ApiManage';
import authHelpers from '../../utils/AuthHelpers';
import {
  LOGIN,
  LOGIN_FAILURE,
  LOGIN_SUCCESSFUL,
  LOGOUT,
  LOGOUT_FAILURE,
  LOGOUT_SUCCESSFUL,
  SIGN_UP,
  SIGN_UP_FAILURE
} from '../actions/contansts';

function* loginSaga(action) {
  const { body, resolve, reject } = action;

  try {
    const responseLogin = yield call(login, body);
    yield authHelpers.storeAccessToken(responseLogin.access_token);
    const responseUserInfo = yield call(getUserInfo);
    yield authHelpers.storeUserInfo(responseUserInfo);
    const userInfo = responseUserInfo;

    yield put({ type: LOGIN_SUCCESSFUL, userInfo });
    resolve && resolve(userInfo);
  } catch (err) {
    yield put({ type: LOGIN_FAILURE });
    reject && reject(err);
  }
}

function* signUpSaga(action) {
  const { body, resolve, reject } = action;

  try {
    const responseLogin = yield call(signUp, body);
    yield authHelpers.storeAccessToken(responseLogin.access_token);
    const responseUserInfo = yield call(getUserInfo);
    yield authHelpers.storeUserInfo(responseUserInfo);
    const userInfo = responseUserInfo;

    yield put({ type: LOGIN_SUCCESSFUL, userInfo });
    resolve && resolve(userInfo);
  } catch (err) {
    yield put({ type: SIGN_UP_FAILURE });
    reject && reject(err);
  }
}

function* logoutSaga(action) {
  const { resolve, reject } = action;

  try {
    yield call(logout);
    yield authHelpers.clearStorage();

    yield put({ type: LOGOUT_SUCCESSFUL });
    resolve && resolve();
  } catch (err) {
    yield put({ type: LOGOUT_FAILURE });
    reject && reject(err);
  }
}

export default function* root() {
  yield all([takeLatest(LOGIN, loginSaga)]);
  yield all([takeLatest(SIGN_UP, signUpSaga)]);
  yield all([takeLatest(LOGOUT, logoutSaga)]);
}
