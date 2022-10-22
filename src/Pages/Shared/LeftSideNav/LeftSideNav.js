import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const LeftSideNav = () => {
  const { categories } = useContext(AuthContext);
  return (
    <div>
      {categories.map((category) => (
        <p key={category.id}>
          <Link
            to={`/category/${category.id}`}
            className="text-decoration-none"
          >
            {category.name}
          </Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
