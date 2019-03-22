import React from 'react';
import { withProps, compose } from 'recompose';
import { forwardRef, setRef } from 'forward-ref';

class HOCDemo extends React.Component {
  render() {
    return (
      <div>HOCDemo</div>
    )
  }
}

export default forwardRef(
  withProps({name: 'Sitong Lu'})(
    setRef(HOCDemo)
  )
);
