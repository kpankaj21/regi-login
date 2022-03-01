import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Display = ({out}) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location);
  const data = location.state;

  const clickNew = () => {
      
    navigate("/registration");
  };

  const clickOut = () => {
      out()
     navigate("/login")
  };

  const editHandler =() => {

  }

  const deleteHandler =() => {

}

  return (
    <div>
      

      <div className="container">
        <table className="table table-dark bg-dark">
          <thead style={{color:"orange"}}>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr className="table-active">
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>{item.city}</td>
                  <td>
                    <button type="button" onClick={() => editHandler()} class="btn btn-outline-warning">
                      Edit
                    </button>
                  </td>
                  <td>
                    <button type="button" onClick={() => deleteHandler()} class="btn btn-outline-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <button className="btn btn-primary" onClick={() => clickNew()}>
        Add New User
      </button>

      <button className="btn btn-primary" onClick={() => clickOut()}>
       Logout
      </button>
    </div>
  );
};
export default Display;
