import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Vans from "../pages/Vans"
import VanDetail from "../pages/VanDetail.jsx"
import Layout from "./Layout"

import "../../server.js"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/vans" element={<Vans/>}/>
          <Route path="/vans/:id" element={<VanDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;