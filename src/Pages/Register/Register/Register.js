import { toast } from "react-toastify";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser, updateUser, sendVerification } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser(name, photoURL)
          .then(() => {
            toast.success("Profile updated", { autoClose: 500 });
            form.reset();
          })
          .catch((error) => console.error(error));
        sendVerification()
          .then(() => {
            toast.success("Email send", { autoClose: 500 });
          })
          .catch((error) => console.log(error));
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleCheck = (event) => {
    setAccepted(event.target.checked);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control name="name" type="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>photoURL</Form.Label>
        <Form.Control
          name="photoURL"
          type="photoURL"
          placeholder="Enter photoURL"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleCheck}
          label={
            <>
              Accept <Link to="/terms">Terms & Condition</Link>
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit" disabled={!accepted}>
        Register
      </Button>
    </Form>
  );
};

export default Register;
