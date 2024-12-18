import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold" href="#home">Homestay Training</div>
      <div className="space-x-4">
        <a href="#templates" className="text-white hover:underline">
          Download Templates
        </a>
        <a href="#modules" className="text-white hover:underline">
          Marketing Support
        </a>
        <a href="feedback" className="text-white hover:underline">
          Guest Feedback
        </a>
        <a href="#modules" className="text-white hover:underline">
          Peer Connection
        </a>
      </div>
      <div>
        <Link to="/login" className="text-white mr-4 hover:underline">
          Login
        </Link>
        <Link to="/register" className="text-white hover:underline">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
