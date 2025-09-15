import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./auth/UseAuth";

import UserLayout from "./RouteLayouts/UserLayout";
import Home from "./pages/Home";
import BlogPage from "../src/pages/BlogPage";
import Login from "./pages/Login";
import AdminPanel from "./AdminPanel/AdminPanel";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import AdminLayout from "./RouteLayouts/AdminLayout";
import PostLayout from "./RouteLayouts/PostLayout";
import { ThemeContext } from "./Theming/mantineColorScheme";
import IndividualPost from "./pages/IndividualPost";
import { PostProvider } from "../context/PostContext";

const App = () => {
  const { bg } = useContext(ThemeContext);
  return (
    <Router>
      <AuthProvider>
        <PostProvider>
          <div
            className={`${bg} min-h-screen flex flex-col w-screen overflow-x-hidden`}
          >
            <Routes>
              {/* User-facing pages */}
              <Route element={<UserLayout />}>
                <Route path="/" element={<Home />} />
              </Route>

              {/* Admin pages */}
              <Route element={<AdminLayout />}>
                <Route path="/login" element={<Login />} />
              </Route>

              {/* Protected admin pages */}
              <Route element={<PrivateRoute />}>
                <Route path="/blogpost" element={<AdminPanel />} />
              </Route>

              {/* Blog pages */}
              <Route element={<PostLayout />}>
                <Route path="/blogs" element={<BlogPage />} />
                <Route path="/blogs/:id" element={<IndividualPost />} />
              </Route>

              {/* Fallback */}
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
        </PostProvider>
      </AuthProvider>
    </Router>
  );
};
export default App;
