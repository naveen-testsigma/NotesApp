import Navbar from "./navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Signup from "./pages/signup/signup";
import Signin from "./pages/signin/signin";
<<<<<<< Updated upstream
import Dashboard from "./pages/dashboard/dashboard";
=======
>>>>>>> Stashed changes
import TodoList from "./pages/todolist/todolist";

function App() {
  return (
       <BrowserRouter>
           <Navbar/>
           <Routes>

              <Route exact path="*" element={<Home/>}/>
               <Route exact path="/signup" element={<Signup/>}/>
               <Route exact path="/signin" element={<Signin/>}/>
<<<<<<< Updated upstream
               <Route exact path="/dashboard" element={<Dashboard/>}/>
=======
               <Route exact path="/dashboard" element={<Home/>}/>
>>>>>>> Stashed changes
               <Route exact path="/todolist" element={<TodoList/>}/>
           </Routes>
       </BrowserRouter>

  );
}

export default App;
