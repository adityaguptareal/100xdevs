import { useState, useContext, createContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const BulbContext = createContext()

function App() {
  const [bulb, setbulb] = useState(false)
  return (
    <>
      <BulbContext.Provider value={{ bulb: bulb, setbulb: setbulb }}>
        <LightBulb></LightBulb>
      </BulbContext.Provider>
    </>
  )
}

function LightBulb() {
  return (
    <>
      <BulbState ></BulbState>
      <ToggleButton></ToggleButton>
    </>
  )
}

function BulbState() {
  const { bulb } = useContext(BulbContext)
  return (
    <>
      {bulb ? "Bulb is on" : "Bulb is off"}
    </>
  )
}

function ToggleButton() {
  const { setbulb } = useContext(BulbContext)
  return (
    <>
      <br />
      <button onClick={() => setbulb(currentState => !currentState)}>Toggle Button</button>
    </>
  )
}
export default App
