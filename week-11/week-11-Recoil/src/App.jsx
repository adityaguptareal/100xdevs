import React from "react";
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/Counter";
function App() {
  return (
    <>
      <RecoilRoot>
        <Counter />
        <ButtonCounter />
      <EvenCheck />
      </RecoilRoot>
    </>
  )


  function Counter() {
    const count = useRecoilValue(counterAtom)
    return (
      <div>{count}</div>
    )
  }

  function ButtonCounter() {
    const setCount = useSetRecoilState(counterAtom)
    return (
      <div>
        <button onClick={() => { setCount((c) => c + 2) }}>Increase</button>
        <button onClick={() => { setCount((c) => c - 1) }}>Decrease</button>
      </div>
    )
  }
  function EvenCheck() {
    const even = useRecoilValue(evenSelector)
    return (
      <div>{even ? "Even" : "Oddd"}</div>
    )
  }
}
export default App