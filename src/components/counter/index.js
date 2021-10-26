import React from "react";

//uses useSelector hook
import CounterVal from "./counter-value";
//uses useDispatch hook
import CounterNav from "./counter-nav";

import "./counter.css";

const Counter = () => {
  // console.log("Counter...", props);
  return (
    <section className="counter">
      <h1>Counter</h1>
      <CounterVal />
      <CounterNav />
    </section>
  );
};

export default Counter;
