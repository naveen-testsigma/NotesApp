import Navbar from "./navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Signup from "./pages/signup/signup";
import Signin from "./pages/signin/signin";

function App() {
  return (
       <BrowserRouter>
           <Navbar/>
           <Routes>

              <Route exact path="*" element={<Home/>}/>
               <Route exact path="/signup" element={<Signup/>}/>
               <Route exact path="/signin" element={<Signin/>}/>
               <Route exact path="/dashboard" element={<Home/>}/>
           </Routes>
       </BrowserRouter>

  );
}

export default App;
