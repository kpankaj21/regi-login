import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

const getdata = () => {
    const data = localStorage.getItem("user");
    if (data) {
      return JSON.parse(data);
    } else {
      return [];
    }
  };
  

 const Login = ({auth}) => {
    const [user, setuser] = useState(getdata());
   const navigate=useNavigate()

  // console.log(user);

  const [email, setemail] = useState("");
  const [pass, setpassword] = useState("");

  const handalSubmit = (e) => {
    e.preventDefault();
    auth()
    console.log("userrr info",user);
    navigate("/display",{state:user})


    let data = {
      email,
      pass,
    };
    let status = false;
    if (email && pass) {
      user &&
        user.map((data) => {
          if (data.email === email && data.password === pass) {
            alert("login successfully");
            status = true;
            setemail("");
            setpassword("");
          } else if (data.email !== email && data.password === pass) {
            alert("wrong email");
            status = true;
          } else if (data.email === email && data.password !== pass) {
            alert("wrong password");
            status = true;
          }
        });
    } else {
      alert("plz enter data");
    }
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <div className="container py-4">
      <form className="border border-dark border-2"  onSubmit={handalSubmit}>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
           <b> Email</b>
          </label>
          <input
            value={email}
            type="email"
            placeholder="enter your email.."
            onChange={(e) => setemail(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            <b>Password</b>
          </label>
          <input
          value={pass}
          onChange={(e) => setpassword(e.target.value)}
            type="password"
            placeholder="enter your password"

            className="form-control"
            
          />
        </div>
      
        <button type="submit" className="btn btn-primary offset-sm-4 my-3">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Login;