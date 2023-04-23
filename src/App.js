import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import SignIn from "./pages/signIn";
import Navbar from "./components/Navbar"
import NotFound from "./pages/notFound";
import Shop from "./pages/Shop";


var signIn =  true;

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {/* <Route index element ={<Home />} /> */}
          <Route path="home" element={<Home />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}


export default App;

