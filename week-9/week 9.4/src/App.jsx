import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card>
      <div style={{color:'green',}}>
        What do you want to post <br />
        <input type="text" />
      </div>
    </Card>
    </>
  )

  function Card({children}) {
    return <div style={{background:"white",borderRadius:"10",color:"black",padding:"10", margin:"10"}}>
      {children}
    </div>
    
  }
}

export default App
