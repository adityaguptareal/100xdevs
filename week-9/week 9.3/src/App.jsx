import { useState } from "react";

function App() {
  const [count, setCount] = useState([0])
  return (
    <>
      <div style={{ position: "relative", width: '100px', height: "100px" }}>
        <img src="https://cdn-icons-png.flaticon.com/512/455/455665.png" style={{ height: 100, width: 100, position: "releative", left: 0 }} alt="" />
        <div style={{
          borderRadius: 500, display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "red", height: 30, width: 30, position: "absolute",
          top: 0,
          right: -10
        }}>{count}</div>
      </div>

      <div style={{ marginLeft: 200 }}>
        <button onClick={() => (setCount(parseInt(count) + 1))}>Counter</button>
      </div>

    </>
  )
}
export default App