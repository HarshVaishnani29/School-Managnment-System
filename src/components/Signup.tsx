import React from 'react';
import './SignupComponent.css'; // Custom CSS for images
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import { Button, Form } from 'react-bootstrap';

const Signup: React.FC = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Sign Up
          </Button>
        </Form>
      </div>
      <div className="signup-image">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Signup;
