import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";


import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            await logIn(email, password);
            navigate("/home");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
            await googleSignIn();
            navigate("/home");
        } catch (error) {
            console.log(error.message);
        }
    };

    

    return (
        <>
            <div className="login">
                <div className="loginContainer">
                <img src="plutotv.png" style={{height:"120px",width:"150px",position:"relative",left:"100px"}} />


                    <Form onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input controlId="formBasicEmail"
                            type="email"
                            placeholder="Enter your Email"
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
                            <button variant="primary" type="Submit">
                                Log In
                            </button>
                            <hr />

                            <p> Don't have an account? <Link to="/signup"><span>Sign up</span></Link>
                            </p>

                        </div>

                    </Form>




                </div>





            </div>

        </>
    );
};

export default Login;
