import React, { useRef, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import BlogPage from "./pages/BlogPage";
import Login from "./pages/Login";
import { AuthProvider } from "./auth/useAuth";
import AdminPanel from "./AdminPanel/AdminPanel";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import Footer from "./components/footer/Footer";

const App = () => {
  const homeRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  const scrollToTop = () => {
    homeRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Router>
      <AuthProvider>
        <div className="bg-slate-950 min-h-screen flex flex-col justify-start w-screen overflow-x-hidden">
          {/* Pass scroll container ref */}
          <NavigationBar scrollY={scrollY} scrollToTop={scrollToTop} />

          <Routes>
            <Route
              path="/"
              element={<Home ref={homeRef} onScrollChange={setScrollY} />}
            />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <PrivateRoute>
                  <AdminPanel />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
};

export default App;
