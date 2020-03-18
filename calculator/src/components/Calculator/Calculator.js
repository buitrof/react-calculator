import React, {Component} from 'react'

class Calculator extends Component {
  render() {
    return (
      <div className="card">
        <h3 className="card-header">Calculator</h3>
    
        <div className="card-body">
          <button id="button-1" className="btn btn-primary number" value="1">1</button>
          <button id="button-2" className="btn btn-primary number" value="2">2</button>
          <button id="button-3" className="btn btn-primary number" value="3">3</button>
          <button id="button-plus" className="btn btn-danger operator" value="plus">+</button>
          <br/><br/>
            <button id="button-4" className="btn btn-primary number" value="4">4</button>
            <button id="button-5" className="btn btn-primary number" value="5">5</button>
            <button id="button-6" className="btn btn-primary number" value="6">6</button>
            <button id="button-minus" className="btn btn-danger operator" value="minus">&minus;</button>
            <br/><br/>
              <button id="button-7" className="btn btn-primary number" value="7">7</button>
              <button id="button-8" className="btn btn-primary number" value="8">8</button>
              <button id="button-9" className="btn btn-primary number" value="9">9</button>
              <button id="button-multiply" className="btn btn-danger operator" value="times">&times;</button>
              <br/><br/>
                <button id="button-0" className="btn btn-primary number" value="0">0</button>
                <button id="button-divide" className="btn btn-danger operator" value="divide">&divide;</button>
                <button id="button-power" className="btn btn-danger operator" value="power">^</button>
                <button id="button-equal" className="btn btn-success equal" value="equals">=</button>
                <br/><br/>
                  <button id="button-clear" className="btn btn-dark clear" value="clear">clear</button>
            </div>
          </div>
    )
  }
}


export default Calculator