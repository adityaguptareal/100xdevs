import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function useDebounce(originalfn) {
  const currentClock = useRef()
  const fn = () => {
    clearTimeout(currentClock.current)
    currentClock.current = setTimeout(originalfn, 200)
  }
  return fn
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