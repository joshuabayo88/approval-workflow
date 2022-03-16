import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    console.log("You are a not a User");
    return <Navigate to="/" />;
  } else {
    return children;
  }
  //   return (
  //     <Route
  //       {...rest}
  //       render={(routeProps) =>
  //         !!user ? <RouteComponent {...routeProps} /> : <Navigate to="/" />
  //       }
  //     />
};

export default ProtectedRoute;
