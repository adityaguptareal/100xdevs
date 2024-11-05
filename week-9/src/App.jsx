import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Have to Complete the Book ",
      description: "Read the book rich dad poor dad",
      done: false,
    }
  ])
  
  function handleTodo() {
    const newArray = []
    for (let i = 0; i < todos.length; i++) {
      newArray.push(todos[i])
    }
    newArray.push({
      title:"Complete the assignment",
      description:"Complete the previous assignment of work",
      done:true
    })
    setTodos(newArray)
  }

  return (
    <>
      <button onClick={handleTodo}>Add Todo</button>
      <br/>
      <br/>
      {JSON.stringify(todos)}
    </>
  )
}

export default App
