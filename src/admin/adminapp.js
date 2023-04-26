import { HashRouter, Routes, Route } from "react-router-dom";
import Mybill from './bill';
import Manageproduct from './manageproduct';
import Myhome from "./Home";
import Myregistration from "./registration";
import  Publicheader from "./header";
import Edit from "./edit";

import React from 'react'

const Adminapp = () => {
  return (
    <HashRouter>
        <Publicheader/>
        <Routes>
            <Route exact path="/bill" element={<Mybill/>}/>
            <Route exact path="/manageproduct" element={< Manageproduct/>}/>
            <Route exact path="/" element={<Myhome/>}/>
            <Route exact path="/registration" element={<Myregistration/>}/>
            <Route exact path="/edit" element={<Edit/>}/>
        </Routes>
      
    </HashRouter>
  )
}

export default Adminapp

