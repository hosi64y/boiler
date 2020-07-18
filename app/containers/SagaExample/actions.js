/*
 *
 * SagaExample actions
 *
 */

import { DEFAULT_ACTION, FETCH_USER } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function fetchUserAction(id) {
  return {
    type: FETCH_USER,
    user_id: id,
  };
}
