import React, { useState, useEffect } from 'react';
import { TextField, Button, } from '@material-ui/core';
import { LocalPhone, Email, LocationOn, Send } from '@material-ui/icons';
import "./css/contact.css";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const userContact = async () => {
    try {
      const res = await fetch("/getdata",{
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      });

      const data = await res.json();
      setUserData({
        name: data.name,
        email: data.email,
        phone: data.phone
      });
      if (res.status !== 200) {
        throw new Error(res.error);
      }

    } catch (error) {
      setUserData({
        name: "",
        email: "",
        phone: ""
      });
    }
  }

  useEffect(() => {
    userContact();
  }, []);

  const handleInputs = (event) => {
    const {name, value} = event.target;

    setUserData({...userData, [name]: value});
  }

  const contactForm = async(event) => {
    event.preventDefault();
    
    const {name, email, phone, message} = userData;
    const res = await fetch("/contact",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    });
    const data = await res.json();
    if (!data) {
      alert("Message Not Send");
    } else {
      alert("Message sended");
      setUserData({...userData, message: ""});
    }
  }

  return(
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-4">
            <div className="contact_box">
              <h1> <LocalPhone/> Phone: </h1>
              <h3> +8801789708582 </h3>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-4">
            <div className="contact_box">
              <h1> <Email/> Email: </h1>
              <h3> mdihalif@yahoo.com </h3>
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-4">
            <div className="contact_box">
              <h1> <LocationOn/> Address: </h1>
              <h3> Sadhupara, Pabna, Bangladesh </h3>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12 col-md-10 col-lg-9 m-auto">
            <div className="contact_form_box">
              <h1> Get In Touch </h1>
              <form method="POST" onSubmit={contactForm}>
                <div className="row">
                  <div className="col-12 col-md-10 col-lg-4">
                    <TextField className="contact_input" type="text" label="Name" variant="standard" name="name" value={userData.name} required onChange={handleInputs} />
                  </div>
                  <div className="col-12 col-md-10 col-lg-4">
                    <TextField className="contact_input" type="email" label="Email" variant="standard" name="email" value={userData.email} required onChange={handleInputs} />
                  </div>
                  <div className="col-12 col-md-10 col-lg-4">
                    <TextField className="contact_input" type="number" label="Phone Number" variant="standard" name="phone" value={userData.phone} required onChange={handleInputs} />
                  </div>
                  <div className="col-12 col-md-12 col-lg-12">
                    <TextField className="contact_msg" type="text" label="Message" variant="standard" name="message" value={userData.message} required onChange={handleInputs} />
                  </div>
                  <Button type="submit" className="msg_btn">
                    <Send/> Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;