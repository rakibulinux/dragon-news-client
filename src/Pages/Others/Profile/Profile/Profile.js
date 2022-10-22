import React, { useContext, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../../contexts/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(user.displayName);

  //   const NameRef = useRef(user.displayName);
  const PhotoURLRef = useRef(user.photoURL);
  //   const PasswordRef = useRef(user.password);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(PhotoURLRef.current.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          readOnly
          defaultValue={user?.email}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control
          onChange={handleNameChange}
          defaultValue={name}
          name="name"
          type="text"
          placeholder="Name"
        />
      </Form.Group>

      {/* Photo URL */}
      <Form.Group className="mb-3" controlId="formBasicPhoto URL">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control
          ref={PhotoURLRef}
          defaultValue={user.photoURL}
          name="Photo URL"
          type="text"
          placeholder="Photo URL"
        />
      </Form.Group>

      {/* Password */}
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Profile;
