import { toast } from "react-toastify";
import React, { useContext } from "react";
import { Button, ButtonGroup, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaTwitch,
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import BrandCarousel from "../BrandCarousel/BrandCarousel";

const RightSideNav = () => {
  const { user, signInWIthGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleGoogleSignIn = () => {
    signInWIthGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { location: true });
        toast.success("Login Success");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {user?.uid ? (
        ""
      ) : (
        <>
          <ButtonGroup vertical>
            <Button
              onClick={handleGoogleSignIn}
              className="mb-2"
              variant="outline-primary"
            >
              <FaGoogle className="me-2" />
              Login with Google
            </Button>
            <Button variant="outline-dark">
              <FaGithub className="me-2" />
              Login with GitHub
            </Button>
          </ButtonGroup>
        </>
      )}

      <div className="my-4">
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2">
            <FaFacebook className="me-2" />
            FaceBook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaWhatsapp className="me-2" />
            WhatsApp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitter className="me-2" />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaTwitch className="me-2" />
            Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mb-2">
            <FaYoutube className="me-2" />
            YouTube
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel />
      </div>
    </div>
  );
};

export default RightSideNav;
