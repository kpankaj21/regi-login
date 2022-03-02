import React,{useState,useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";

 const Login = () => {
    const [user, setUser] = useState([]);
    const navigate=useNavigate()
    const [email, setemail] = useState("");
    const [pass, setpassword] = useState("");
    useEffect(() => {
      const data = JSON.parse(localStorage.getItem("user"))
      console.log("data",data);
      if(data){
        setUser(data)
      }
    }, [])
  const handalSubmit = (e) => {
    e.preventDefault();
    if (email && pass) {
        user?.map((data) => {
          if (data.email === email && data.password === pass) {
            alert("login successfully");
            localStorage.setItem("token", JSON.stringify(data))
            setemail("");
            setpassword(""); 
            navigate("/")
          } else if (data.email !== email && data.password === pass) {
            alert("wrong email");
          } else if (data.email === email && data.password !== pass) {
            alert("wrong password");
          }
        });
    } else {
      alert("plz enter data");
    }
  };
  return (
    <div className="container py-4">
      <form className="border border-dark border-2"  onSubmit={handalSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
           <b> Email</b>
          </label>
          <input value={email} type="email" placeholder="enter your email.." onChange={(e) => setemail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            <b>Password</b>
          </label>
          <input value={pass} onChange={(e) => setpassword(e.target.value)} type="password" placeholder="enter your password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary offset-sm-4 my-3">
          Login
        </button>
      </form>
    </div>
  );
};
export default Login;