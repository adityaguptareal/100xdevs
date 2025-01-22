import React, { memo, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import { counterAtom } from './store/Counter'

function App() {

  return (
    <>

      <Counter />

    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setInterval(() => {
      setCount(count + 1)
    }, 3000)
  }, [])

  return (
    <>
      <CurrentCount />
      <Increase />
      <Decrease />
    </>

  )
}

const CurrentCount = function CurrentCount() {
  // const count = useRecoilValue(counterAtom)
  return (
    <div>1</div>
  )
}
function Increase() {
  // const setCount = useSetRecoilState(counterAtom)
  function increase() {
    // setCount(c => c + 1)
  }
  return (
    <button onClick={increase}>Increase</button>
  )
}

function Decrease() {

  // const setCount = useSetRecoilState(counterAtom)
  function decrease() {
    // setCount(c => c - 1)
  }
  return (
    <button onClick={decrease}>Decrease</button>
  )
}
export default App
