import { Route,Routes,BrowserRouter } from "react-router-dom"
import Landing from "./landing/landing.jsx"
import Register from "./register/register.jsx"
import Login from "./login/login.jsx"
import Aarticle from "./dashboard/aarticle/aarticle.jsx"
import Culture from "./dashboard/culture/culture.jsx"
import Ideas from "./dashboard/ideas/ideas.jsx"
import Stories from "./dashboard/stories/stories.jsx"
import Tech from "./dashboard/tech/tech.jsx"
import Latest from "./dashboard/latest/latest.jsx"

function App(){
  return <>
  <Routes>
<Route path="/" element={<Landing />}></Route>
<Route path="/Login" element={<Login />} />
<Route path="/Register" element={<Register />} />
<Route path="/Aarticle" element={<Aarticle />} />
<Route path="/Culture" element={<Culture />} />
<Route path="/Ideas" element={<Ideas />}/>
<Route path="/Stories" element={<Stories />} />
<Route path="/Tech" element={<Tech />}/>
<Route path="/Latest" element={<Latest />} />
  </Routes>
  </>
}
export default App