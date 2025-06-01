import { Link } from 'react-router-dom';
import React from "react";

const Navbar = () => (
  <header className="p-4 bg-white shadow">
    <Link to="/" className="text-2xl font-bold text-blue-600">
      Google Clone 2.0
    </Link>
  </header>
);

export default Navbar;
