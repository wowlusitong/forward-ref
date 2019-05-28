import React from 'react';
import { forwardRef, setRef } from 'forward-ref';

@forwardRef
export default class DecoratorDemo extends React.Component {
  render() {
    return (
      <div ref={this.props.forwardRef}>DecoratorDemo</div>
    )
  }
}
