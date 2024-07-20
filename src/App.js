// src/App.js
import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './HomeComponent/Header';
import Footer from './HomeComponent/Footer';
import Sidebar from './HomeComponent/Sidebar';
import SubMenu from './HomeComponent/SubMenu';
import MainContent from './HomeComponent/MainContent';
import CostSheet from './HomeComponent/CostSheet';
import './App.css';

function App() {
    const [selectedSidebarItem, setSelectedSidebarItem] = useState('Customer Details');
    const [selectedSubMenuItem, setSelectedSubMenuItem] = useState('');

    return (
        <div className="App">
            <Header />
            <div className="container">
                <Sidebar onSelect={setSelectedSidebarItem} />
                <div className="main-section">
                    <SubMenu sidebarItem={selectedSidebarItem} onSelect={setSelectedSubMenuItem} />
                   <div className="box">
                      <MainContent subMenuItem={selectedSubMenuItem} />
                      <CostSheet />
                   </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
