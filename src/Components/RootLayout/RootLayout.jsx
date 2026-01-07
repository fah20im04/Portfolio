import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navbar - fixed, always visible */}
      <Navbar />

      {/* Page Content */}
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
