import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Notfound from "./components/Notfound";
import Register from "./components/Register";
import Users from "./components/Users";
import { BrowserRouter,Routes,Route } from "react-router-dom";
const  App = ()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
