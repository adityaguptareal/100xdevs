import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <LightBulb></LightBulb>
    </>
  )
}

function LightBulb() {
  const [bulb, setbulb] = useState(false)
  return (
    <>
      <BulbState bulb={bulb}></BulbState>
      <ToggleButton setbulb={setbulb} bulb={bulb}></ToggleButton>
    </>
  )
}

function BulbState({bulb}) {
  return (
    <>
      {bulb ? "Bulb is on" : "Bulb is off"}
    </>
  )
}

function ToggleButton({setbulb}) {
  return (
    <>
    <br />
     <button onClick={()=>setbulb(currentState=>!currentState)}>Toggle Button</button>
    </>
  )
}
export default App
