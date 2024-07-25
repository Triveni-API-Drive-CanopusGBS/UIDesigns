// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">Triveni Turbines</div>
            <nav className="navbar">
                <div className="container">

                    <Link className="nav-link" to="/profile">User Profile </Link>

                    <div className="dropdown">
                        <button className="dropdown-toggle">
                            User Management
                        </button>
                        <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/create-quotation">Create New Quote</Link></li>
                            <li><Link className="dropdown-item" to="/edit-quotations">My Quotations </Link></li>
                            <li><Link className="dropdown-item" to="/download-docs">Download Docs </Link></li>
                            <li><Link className="dropdown-item" to="/adduser">Add User</Link></li>
                            {/* <li><Link className="dropdown-item" to="/edituser/id">Edit User</Link></li> */}
                            <li><Link className="dropdown-item" to="/users">All User Info</Link></li>
                            {/* <span>&#x25BC;</span> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
