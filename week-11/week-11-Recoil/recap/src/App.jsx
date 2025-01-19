import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { value } from './AtomStore'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from "recoil"

function App() {

  return (<>
    <RecoilRoot>
    <Counter/>
    </RecoilRoot>
  </>
  )
}

function Counter() {
  return(
    <>
    <CurrentCount/>
    <IncreaseCounter/>
    <DecreaseCounter/>
    </>
  )
}

function CurrentCount() {
  const count=useRecoilValue(value)
  return(
    <div>Current Count: {count}</div>
  )
}
// Code Commit
function IncreaseCounter(){
  const setValue=useSetRecoilState(value)
  return(
    <button onClick={()=>setValue((c)=>c+1)}>Increase Count </button>
  )
}

function DecreaseCounter(){
  const setValue=useSetRecoilState(value)
  return(
    <button onClick={()=>setValue((c)=>c-1)}>Decrease Count </button>
  )
}

export default App
