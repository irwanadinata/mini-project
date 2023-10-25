import React from "react";
import { Link } from "react-router-dom";

function Button({ label, to, target, className, onClick }) {
  if (to) {
    return (
      <Link to={to} target={target} className={className}>
        {label}
      </Link>
    );
  } else {
    return (
      <button className={className} onClick={onClick}>
        {label}
      </button>
    );
  }
}

export default Button;