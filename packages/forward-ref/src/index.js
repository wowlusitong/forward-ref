import React from 'react';

export function forwardRef(Component) {
  return React.forwardRef((props, ref) =>
    <Component {...props} forwardRef={ref} />
  )
}

export function setRef(Component) {
  return ({forwardRef, ...props}) => <Component {...props} ref={forwardRef} />;
}

export default {
  forwardRef,
  setRef
}
