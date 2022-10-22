import React, { useContext } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import LeftSideNav from "../LeftSideNav/LeftSideNav";

const Header = () => {
  const { user, providerLogOut, categories } = useContext(AuthContext);

  const handleLogOut = () => {
    providerLogOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        className="mb-2"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-decoration-none">
              Dragon News
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink
                className="ms-2 text-decoration-none p-2"
                to="/category/08"
              >
                All News
              </NavLink>
              <NavLink className="ms-2 text-decoration-none p-2" to="/pricing">
                Pricing
              </NavLink>
              <NavDropdown title="More Category" id="collasible-nav-dropdown">
                {categories.map((category) => (
                  <NavLink
                    className="p-2 d-flex text-decoration-none"
                    to={`/category/${category.id}`}
                    key={category.id}
                  >
                    {category.name}
                  </NavLink>
                ))}
              </NavDropdown>
            </Nav>

            <Nav className="d-flex align-items-center">
              {user?.uid ? (
                <>
                  <span>{user?.displayName}</span>
                  <Button onClick={handleLogOut} className="me-2 ms-2">
                    LogOut
                  </Button>
                </>
              ) : (
                <>
                  <Link className="text-decoration-none ms-2 ps-2" to="/login">
                    Login
                  </Link>
                  <Link
                    className="text-decoration-none ms-2 ps-2 me-2"
                    to="/register"
                  >
                    Register
                  </Link>
                </>
              )}
              <Link to="/profile">
                {user?.photoURL ? (
                  <Image
                    src={user?.photoURL}
                    style={{
                      height: "40px",
                    }}
                    roundedCircle
                  />
                ) : (
                  <FaUser />
                )}
              </Link>
            </Nav>
            <div className="d-lg-none">
              <LeftSideNav />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
