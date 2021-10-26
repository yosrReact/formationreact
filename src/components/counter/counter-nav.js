import React, { useState } from "react"

import { useDispatch } from "react-redux"
import {
  increase,
  decrease,
  reset,
  increaseOddValue,
  increaseSpecificValue,
} from "../../redux/reducers/counter"

export const CounterNav = () => {
  const dispatch = useDispatch()
  const [val, setVal] = useState(0)
  return (
    <div className="counter-nav">
      <button
        onClick={() => {
          dispatch(decrease())
        }}
      >
        Decrease
      </button>

      <button
        onClick={() => {
          dispatch(reset())
        }}
      >
        Reset
      </button>

      <button
        onClick={() => {
          dispatch(increase())
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          dispatch(increaseOddValue())
        }}
      >
        Increase odd number
      </button>
      <button
        onClick={() => {
          dispatch(increaseSpecificValue(Number(val)))
        }}
      >
        Increase with specific value
      </button>
      <input
        type="number"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
    </div>
  )
}

export default CounterNav
