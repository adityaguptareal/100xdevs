import { useRef, useState } from "react"

function App(params) {

  const [time, setTime] = useState(0)
  const timeRef = useRef()
  function startTimer() {
    let clock = setInterval(() => {
      setTime(c => c + 1)
    }, 1000);
    timeRef.current = clock

  }

  function stopTimer() {
    clearInterval(timeRef.current)
  }
  return (
    <>
      <div>{time}</div>
      <br />
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  )
}
export default App