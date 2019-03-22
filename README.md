# forward-ref
在 Class Component 中更方便的使用ref

# 介绍

## forwardRef
将ref以props的形式传递到组件内，也就是说组件可以接收到一个叫做`forwardRef`的props

## setRef
如果要把ref给当前组件，那么则需要setRef函数，它会直接设置组件的ref为forwardRef

# 使用方法

## 安装依赖
```sh
$ npm install forward-ref
# or
$ yarn add forward-ref
```
## 在Decorator中使用
[查看代码示例](https://github.com/wowlusitong/forward-ref/blob/master/packages/examples/src/scripts/components/DecoratorDemo.js)
```js
import { forwardRef, setRef } from 'forward-ref';

@forwardRef
@XXX // 组件使用的decorator，比如react-redux的connect等
@setRef
export default class DecoratorDemo extends React.Component {
  // ...
}

```

## 设置DOM Ref
```js
import { forwardRef, setRef } from 'forward-ref';

@forwardRef
@XXX // 组件使用的decorator，比如react-redux的connect等
@setRef
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
import { forwardRef, setRef } from 'forward-ref';

class HOCDemo extends React.Component {
  // ...
}

export default _.compose(
  forwardRef,
  XXX, // 组件使用的HOC，比如react-redux的connect等
  setRef
)(HOCDemo)
// 或者
export default forwardRef(
  XXX( // 组件使用的HOC，比如react-redux的connect等
    setRef(HOCDemo)
  )
);

```
