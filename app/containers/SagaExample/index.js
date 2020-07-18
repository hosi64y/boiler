/**
 *
 * SagaExample
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectSagaExample from './selectors';
import reducer from './reducer';
import saga from './saga';
import { fetchUserAction } from './actions';
export function SagaExample({ dispatch, sagaExample }) {
  useInjectReducer({ key: 'sagaExample', reducer });
  useInjectSaga({ key: 'sagaExample', saga });
  console.log(sagaExample)
  return (
    <>
      <div>Saga Page Wellcome!</div>
      <button onClick={() => dispatch(fetchUserAction(2))}>کلیک ساگا</button>
      <pre>
        {JSON.stringify(sagaExample, undefined, 5)}
      </pre>

    </>)



}

SagaExample.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  sagaExample: makeSelectSagaExample(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SagaExample);
