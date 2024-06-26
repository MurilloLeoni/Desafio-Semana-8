import { BrowserRouter,Route, Routes } from "react-router-dom"
import Footer from "./shared/footer/Footer"
import Header from "./shared/header/Header"
import NotFound from "./shared/notFound/NotFound"
import NotFound2 from "./shared/notFound/NotFound2"

function App() {
 
 
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<NotFound />}/>
        <Route path="not" element={<NotFound2 />}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
