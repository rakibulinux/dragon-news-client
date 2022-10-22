import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { loginUser, setLoading } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        if (user.emailVerified) {
          toast.success(user.displayName, "Login Success");
          navigate(from, { replace: true });
        } else {
          toast.warning("Your mail is not verified");
        }
      })
      .catch((error) => {
        console.log(error.message);
        const errorMsg = error.message;
        console.log(errorMsg);
        toast.warning(errorMsg);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Rmember me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
};

export default Login;
