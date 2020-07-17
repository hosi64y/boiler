import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sagaExample state domain
 */

const selectSagaExampleDomain = state => state.sagaExample || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SagaExample
 */

const makeSelectSagaExample = () =>
  createSelector(
    selectSagaExampleDomain,
    substate => substate,
  );

export default makeSelectSagaExample;
export { selectSagaExampleDomain };
