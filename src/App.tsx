import { BrowserRouter,Route, Routes} from "react-router-dom"
import Footer from "./shared/footer/Footer"
import Header from "./shared/header/Header"
import NotFound from "./shared/notFound/NotFound"
import NotFound2 from "./shared/notFound/NotFound2"

import Main from "./pages/main/Main"


function App() {
 
 
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<NotFound />}/>
        <Route path="not" element={<NotFound2 />}/>

      <Route path="/" element={<Main/>}></Route>
    </Routes>
    
    <Footer/>
    </BrowserRouter>
  )
}

export default App
