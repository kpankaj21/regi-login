import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Display from "./components/Display";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import PrivateRouter from './components/PrivateRouter';
import Hello from './components/Hello';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/hello" exact={true} element={<Hello />} />
            <Route path="/display" element={<PrivateRouter><Display/></PrivateRouter>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
