import React from 'react'

const NumberButton = props => {
  console.log(props)
  return (
    <button onClick={() => props.handleIncrementCount(props.number)}>{props.number}</button>
  )
}

export default NumberButton