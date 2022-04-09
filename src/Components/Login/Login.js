import React from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className="form-container">
            <h2 className="form-title">Login</h2>

            <Form className="form">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <button className="login-btn" type="submit">
                    Login
                </button>
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
