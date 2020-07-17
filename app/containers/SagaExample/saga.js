// import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { call, put, select, takeLatest } from 'redux-saga/effects';

import FETCH_USER from './constants';
// Individual exports for testing
export function* sagaExampleSaga() {
  // See example in containers/HomePage/saga.js
}
export function* fetchUser() {
  console.log('dido dido');
  yield put({ type: FETCH_USER, user_id: 1 });
}

export default function* saga() {
  yield takeLatest(FETCH_USER, fetchUser);
}