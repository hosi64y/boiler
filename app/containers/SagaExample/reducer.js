/*
 *
 * SagaExample reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, FETCH_USER_SUCSESS } from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const sagaExampleReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case FETCH_USER_SUCSESS:
        draft.user = action.user;
        draft.user_id = action.user_id;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default sagaExampleReducer;
