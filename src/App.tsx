import { BrowserRouter,Route, Routes } from "react-router-dom"
import Footer from "./shared/footer/Footer"
import Header from "./shared/header/Header"
import Login from "./pages/Login"
import Loader from "./components/Loader"
import { BrowserRouter} from "react-router-dom";
import Footer from "./shared/footer/Footer";
// import NotFound from "./shared/notFound/NotFound"
// import NotFound2 from "./shared/notFound/NotFound2"

import Main from "./pages/main/Main";

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
      <Main />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
