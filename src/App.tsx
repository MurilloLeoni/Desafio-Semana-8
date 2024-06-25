import { BrowserRouter,Route, Routes } from "react-router-dom"
import Footer from "./shared/footer/Footer"
import Header from "./shared/header/Header"
import Login from "./pages/Login"


function App() {
 
 
  return (
    <BrowserRouter>
     {/* <Header/> */}
    <Routes>
      <Route path="/" element={<Login/>}></Route>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
