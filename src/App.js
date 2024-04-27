import React, { Component } from 'react';
import './App.css';

class XClassComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="counter">
        <h2>Counter App</h2>
        <div className="count-display">Count: {count}</div>
        <div className="buttons">
          <button onClick={this.incrementCount}>Increment</button>
          <button onClick={this.decrementCount}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default XClassComp;
