import React from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/dashboard" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Login insideRegister={true} />}/>
        <Route path="/*" element={<LandingPage/>}/>
      </Routes>
    </div>
  );
};

export default App;
