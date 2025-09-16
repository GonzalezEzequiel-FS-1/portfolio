import React from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/footer/Footer";

//import { FooterLinks } from "../components/footer/FooterNew";
const UserLayout = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <NavigationBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
