import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
 const Registration = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [cpass, setCPass] = useState("");
  const [nerror, setNameError] = useState("");
  const [emailerror, setEmailError] = useState("");
  const [passerror, setPassError] = useState("");
  const [cpasserror, setCPassError] = useState("");
  const [valide, setValidEmail] = useState("");
  const [passcpass, setValidCPass] = useState("");
  const [address, setAddress] = useState("");
  const [addreserror, setAddressError] = useState("");
  const [city, setCity] = useState("");
  const [cityerror, setCityError] = useState("");

  const navigate=useNavigate();
  useEffect(() => {
    const dummyData = JSON.parse(localStorage.getItem('user'))
    console.log("+++++++dummyData",dummyData);
     if(dummyData){
       setUser(dummyData) 
     }
  }, [])
  console.log("user",user);

  const handlesubmit = (e) => {
    e.preventDefault();


    let data = {
      name,
      email,
      password,
      cpass,
      address,
      city,
    };
    if (!name && !email && !password && !cpass && !address && !city) {
      if (!name) {
        setNameError("plesae enter name");
      }
      if (!email) {
        setEmailError("please enter email");
      }

      if (!password) {
        setPassError("please enter password");
      }
      if (!cpass) {
        setCPassError("please enter password");
      }
      if (!address) {
        setAddressError("please enter address");
      }
      if (!city) {
        setCityError("please enter city");
      }
    } else if (email.match(/^[a-zA-Z]+$/)) {
      setValidEmail("invalid email");
    } else if (password != cpass) {
      setValidCPass("paccword &cpassword not match");
    } else {
      console.log("data",data);
      
      console.log("++++++++++++user",user);
      setUser(user.push(data));
      localStorage.setItem("user", JSON.stringify(user));
      alert("data added succeccfully");
      setName("");
      setEmail("");
      setPass("");
      setCPass("");
      setAddress("");
      setCity("");
      navigate("/login")

    }
  };

  /* useEffect(() => {
    
  }, [user]); */
  return (
    <>
      <div className="container py-5">
        <form
          className="border border-dark border-2 row g-3"
          onSubmit={handlesubmit}
        >
          <div className="col-md-6">
            <label for="text" className="form-label">
              <b>Name</b>
            </label>
            <input
              value={name}
              type="text"
              className="form-control"
              id="inputEmail4"
              onChange={(e) => setName(e.target.value, setNameError(""))}
            />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {nerror}
            </span>
          </div>

          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              <b>Email</b>
            </label>
            <input
              value={email}
              type="email"
              className="form-control"
              id="inputEmail4"
              onChange={(e) =>
                setEmail(e.target.value, setEmailError(""), setValidEmail(""))
              }
            />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {emailerror}
            </span>
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {valide}
            </span>
          </div>

          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              <b>Password</b>
            </label>
            <input
              value={password}
              type="password"
              className="form-control"
              
              onChange={(e) =>
                setPass(e.target.value, setPassError(""), setValidCPass(""))
              }
            />

            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {passerror}
            </span>
          </div>

          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              <b>Conform Password</b>
            </label>
            <input
              value={cpass}
              type="password"
              className="form-control"
               
              onChange={(e) => setCPass(e.target.value, setCPassError(""))}
            />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {cpasserror}
            </span>
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {passcpass}
            </span>
          </div>

          <div className="col-12">
            <label for="inputAddress" className="form-label">
             <b>Address</b> 
            </label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value, setAddressError(""))}
              type="text"
              className="form-control"
              
              placeholder="1234 Main St"
            />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {addreserror}
            </span>
          </div>

          <div className="col-md-6">
            <label for="inputCity" className="form-label">
            <b>City</b>  
            </label>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value, setCityError(""))}
              className="form-control"
              id="inputCity"
            />
          </div>

          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {cityerror}
          </span>

          <div className="col-12">
            <button type="submit" className="btn btn-primary offset-sm-4 my-3">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Registration;