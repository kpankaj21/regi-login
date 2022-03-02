import React, { useState, useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import Login from './Login';
import { Routes, useNavigate } from 'react-router-dom';

export default function PrivateRoute({ children, ...rest }) {
    console.log("children",children);
    console.log("rest",rest);
  const [loggedIn, setLoggedIn] = useState(null)
  useEffect(()=>{
        const Token = localStorage.getItem("token");
        if(Token === null){
            setLoggedIn(true);
        }
    },[])
    const Navigate = useNavigate()
    if(loggedIn){
        Navigate("/login")
    }
  return children
}