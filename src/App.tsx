import { BrowserRouter} from "react-router-dom";
import Footer from "./shared/footer/Footer";
// import NotFound from "./shared/notFound/NotFound"
// import NotFound2 from "./shared/notFound/NotFound2"

import Main from "./pages/main/Main";

function App() {
  return (
    <BrowserRouter>
      <Main />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
