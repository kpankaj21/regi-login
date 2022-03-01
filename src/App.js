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

function App() {
  const [logged, setLogged] = useState(false);
  useEffect(() => {
    const value = localStorage.getItem("key");
    value ? setLogged(true) : setLogged(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("key", logged);
  }, [logged]);
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />

            {!logged && (
              <Route
                path="/login"
                element={<Login auth={() => setLogged(true)} />}
              />
            )}

            {logged && (
              <Route
                path="/display"
                element={<Display out={() => setLogged(false)} />}
              />
            )}
          </Routes>
          {/* <Footer /> */}
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
