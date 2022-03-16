import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    console.log("You are a not a User");
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
