import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>MyBank</h1>
      <nav>
        <Link to="/home">Home</Link> | 
        <Link to="/balance">Balance</Link> | 
        <Link to="/transfer">Transfer</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/contact">Contact</Link> | 
        <Link to="/about">About</Link>|
        <Link to="/register">Register</Link>|
        <Link to="/login">Login</Link>|
      </nav>
    </header>
  );
}
