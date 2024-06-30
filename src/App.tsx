import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login/Login";
// import Loader from "./components/Loader"
// import NotFound from "./shared/notFound/NotFound"
// import NotFound2 from "./shared/notFound/NotFound2"

import Main from "./pages/main/Main";
import Home from "./pages/main/home-component/Home";
import Movie from "./pages/main/movie-component/Movie";
import Serie from "./pages/main/serie-component/Serie";
import Celebrity from "./pages/main/celebrity-component/Celebrity";
// import Tvshow from "./components/Tvshow";
import SerieFilho from "./pages/main/serie-component/SerieFilho";
import VideoPlayer from "./components/VideoPlayer";
import Collections from "./pages/main/Collections/Collections";
import MovieFilho from "./pages/main/movie-component/MovieFilho";

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
          <Route path="serie/:id" element={<SerieFilho />} />
          <Route path="collection/:id" element={<Collections/>}/>
          <Route path="movie/:id" element={<MovieFilho/>}/>
        </Route>
        <Route path="/player" element={<VideoPlayer />} />
      </Routes>

      {/* <Routes>
      <Route path="/loading" element={<Loader/>}></Route>
    </Routes> */}

      {/* <Route path="" element={<NotFound />}/> */}
      {/* <Tvshow/> */}
    </BrowserRouter>
  );
}
export default App;
