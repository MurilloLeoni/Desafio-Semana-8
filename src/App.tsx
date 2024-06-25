import { BrowserRouter,Route, Routes } from "react-router-dom"
import Footer from "./shared/footer/Footer"
import Header from "./shared/header/Header"
import Login from "./pages/Login"
import Loader from "./components/Loader"


function App() {
 
 
  return (
    <BrowserRouter>
     {/* <Header/> */}
    <Routes>
      <Route path="/" element={<Login/>}></Route>
    </Routes>
    {/* <Footer/> */}
    <Routes>
      <Route path="/loading" element={<Loader/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
