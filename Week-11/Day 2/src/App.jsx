import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Counter></Counter>
    </>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      {count}
      <Increase setCount={setCount} />
      <Decrease setCount={setCount}/>
    </div>
  )
}

function Decrease({setCount}) {
  function decrease() {
    setCount(c => c - 1)
  }
  return (
    <div>
      <button onClick={decrease}>
        Decrease
      </button>
    </div>
  )
}


function Increase({setCount}) {
  function increase() {
    setCount(c => c + 1)
  }
  return (
    <div>
      <button onClick={increase}>Increase</button>
    </div>
  )
}

export default App
