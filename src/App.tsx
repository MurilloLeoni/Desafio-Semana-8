import { BrowserRouter,Route,Routes } from "react-router-dom"
import Footer from "./shared/footer/Footer"
import Login from "./pages/Login"
// import Loader from "./components/Loader"
// import NotFound from "./shared/notFound/NotFound"
// import NotFound2 from "./shared/notFound/NotFound2"

import Main from "./pages/main/Main";

function App() {
  return (
    <BrowserRouter>
     {/* <Header/> */}
    <Routes>
     <Route path="/login" element={<Login/>}></Route>
     {/* <Route path="/" element={<Main />}></Route> */}
    </Routes>
    {/* <Footer/> */}
    {/* <Routes>
      <Route path="/loading" element={<Loader/>}></Route>
    </Routes> */}
      <Main />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
