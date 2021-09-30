import React, { useState, useContext } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { TextField, Button } from '@material-ui/core';
import { VpnKey } from '@material-ui/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from "../App";

const Login = () => {
  const {state, dispatch} = useContext(UserContext);

  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async(event) => {
    event.preventDefault();
    
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    });

    const data = await res.json();

    if (data.error || !data) {
      toast.error(`sorry ${email}, SignUp failed!, ${data.error}`, {
        position: "top-center",
        autoClose: 5000
        });
    } else {
      dispatch({type: "USER", payload: true});
      alert(`Welcome ${email}, Login Succefully`);
      history.push("/about");
    }
  }

  return(
    <>
      <div className="container mt-5">
        <div className="signup_form">
          <h1 className="form_title" style={{ textAlign: "left" }}> Sign In </h1>
          <div className="row">
            <div className="col-12 col-lg-6 col-md-8 order-2 order-lg-1">
                <figure>
                  <img src="image/lock-4441691_1280.png" alt="Login Image" className="img-fluid" />
                  <NavLink to="/signup"> I Have No Account </NavLink>
                </figure>
              </div>
            <div className="col-12 col-lg-6 col-md-8 order-2 order-lg-1">
              <form method="POST" onSubmit={loginUser}> 
                <TextField className="input" type="email" label="Email" variant="standard" name="email" required value={email} onChange={(event) => setEmail(event.target.value)} />
                <TextField className="input" type="password" label="Password" variant="standard" name="password" required value={password} onChange={(event) => setPassword(event.target.value)} />
                <Button variant="contained" title="Click Me For Sign In" className="signin_btn" type="submit" name="signin">
                  <VpnKey/> Sign In 
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Login;