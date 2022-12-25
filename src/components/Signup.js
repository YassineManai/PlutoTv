import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import emailjs from '@emailjs/browser';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();
  const form = useRef()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    emailjs
      .sendForm('service_yfpuueh', 'template_b1ker6p', form.current, 'opKE7Ws2wzJuWCBGK')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    try {
      await signUp(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };


  return (
    <>

      <div className="login">
        <div className="loginContainer">
          <img src="plutotv.png" style={{ height: "120px", width: "150px", position: "relative", left: "100px" }} />


          <Form ref={form} onSubmit={handleSubmit}>
            <label>Username</label>
            <input controlId="formBasicEmail"
              type="email"
              placeholder="Enter your Email"
              name="user_email"
              onChange={(e) => setEmail(e.target.value)}
            >
            </input>
            {error && <Alert variant="danger">{error}</Alert>}

            <label> Password</label>
            <input controlId="formBasicPassword"
              type="password"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}>

            </input>



            <div className="btnContainer">
              <Button variant="primary" type="Submit">
                Sign up
              </Button>
              <hr />


              <p> Already have an account? <Link to="/"><span>Log in</span></Link>
              </p>
            </div>
          </Form>



        </div>





      </div>


    </>
  );
};

export default Signup;
