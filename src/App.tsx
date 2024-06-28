<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./shared/footer/Footer"
import Header from "./shared/header/Header"
import NotFound from "./shared/notFound/NotFound"
import NotFound2 from "./shared/notFound/NotFound2"

function App() {


  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="not" element={<NotFound2 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
=======
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
// import Loader from "./components/Loader"
// import NotFound from "./shared/notFound/NotFound"
// import NotFound2 from "./shared/notFound/NotFound2"

import Main from "./pages/main/Main";
import Home from "./pages/main/home-component/Home";
import Movie from "./pages/main/movie-component/Movie";
import Serie from "./pages/main/serie-component/Serie";
import Celebrity from "./pages/main/celebrity-component/Celebrity";

function App() {
  return (
    <BrowserRouter>
      {/* <Header/> */}
       <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home/" element={<Main />}> 
        <Route path="" element={<Home />} />
        <Route path="movie" element={<Movie />} />
        <Route path="serie" element={<Serie />} />
        <Route path="celebrity" element={<Celebrity />} />
        </Route>
      </Routes> 
      
      {/* <Routes>
      <Route path="/loading" element={<Loader/>}></Route>
    </Routes> */}
>>>>>>> origin/main_header

     {/* <Route path="" element={<NotFound />}/> */}
      

      
    </BrowserRouter>
  );
}
export default App;