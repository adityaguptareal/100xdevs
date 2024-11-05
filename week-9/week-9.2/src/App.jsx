import { useEffect, useState } from 'react';
import './App.css';

{*code Revision*}

function App() {
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounterVisible((c) => !c);
    }, 5000);

    // Cleanup the interval when the component unmounts
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

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => { setCount(count + 1); }}>Counter</button>
      <button onClick={() => { setCount(count - 1); }}>Counter Decrease</button>
    </div>
  );
}

export default App;
