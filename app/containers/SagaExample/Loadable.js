/**
 *
 * Asynchronously loads the component for SagaExample
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
