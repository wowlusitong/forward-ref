import React from 'react';
import { withProps } from 'recompose';
import { forwardRef, setRef } from 'forward-ref';

@forwardRef
@withProps({ name: 'Sitong Lu' })
export default class ForwardDemo extends React.Component {
  render() {
    return (
      <div ref={this.props.forwardRef}>DecoratorDemo</div>
    )
  }
}
