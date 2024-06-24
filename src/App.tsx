import { BrowserRouter,Route, Routes } from "react-router-dom"
import Footer from "./shared/footer/Footer"
import Header from "./shared/header/Header"


function App() {
 
 
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={"pagina coloca aqui"}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
