import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Vans from "../pages/Vans"
import VanDetail from "../pages/VanDetail.jsx"
import Header from "./Header"
import Footer from "./Footer"
import "../../server.js"

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans" element={<Vans/>}/>
        <Route path="/vans/:id" element={<VanDetail/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;