import React from "react";
import PropTypes from "prop-types";

const LogoutButton = ({ onLogout, redirectPath }) => {
  const handleLogout = () => {
    onLogout();
    window.location.href = redirectPath;
  };

  return <button onClick={handleLogout}>Logout</button>;
};

LogoutButton.propTypes = {
  onLogout: PropTypes.func.isRequired,
  redirectPath: PropTypes.string.isRequired
};

export default LogoutButton;