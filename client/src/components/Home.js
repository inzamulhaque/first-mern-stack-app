import React, { useState, useEffect } from 'react';
import './css/home.css';

const Home = () => {
  const [name, setName] = useState("");

  const homePage = async () => {
    try {
      const res = await fetch("/getdata",{
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      setName(data.name);
      if (res.status !== 200) {
        throw new Error(res.error);
      }

    } catch (error) {
      setName("");
    }
  }

  useEffect(() => {
    homePage();
  }, []);

  return(
    <>
      <div className="main">
        <p> WELCOME </p>
        {/* <h1> We Are The MERN Stack Developer </h1> */}
        <h1> {name ? name : "We Are The MERN Stack Developer"} </h1>
        {
          name === "" ? "" : <h3> See You Again </h3>
        }
      </div>
    </>
  );
}

export default Home;