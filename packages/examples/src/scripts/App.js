import React from 'react';

import DecoratorDemo from './components/DecoratorDemo';
import HOCDemo from './components/HOCDemo';

export default class App extends React.Component {
  decoratorDemoRef = React.createRef();
  HOCDemoRef = React.createRef();

  componentDidMount() {
    console.log('decorator', this.decoratorDemoRef);
    console.log('HOC', this.HOCDemoRef);
  }

  render() {
    return (
      <div>
        <h3>Open the console for debug</h3>
        <DecoratorDemo type="decorator" ref={this.decoratorDemoRef} />
        <HOCDemo type="hoc" ref={this.HOCDemoRef} />
      </div>
    );
  }
}
