import React, { useState } from "react";
import {usePrev} from "./Hooks/usePrev";
function App() {
  const [count, setCount] = useState(0)
  const prevValue = usePrev(count)


  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      <div> Pre Value is {prevValue}</div>
    </>
  )

}
export default App;