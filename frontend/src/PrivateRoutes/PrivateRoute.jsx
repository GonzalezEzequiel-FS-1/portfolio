import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../auth/UseAuth";

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) return <Navigate to="/login" replace />;

  return (
    <main>
      <Outlet />
    </main>
  );
};

export default PrivateRoute;
