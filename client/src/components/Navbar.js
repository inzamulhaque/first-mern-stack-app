import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
    const {state, dispatch} = useContext(UserContext);

  return(
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink className="navbar-brand" to="/">MD IH <span style={{color: "#5C7AEA"}}>Alif</span> </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    { state? null :
                    <> 
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">SignIn</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">SignUp</NavLink>
                        </li>
                    </>
                    }
                    { state? 
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signout">SignOut</NavLink>
                        </li>
                    : null
                    }
                </ul>
            </div>
        </nav>
    </>
  );
}

export default Navbar;