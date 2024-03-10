
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {Home} from "./components/Home";
import { Test } from "./components/Test";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/test" element={<Test />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
