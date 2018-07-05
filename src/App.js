// bring in React and Component from React

import React, {Component} from 'react';

// define our Hello component
class Hello extends Component {
  // what should the component render?
  render () {

    // make sure to return some UI
    return (
      <div>
        <h1>WHAT</h1>
        <p>I LOVE TIGERS</p>
        <h3>Also it is time for the tea</h3>
      </div>
    )
  }
}

export default Hello
