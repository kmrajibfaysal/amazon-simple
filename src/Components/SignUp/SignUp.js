/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two passwords did not match.');
            return;
        }

        if (password.length < 6) {
            setError('Your password must be at least 6 characters long.');
            return;
        }

        console.log('user created!');
        console.log(email);
        createUserWithEmailAndPassword(email, password);
    };

    if (user) {
        navigate('/home');
    }

    return (
        <div className="form-container">
            <h2 className="form-title">Sign Up</h2>

            <Form onSubmit={handleCreateUser} className="form">
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
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        onBlur={handleConfirmPasswordBlur}
                        type="password"
                        placeholder="Password"
                        required
                    />
                </Form.Group>
                {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <p className="text-danger my-3">{error}</p>
                <input
                    className="login-btn fw-normal test okay ola"
                    type="submit"
                    value="Sign Up"
                />

                <p className="text-center new-signup">
                    Already have an account?{' '}
                    <Link className="orange-text" to="/login">
                        Login
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

export default SignUp;
