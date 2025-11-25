import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../auth/UseAuth";

const PrivateRoute = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  const publicPaths = ["/dealer"]; // add more if needed

  if (loading) return null;

  // Skip redirect if current path starts with a public path
  if (!user && !publicPaths.some(path => location.pathname.startsWith(path))) {
    return <Navigate to="/login" replace />;
  }

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default PrivateRoute;
