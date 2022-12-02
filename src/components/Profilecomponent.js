import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import "./Profile.css";

function Profilecomponent() {
  const navigate = useNavigate();

  let getFullName = localStorage.getItem("Fullname");
  let getEmail = localStorage.getItem("Email");
  let getpassword = localStorage.getItem("Password");

  useEffect(() => {
    if (!getFullName) {
      setTimeout(() => {
        navigate("/");
      }, 100);
    }
  }, []);

  const signOut = () => {
    window.localStorage.removeItem("Fullname");
    window.localStorage.setItem("Email","");
    window.localStorage.removeItem("Password","");

    navigate("/");
  };

  return (
    <>
      <div className="body">
        <div className="section" style={{ width: "800px", margin: "auto" }}>
          <h2>Profile </h2>
          <h2>Full Name :{getFullName}</h2>
          <h2>Email :{getEmail} </h2>
          <h2>Password : {getpassword} </h2>
          <br/>
          <button
            onClick={signOut}
            className="bg-white text-black w-28 rounded-sm p-2"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}
export default Profilecomponent;
