import React, { useState, useEffect } from "react";
import { useFetch } from "./Hooks/useFetch";
function FetchExample() {
  const [post,setPost]=useState(1)
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/"+post)

  return (
    <>
      <button onClick={()=>setPost(1)}>Post 1</button>
      <button onClick={()=>setPost(2)}>Post 2</button>
      <button onClick={()=>setPost(3)}>Post 3</button>
      {loading ? 
      <div>Loading...</div> :
      <pre>{JSON.stringify(data.title)}</pre>}

    </>
  )

}
export default FetchExample;