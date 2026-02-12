import Home from "./Home"
import { Login } from "./Login"
import { Navbar } from "./navbar"
import { Register } from "./register"
import { Navigate, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>





  )
}

export default App