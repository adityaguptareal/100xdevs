import { useEffect, useState } from 'react';
import './App.css';
function App() {

  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterVisible((c) => !c);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>Hi</div>
      {counterVisible && <Counter></Counter>}
      <div>Hello</div>
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  console.log("Counter");

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(c => c + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => { setCount(count + 1) }}>Counter</button>
      <button onClick={() => { setCount(count - 1) }}>Counter Decrease</button>
    </div>
  );
}

export default App;
