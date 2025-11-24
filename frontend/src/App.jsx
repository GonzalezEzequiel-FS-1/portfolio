import React, { useContext, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AuthProvider } from "./auth/UseAuth";
import UserLayout from "./RouteLayouts/UserLayout";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import Login from "./pages/Login";
import AdminPanel from "./AdminPanel/AdminPanel";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import AdminLayout from "./RouteLayouts/AdminLayout";
import PostLayout from "./RouteLayouts/PostLayout";
import { ThemeContext } from "./Theming/mantineColorScheme";
import IndividualPost from "./pages/IndividualPost";
import { PostProvider } from "../context/PostContext";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Showcase from "./pages/Showcase.jsx"
import CardSection from "./components/cards/cardSection/CardSection";
import { analytics } from "../firebaseConfig";
import { logEvent } from "firebase/analytics";

// Wrapper to track page views
const RouteTracker = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    logEvent(analytics, "page_view", { page_path: location.pathname });
  }, [location]);
  return children;
};

const App = () => {
  const { bg } = useContext(ThemeContext);
  return (
    <Router>
      <RouteTracker>
        <AuthProvider>
          <PostProvider>
            <div
              className={`${bg} min-h-screen flex flex-col w-screen overflow-x-hidden`}
            >
              <Routes>
                {/* User-facing pages */}
                <Route element={<UserLayout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutMe />} />
                  <Route path="/contact" element={<ContactMe />} />
                  <Route path="/projects" element={<Showcase />} />
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
      </RouteTracker>
    </Router>
  );
};

export default App;
