import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/home">Home</Link> | 
      <Link to="/balance">Balance Enquiry</Link> | 
      <Link to="/transfer">Transfer</Link> | 
      <Link to="/profile">Profile</Link> | 
      <Link to="/contact">Contact</Link> | 
      <Link to="/about">About</Link>
    </nav>
  );
}

export default Navbar;
