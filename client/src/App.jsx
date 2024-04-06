import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AdminSignUp from "./components/AdminSignUp"
import AdminLogin from "./components/AdminLogin";
import AdminHome from "./components/AdminHome";
import Navbar from "./components/Navbar";
import { Test } from "./components/Test";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Newhome from "./components/Newhome";
import { Volunteer } from "./components/Volunteer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/AdminSignUp" element={<AdminSignUp />}/>
          <Route path="/AdminLogin" element={<AdminLogin />}/>

          <Route path="/AdminHome" element={<AdminHome />}/>

          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Newhome />}/>
          <Route path="/test" element={<Test />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/volunteer" element={<Volunteer />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
