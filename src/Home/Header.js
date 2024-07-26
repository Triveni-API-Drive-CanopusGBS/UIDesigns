// src/components/Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="./triveni-logo.png" alt="Logo" />
        <h1>ITO API Drive Cost Estimation Tool</h1>
      </div>
      <nav>
        <div className="container">
          <div className="dropdown">
            <button className="dropdown-toggle">User Actions</button>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/create-quotation">
                  Create New Quote
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/edit-quotations">
                  My Quotations
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/download-docs">
                  Download Docs
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/adduser">
                  Add User
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/users">
                  All User Info
                </Link>
              </li>
            </ul>
          </div>
          <Link className="nav-link" to="/profile">
            User Profile
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
