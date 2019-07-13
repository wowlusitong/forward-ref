import React from 'react';

import DecoratorDemo from './components/DecoratorDemo';
import HOCDemo from './components/HOCDemo';
import ForwardDemo from './components/ForwardDemo';

export default class App extends React.Component {
  decoratorDemoRef = React.createRef();
  HOCDemoRef = React.createRef();
  forwardRef = React.createRef();

  componentDidMount() {
    console.log('decorator', this.decoratorDemoRef);
    console.log('HOC', this.HOCDemoRef);
    console.log('forward', this.forwardRef);
  }

  render() {
    return (
      <div>
        <h3>Please open the Console panel</h3>
        <hr />
        <DecoratorDemo ref={this.decoratorDemoRef} />
        <HOCDemo ref={this.HOCDemoRef} />
        <ForwardDemo ref={this.forwardRef} />
      </div>
    );
  }
}
