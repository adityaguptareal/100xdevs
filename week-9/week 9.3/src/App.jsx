import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <ToggleMessage />
    </>
  );
}
// const style = {width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, padding: 20 }
const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(true)
  function toggle() {
    setIsVisible(!isVisible)
  }
  return (
    <>
      <button onClick={toggle}>ToggleMessage</button>
      {isVisible && <p>This is conditionally rendering</p>}
    </>
  )
}



export default App;
