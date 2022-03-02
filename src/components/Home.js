import React from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const Navigate = useNavigate()
  console.log("Navigate",Navigate);
  const location = useLocation()
  console.log("location",location);
  return <div>
<h2>This is just Home Page</h2>

  </div>;
};

export default Home;
