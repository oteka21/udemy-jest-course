import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false
    };
  }
  render() {
    return (
      <div data-test="component-counter">
      <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
      <button
        data-test="increment-button"
        onClick={() => {
          if (this.state.error) this.setState({error: false})
          this.setState({ counter: this.state.counter + 1 }) 
        }}
        >
        Increment counter
      </button>
      <button
        data-test="decrement-button"
        onClick={() => this.state.counter === 0 ? this.setState({ error: true }) : this.setState({ counter: this.state.counter - 1 })}
        >
        Decrement counter
      </button>
      {this.state.error && <p style={{color: 'red'}}>Counter should not be less than 0</p>}
      </div>
    );
  }
}

export default Counter;
