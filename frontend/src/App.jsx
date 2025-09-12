import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/useAuth";

import UserLayout from "./RouteLayouts/UserLayout";
import Home from "./pages/Home";
import BlogPage from "../src/pages/BlogPage";
import Login from "./pages/Login";
import AdminPanel from "./AdminPanel/AdminPanel";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import AdminLayout from "./RouteLayouts/AdminLayout";

const App = () => {
  return (
    <Router>
      <AuthProvider>
        <div className="bg-slate-950 min-h-screen flex flex-col w-screen overflow-x-hidden">
          <Routes>
            {/* User-facing pages */}
            <Route element={<UserLayout />}>
              <Route path="*" element={<Home />} />
              <Route path="/blogs" element={<BlogPage />} />
            </Route>

            {/* Admin pages */}
            <Route element={<AdminLayout />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blogpost" element={<AdminPanel />} />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
