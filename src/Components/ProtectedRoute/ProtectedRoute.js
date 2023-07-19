import React from "react";
import { Navigate } from "react-router-dom";
import { checkUser } from "../../common/services/AuthService";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  console.log("element: ", Component);

  // Check if the user is authenticated
  if (checkUser()) {
    return <Component />;
  } else {
    return (
      <Navigate to="/auth" replace />
    );
  }
};

export default ProtectedRoute;
