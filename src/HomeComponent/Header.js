// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="logo">Triveni Turbines</div>
            <nav>
                <a href="#Quote">Create New Quote</a>
                <a href="#EditQuote">My Quotations<span>&#x25BC;</span></a>
                <a href="#Download">Download Docs<span>&#x25BC;</span></a>
                <a href="#Profile">User Profile<span>&#x25BC;</span></a>
            </nav>
        </header>
    );
}

export default Header;
