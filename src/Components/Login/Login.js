/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

function Login() {
    // *********************************************

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = async (event) => {
        await setEmail(event.target.value);
    };

    const handlePasswordBlur = async (event) => {
        await setPassword(event.target.value);
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        await signInWithEmailAndPassword(email, password);

        if (user) {
            navigate('/home');
        }
    };

    // ************************************************************
    return (
        <div className="form-container">
            <h2 className="form-title">Login</h2>

            <Form onSubmit={handleLogin} className="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        onBlur={handleEmailBlur}
                        type="email"
                        placeholder="Enter email"
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onBlur={handlePasswordBlur}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <p className="text-danger my-3">{error?.message}</p>
                {loading && <p>Loading...</p>}

                <input className="login-btn" type="submit" value="Login" />

                <p className="text-center new-signup">
                    New to Amazon?{' '}
                    <Link className="orange-text" to="/signup">
                        Create new account
                    </Link>
                </p>

                <h6 className="or">
                    <span>or</span>
                </h6>
                <div className="google-btn mx-auto">
                    <div className="google-icon-wrapper">
                        <img
                            className="google-icon"
                            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                            alt="Google"
                        />
                    </div>
                    <p className="btn-text">
                        <b>Continue with google</b>
                    </p>
                </div>
            </Form>
        </div>
    );
}

export default Login;
