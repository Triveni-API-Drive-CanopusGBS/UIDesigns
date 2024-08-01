import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

function Header() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value);
  };
  return (
    <header className="header d-flex align-items-center">
      <div className="logo d-flex align-items-center">
        <img src="/triveni-logo.png" alt="Logo" className="logo-img" />
        <h1 className="header-title align-items-center mb-0">
          ITO API Drive Cost Estimation Tool
        </h1>
      </div>
      <nav className="ms-auto d-flex align-items-center addflex">
        <div className="form-group">
        <label htmlFor="roleSelect ">Change Role</label>
          <select 
            style={{paddingLeft:10, paddingRight:10}}
            id="roleSelect"
            className="form-control"
            value={selectedRole}
            onChange={handleRoleChange}
          >
            <option value="" disabled>
              Please select a Role
            </option>
            <option value="Admin">Admin</option>
            <option value="Engineer">Engineer</option>
            <option value="Reviewer">Reviewer</option>
            <option value="Approver">Approver</option>
          </select>
        </div>

        <div className="dropdown">
          <Link
            className="dropdown-toggle nav-link"
            id="dropdownMenuLink"
            to="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            User Actions
          </Link>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <Link className="dropdown-item" to="/Customer-Details/Subsection1">
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
        <Link id="dropdownMenuLink" className="nav-link ms-2" to="/profile">
          User Profile
        </Link>
      </nav>
    </header>
  );
}

export default Header;
