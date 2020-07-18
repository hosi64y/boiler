import { take, call, put, select, takeLatest } from 'redux-saga/effects';
// import { call, put, select, takeLatest } from 'redux-saga/effects';

import { FETCH_USER, FETCH_USER_SUCSESS } from './constants';
// Individual exports for testing
export function* sagaExampleSaga() {
  // See example in containers/HomePage/saga.js
}
export function* fetchUser(obj) {
  // console.log(id)
  yield put({ type: FETCH_USER_SUCSESS, user: "ahmad", user_id: obj.user_id });
}

export default function* sagas() {

  yield takeLatest(FETCH_USER, fetchUser);
}