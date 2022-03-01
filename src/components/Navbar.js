import React from "react";
import { Link } from "react-router-dom";

 const Navbar = () => {
  return (
    
    <div className="bg-info mb-5 pb-2">

    <nav>
      
        <Link
          to="/"
          style={{
            fontSize: "30px",

            fontWeight: "bold",
            color: "red",
          }}
        >
          Home
        </Link>

        <Link
          to="/registration"
          style={{
            fontSize: "30px",
            padding: "8px",

            fontWeight: "bold",
            color: "blue",
          }}
        >
          Registration
        </Link>

        <Link
          to="/login"
          style={{
            fontSize: "30px",
            padding: "8px",
            fontWeight: "bold",
            color: "green",
          }}
        >
          Login
        </Link>

        <Link
          to="/display"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "yellow",
          }}
        >
          Display
        </Link>
      
    </nav>
         
    </div>
  );
};
export default Navbar;