import React, { Component } from 'react'

class App extends Component {

  state = {
    firstNum: 0,
    secondNum: 0,
    result: 0
  }

  handleAddition = () => {
    this.setState({ result: this.state.firstNum + this.state.secondNum })
  }

  handleSubtraction = () => {
    this.setState({ result: this.state.firstNum - this.state.secondNum })
  }

  handleMultiplication = () => {
    this.setState({ result: this.state.firstNum * this.state.secondNum })
  }

  handleDivision = () => {
    this.setState({ result: this.state.firstNum / this.state.secondNum })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleAddition}>+</button>
        <button onClick={this.handleSubtraction}>-</button>
        <button onClick={this.handleMultiplication}>*</button>
        <button onClick={this.handleDivision}>/</button>
      </div>  
    )
  }
}

export default App
