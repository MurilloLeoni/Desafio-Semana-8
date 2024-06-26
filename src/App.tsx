import { BrowserRouter,Route, Routes } from "react-router-dom"
import Footer from "./shared/footer/Footer"
import Header from "./shared/header/Header"
import Login from "./pages/Login"
import Loader from "./components/Loader"
import Player from "./components/Player"


function App() {
 
 
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
    </Routes>
    <Routes>
      <Route path="/loading" element={<Loader/>}></Route>
    </Routes>
    <Routes>
      <Route path="/player" element={<Player/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
