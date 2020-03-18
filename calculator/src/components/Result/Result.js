import React from 'react'

const Result = () => {
  return (
    <div className="card">
      <h3 className="card-header">Result</h3>
      <div className="card-body">
        <h1 id="first-number"></h1>
        <h1 id="operator"></h1>
        <h1 id="second-number"></h1>
        <hr/>
          <h1 id="result"></h1>
          <h1 id="error"></h1>
          </div>
    </div>
  )
}

export default Result