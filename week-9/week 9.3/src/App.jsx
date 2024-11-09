import { useState } from "react";
import { PostComponent } from "./PostComponent";
function App() {
  const [posts, setposts] = useState([])
  const postRendering = posts.map((post, index) => (
    <PostComponent name={post.name} key={index} subtitle={post.subtitle} time={post.time} description={post.description} image={post.image}></PostComponent>
  ))
  function addPost() {

    setposts([...posts, {
      name: "harkirat",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
      description: "What to know how to win big? Check out how these folks won $6000 in bounties."
    }])
  }
  return (
    <>
      <button onClick={addPost}>Add Post</button>
      <div style={{ backgroundColor: "gray", height: '100vh', width: "100vw", display: "flex", flexDirection:"column", justifyContent: "center", alignItems: 'center' }}>
        {postRendering}
      </div>
    </>
  )
}
export default App