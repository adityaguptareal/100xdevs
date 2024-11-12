import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Allen />} />
            <Route path='/Class11' element={<Class11 />} />
            <Route path='/Class12' element={<Class12 />} />
          </Route>
        </Routes>
      </BrowserRouter>


    </>

  )

  function Layout() {
    return (
      <>
        <div>

          <Header />
        </div>
        <div>
          <Outlet />
        </div>
        <div>

          <Footer />
        </div>
      </>

    )
  }
  function Footer() {
    return (
      <div style={{ width: "100vw", backgroundColor: "red" }}>This is footer</div>
    )
  }
  function Header() {
    return (

      <div style={{ width: "100vw", backgroundColor: 'blue', color: "white" }}>
        <Link to="/">Allen |</Link>
        <Link to="/Class11">Class 11 |</Link>
        <Link to="/Class12">Class 12 |</Link>

      </div>
    )
  }

  function Allen() {
    const naigate = useNavigate()
    function redirectUser() {
      naigate("/Clsss12")
    }
    return (
      <>
        <button onClick={redirectUser}>Redirect Button</button>
        <div>Welcome to the allen home page</div>
      </>

    )
  }

  function Class11() {
    return (
      <>
        <div>This is class 11th Program</div>
      </>
    )
  }
  function Class12() {
    return (
      <>
        <div>This is class 12th Program</div>
      </>
    )
  }


}
export default App
