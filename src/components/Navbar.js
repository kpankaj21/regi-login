import React from "react";
import { Link } from "react-router-dom";

 const Navbar = () => {
  return (
    
    <div className="bg-dark mb-5 pb-2">

    <nav>
      
        <Link
          to="/"
          style={{
            fontSize: "30px",

            fontWeight: "bold",
            color: "white",
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
            color: "white",
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
            color: "white",
          }}
        >
          Login
        </Link>

        <Link
          to="/display"
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          Display
        </Link>
      
    </nav>
         
    </div>
  );
};
export default Navbar;