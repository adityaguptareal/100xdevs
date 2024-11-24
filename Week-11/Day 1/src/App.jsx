import React from "react";
import { useState } from "react";
import { useFetch } from "./hooks/UseFetch";
import { usePrev } from "./hooks/UsePrev";

function App() {
  const [count,setCount]=useState(0)
  const previousValue=usePrev(count)
  return (
    <>
    <p>Counter value {count}</p>
    <button onClick={()=>{setCount((c)=>c+1)}}>Increae Value</button>
    <p>Previous value {previousValue}</p>

    </>
  )
}
export default App