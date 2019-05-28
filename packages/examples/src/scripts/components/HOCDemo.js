import React from 'react';
import { forwardRef, setRef } from 'forward-ref';

class HOCDemo extends React.Component {
  render() {
    return (
      <div ref={this.props.forwardRef}>HOCDemo</div>
    )
  }
}

export default forwardRef(HOCDemo);
