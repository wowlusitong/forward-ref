# forward-ref &middot; [![npm](https://img.shields.io/npm/v/forward-ref.svg?style=popout)](https://www.npmjs.com/package/forward-ref) [![min](https://badgen.net/bundlephobia/min/forward-ref)](https://bundlephobia.com/result?p=forward-ref)
Easy to use forwardRef in Class Component

[中文](https://github.com/wowlusitong/forward-ref/blob/master/README_CN.md)

# Installation
```sh
$ npm install forward-ref --save
# or
$ yarn add forward-ref
```

# Usage
## Decorator
[examples](https://github.com/wowlusitong/forward-ref/blob/master/packages/examples/src/scripts/components/DecoratorDemo.js)

```js
import React from 'react';
import { forwardRef } from 'forward-ref';

@forwardRef
export default class DecoratorDemo extends React.Component {
  return (
    <div ref={this.props.forwardRef}>
      XXXX
    </div>
  )
}

```

## HOC
[examples](https://github.com/wowlusitong/forward-ref/blob/master/packages/examples/src/scripts/components/HOCDemo.js)
```js
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

```
