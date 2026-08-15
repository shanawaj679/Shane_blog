import { Route,Routes,BrowserRouter } from "react-router-dom"
import Landing from "./landing/landing.jsx"
import Register from "./register/register.jsx"
import Login from "./login/login.jsx"

function App(){
  return <>
  <Routes>
<Route path="/" element={<Landing />}></Route>
<Route path="/Login" element={<Login />} />
<Route path="/Register" element={<Register />} />



  </Routes>
  </>
}
export default App