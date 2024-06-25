import { BrowserRouter,Route, Routes} from "react-router-dom"
import Footer from "./shared/footer/Footer"

import Main from "./pages/main/Main"


function App() {
 
 
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Main/>}></Route>
    </Routes>
    
    <Footer/>
    </BrowserRouter>
  )
}

export default App
