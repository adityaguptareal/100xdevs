import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

{*code Revision*}

function App() {
  
  return (
    <>
<Counter/>
    </>
  )
  
}

function Counter() {
  const [count, setCount] = useState(5)
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>{setCount(count+1)}}>Counter</button>
    <button onClick={()=>{setCount(count-1)}}>Counter Decrease</button>
    </div>
  )
}
export default App
