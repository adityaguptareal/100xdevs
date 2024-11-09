import { useEffect, useState } from "react";
function App() {
  const [currentTab, setcurrentTab] = useState(1)
  const [tabData, setTabData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(function () {
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/todos/' + currentTab)
    .then(async (res)=>{
      const json= await res.json()
      setTabData(json)
      setLoading(false)
    })
  }, [currentTab])
  return (
    <>
      <button onClick={() => setcurrentTab(1)} style={{ color: currentTab == 1 ? "red" : "black" }}>Todo #1</button>
      <button onClick={() => setcurrentTab(2)} style={{ color: currentTab == "2" ? "red" : "black" }}>Todo #2</button>
      <button onClick={() => setcurrentTab(3)} style={{ color: currentTab == "3" ? "red" : "black" }}>Todo #3</button>
      <button onClick={() => setcurrentTab(4)} style={{ color: currentTab == 4 ? "red" : "black" }}>Todo #4</button>
      <br />
      {loading?<div>loading..</div>:tabData.title}
    </>
  )
}
export default App