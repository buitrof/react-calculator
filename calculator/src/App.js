import React, {Component} from 'react'
import Jumbotron from './components/Jumbotron'
import Result from './components/Result'

class App extends Component{
  render() {
    return (
      <>
      <Jumbotron />
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {/* Calulator Card Here */}
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
