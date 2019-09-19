import React, { Component } from 'react';

class Counter extends Component {
  state = { value: 0 }

  inc = () => {
    // asynchronous
    // this.setState({ value: this.state.value + 1 })
    this.setState( (state) => {
      return { value: state.value + 1}
    })
  }

  dec = () => {
    // this.setState({ value: this.state.value - 1})
    this.setState( (state) => {
      return { value: state.value - 1}
    })
  }

  render() {
    return (
      <div>
        <p>{ this.state.value }</p>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }
}

export default Counter;
