# forward-ref &middot; [![npm](https://img.shields.io/npm/v/forward-ref.svg?style=popout)](https://www.npmjs.com/package/forward-ref) [![min](https://badgen.net/bundlephobia/min/forward-ref)](https://bundlephobia.com/result?p=forward-ref)
在 Class Component 中更方便的使用ref

# 介绍

## forwardRef
将ref以props的形式传递到组件内，组件可以接收到一个叫做`forwardRef`的props


# 使用方法

## 安装依赖
```sh
$ npm install forward-ref --save
# or
$ yarn add forward-ref
```
## 在Decorator中使用
[查看代码示例](https://github.com/wowlusitong/forward-ref/blob/master/packages/examples/src/scripts/components/DecoratorDemo.js)

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


## 在组合HOC中使用
[查看代码示例](https://github.com/wowlusitong/forward-ref/blob/master/packages/examples/src/scripts/components/HOCDemo.js)
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
