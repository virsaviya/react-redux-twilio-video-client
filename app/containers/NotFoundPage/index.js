/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Wrapper } from './styled';


export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    // eslint-disable-next-line react/no-unescaped-entities
    return (
      <Wrapper>
        <h1>It's not you.  It's us.</h1>
        <p>404 - page not found.</p>
      </Wrapper>
    );
  }
}
