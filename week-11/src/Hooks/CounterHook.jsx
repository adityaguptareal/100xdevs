import {React,useState} from 'react';
import './CounterHook.css';

function useCounter(){
  const [count,setCount]= useState(0);
  function increment(){
    setCount(count+1);
  }
  
  return(
    {
      count,
      increment
    }
  )
}

function Counter(){
  const {count,increment}=useCounter();
  return(
    <button onClick={increment}>The Count is {count}</button>
  )
}
function CounterHook() {
 return(
  <>
  Hello World
  <Counter/>

  </>
 ) 
}

export default CounterHook;
