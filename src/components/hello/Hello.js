import React, { memo } from "react"
import Menu from "../menu/Menu"

import "./Hello.css"
import Counter from './../counter/';

function Hello({ value }) {
  return (
    <div className="hello">
      <Menu />
      <div>{value}</div>
      <h1>Counter</h1>
      <Counter />
    </div>
  )
}
export default memo(Hello)
