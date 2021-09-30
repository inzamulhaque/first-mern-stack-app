import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Send } from '@material-ui/icons';
import { NavLink, useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: ""
  });

  let name, value;
  const handleInputs = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({...user, [name]: value});
  }

  const PostData = async (event) => {
    event.preventDefault();
    const {name, email, phone, work, password, cpassword} = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password, cpassword
      })
    });

    const data = await res.json();
    console.log(data);

    if (data.error || !data) {
      toast.error(`sorry ${user.name}, SignUp failed!, ${data.error}`, {
        position: "top-center",
        autoClose: 5000
        });
    } else {
      alert(`welcome ${user.name}, SignUp Successful`);
      history.push("/login");
    }
    
  }

  return(
    <>
      <div className="container mt-5">
        <div className="signup_form">
          <h1 className="form_title" style={{ textAlign: "left" }}> Sign Up </h1>
          <div className="row">
            <div className="col-12 col-lg-6 col-md-8 order-2 order-lg-1">
              <form method="POST" onSubmit={PostData}> 
                <TextField className="input" type="text" label="Name" variant="standard" name="name" value={user.name} onChange={handleInputs} required />
                <TextField className="input" type="email" label="Email" variant="standard" name="email" value={user.email} onChange={handleInputs} required />
                <TextField className="input" type="number" label="Phone" variant="standard" name="phone" value={user.phone} onChange={handleInputs} required />
                <TextField className="input" type="text" label="Profession Name" variant="standard" name="work" value={user.work} onChange={handleInputs} required />
                <TextField className="input" type="password" label="Password" variant="standard" name="password" value={user.password} onChange={handleInputs} required />
                <TextField className="input" type="password" label="Confirm Password" variant="standard" name="cpassword" value={user.cpassword} onChange={handleInputs} required />
                <Button variant="contained" title="Click Me For Sign Up" className="signup_btn" type="submit" name="signup">
                  <Send/> Sign Up 
                </Button>
              </form>
            </div>
            <div className="col-12 col-lg-6 col-md-8 order-1 order-lg-2">
              <figure>
                <img src="image/neonbrand-4kjcmPhsGkc-unsplash.jpg" alt="Image" className="img-fluid" />
                <NavLink to="/login"> I Have Account </NavLink>
              </figure>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Signup;