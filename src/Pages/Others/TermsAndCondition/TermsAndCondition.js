import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <h2>Terms And Condition</h2>
      <p>
        TermsAndCondition accepted <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default TermsAndCondition;
