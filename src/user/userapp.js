import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./home"
import Login from "./login";
import Myregister from "./register";
import Service from "./service";
import React from 'react'
import Header from "./header";
import Footer from "./footer";

const Userapp = () => {
  return (
    <HashRouter>
      <Header/>
       
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Myregister/>}/>
            <Route exact path="/service" element={<Service/>}/>
        </Routes>
        <Footer/>
      
    </HashRouter>
  )
}

export default Userapp

