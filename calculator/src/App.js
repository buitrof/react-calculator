import React, {Component} from 'react'
import Jumbotron from './components/Jumbotron'
import Result from './components/Result'
import Calculator from './components/Calculator'

class App extends Component{
  state = {
    firstNum: 0,
    secondNum: 0,
    result: 0,
    operator: null,
    isFirstNumber: true,
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
      <>
      <Jumbotron />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {/* Calulator Card Here */}
            <Calculator 
            first_number = {this.state.firstNum}
            second_number = {this.state.secondNum}
            operator = {this.state.operator}
            isFirstNumber = {this.state.isFirstNumber}
            restul = {this.state.result}
            />
          </div>
          <div className="col-lg-6">
            {/* Result Card */}
            <Result />
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default App
