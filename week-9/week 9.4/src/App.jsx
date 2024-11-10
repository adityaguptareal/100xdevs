import React from "react";
function App() {
  const todos = [{
    title: "Complete the Assignment",
    done: true
  }, {
    title: "College Work",
    done: true
  }, {
    title: "Badminton",
    done: false
  }, {
    title: "Exercise",
    done: true
  },]


  return (
    <>
    <div>
      {todos.map((todo, index) => <Todo title={todo.title} done={todo.done} key={index}></Todo>)}
    </div>
    </>
  )

  function Todo({ title, done }) {
    return (
      <div>{title}-{done ? "Completed" : "Not Completed"}</div>
    )

  }
}
export default App