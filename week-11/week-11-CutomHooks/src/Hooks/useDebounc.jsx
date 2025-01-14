import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';



function useDebounce(orignalFn){
  const currentClock=useRef()
  const fn=()=>{
    clearInterval(currentClock.current)
  currentClock.current=setTimeout(orignalFn,500)

}
return fn

}



function DebounceHook() {

  function callFunction(){
fetch('https://jsonplaceholder.typicode.com/posts/1')
  }

const debounceHook=useDebounce(callFunction)


  return (
    <div>
<input type='text' onChange={debounceHook}/>

    </div>
  )
}

function DebounceHook() {
  function callFunction() {
    fetch("https://jsonplaceholder.typicode.com/posts/1/")
  }
  const debounceHook = useDebounce(callFunction)
  return (
    <>
      <input type="text" onChange={debounceHook} />
    </>
  );
}

export default DebounceHook;