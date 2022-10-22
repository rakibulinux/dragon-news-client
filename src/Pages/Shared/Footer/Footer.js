import React from "react";
import { FaBootstrap, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="container">
      <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div class="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <FaBootstrap />
          </Link>
          <span class="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <Link class="text-muted" to="#">
              <FaTwitter />
            </Link>
          </li>
          <li class="ms-3">
            <Link class="text-muted" to="#">
              <FaFacebook />
            </Link>
          </li>
          <li class="ms-3">
            <Link class="text-muted" to="#">
              <FaYoutube />
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
