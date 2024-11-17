import React from "react";
import { useState } from "react";
import { useFetch } from "./hooks/UseFetch";


// function useCounter() {
//   const [count, setCount] = useState(0)
//   function increaseCount() {
//     setCount(c => c + 1)
//   }
//   return {
//     count: count,
//     increaseCount: increaseCount
//   }
// }

function App() {
  const [currentPost, setCurrentPost] = useState(1)
  const { post, loading } = useFetch('https://jsonplaceholder.typicode.com/todos/' + currentPost,5)
  // const{count,increaseCount}=useCounter()
  return (
    <>
      {/* <button onClick={increaseCount}>Counter {count}</button> */}
      <button onClick={() => setCurrentPost(1)}>Post 1</button>
      <button onClick={() => setCurrentPost(2)}>Post 2</button>
      <button onClick={() => setCurrentPost(3)}>Post 3</button>

      {loading ? <div>Loading...</div> : <div>{post.title}</div>}

    </>
  )
}
export default App