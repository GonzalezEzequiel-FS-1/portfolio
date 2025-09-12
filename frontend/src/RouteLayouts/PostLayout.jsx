import React from "react";
import { Outlet } from "react-router-dom";

const PostLayout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default PostLayout;
