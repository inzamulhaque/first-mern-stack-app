import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { Button } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import "./css/about.css";

const About = () => {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about",{
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      });

      const data = await res.json();
      setUserData(data);
      if (res.status !== 200) {
        throw new Error(res.error);
      }

    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);

  return(
    <>
      <div className="container mt-5">
        <form method="GET">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-9 m-auto about_box">
              <div className="row row-eq-height">

                <div className="col-md-4">
                  <h5 className="mt-2"> { userData.name } </h5>
                  <h6 style={{color: "#0877F3"}}> { userData.work } </h6>
                </div>

                <div className="col-md-6">
                  <p className="use_info"> Name: { userData.name } </p>
                  <p className="use_info"> Email: { userData.email } </p>
                  <p className="use_info"> Phone: { userData.phone } </p>
                  <p className="use_info"> Work: { userData.work } </p>
                </div>

                <div className="col-md-2">
                  <Button className="edit_pro_btn" name="btnAddmore">
                    <Edit/> Edit Profile
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default About;