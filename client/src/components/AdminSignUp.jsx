import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

function AdminSignUp() {
  const [values, setValues] = useState({
    name: "",
    domain: "",
    password: "",
    location: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { ...values };
    console.log(JSON.stringify(formData));
  };
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-card card border  p-4">
      <div className="card border border-primary">
        <div className="card-header bg-primary text-white text-center">
          NGO Sign up
        </div>
        <div className="card-body bg-gray">
          <Form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <Form.Group className="mb-3">
              <Form.Label>NGO Name</Form.Label>
              <Form.Control
                type="text"
                id="name"
                name="name"
                placeholder="Enter name"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Domain</Form.Label>
              <Form.Control
                type="domain"
                id="domain"
                name="domain"
                placeholder="domain"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label> Location</Form.Label>
              <Form.Control
                type="location"
                placeholder="location"
                id="location"
                name="location"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign up
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default AdminSignUp;
