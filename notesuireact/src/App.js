import Navbar from "./navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/home";
import Signup from "./pages/signup/signup";
import Signin from "./pages/signin/signin";
import Dashboard from "./pages/dashboard/dashboard";
import TodoList from "./pages/todolist/todolist";

function App() {
  return (
       <BrowserRouter>
           <Navbar/>
           <Routes>

              <Route exact path="*" element={<Home/>}/>
               <Route exact path="/signup" element={<Signup/>}/>
               <Route exact path="/signin" element={<Signin/>}/>
               <Route exact path="/dashboard" element={<Dashboard/>}/>
               <Route exact path="/dashboard" element={<Home/>}/>
               <Route exact path="/todolist" element={<TodoList/>}/>
           </Routes>
       </BrowserRouter>

  );
}

export default App;
