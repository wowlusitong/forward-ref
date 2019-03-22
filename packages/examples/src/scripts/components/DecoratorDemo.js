import React from 'react';
import { withProps } from 'recompose';
import { forwardRef, setRef } from 'forward-ref';

@forwardRef
@withProps({name: 'Sitong Lu'})
@setRef
export default class DecoratorDemo extends React.Component {
  render() {
    return (
      <div>DecoratorDemo</div>
    )
  }
}
