/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

export default function NotFound() {
  return (
    <h1>
      <FormattedMessage {...messages.header} />
<<<<<<< HEAD
      این صفحه برای شاخه ی مستر می باشد
      <span>hi</span>
=======
      پیدا نشد
>>>>>>> b97eda8e66d9710c0c3e80999a858df6b1a71506
    </h1>
  );
}
