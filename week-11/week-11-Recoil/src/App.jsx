import React from "react";
import { useState } from "react";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom } from "./store/Counter";

function App() {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>

  )
}
function Counter() {
  // const [count, setCount] = useState(0)
  const count = useRecoilValue(counterAtom)
  return (
    <>
      {count}
      <Increase />
      <Decrease />
    </>
  )
}

function Increase() {
  const setCount = useSetRecoilState(counterAtom)
  function increaseCount() {
    setCount(c => c + 1)

  }
  return (
    <button onClick={increaseCount}>Increase</button>
  )

}

function Decrease() {
  const setCount = useSetRecoilState(counterAtom)
  function decraseCount() {
    setCount(c => c - 1)

  }
  return (
    <button onClick={decraseCount}>Decrease</button>
  )
}

export default App