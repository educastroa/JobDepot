import React from "react";
import { useLocation, Navigate } from "react-router-dom";

import { useAppContext } from "../hooks";

export default function RequireAuth({ children }) {
  const { user } = useAppContext();
  const location = useLocation();
  const pathName = location.pathname.replace("/", "");
  const isUnprotectedRoute = ["login", "register"].includes(pathName);

  if (user == null && !isUnprotectedRoute) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if (user != null && pathName != "") {
  //   return <Navigate to="/" state={{ from: location }} replace />;
  // }

  return children;
}
