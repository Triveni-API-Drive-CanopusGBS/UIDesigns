// src/App.js
import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

import Sidebar from "./Home/Sidebar";
import SubMenu from "./Home/SubMenu";
import MainContent from "./Home/MainContent";
import CostSheet from "./Home/CostSheet";
import "./App.css";

function CreateQuote() {
  const [selectedSidebarItem, setSelectedSidebarItem] =
    useState("Customer Details");
  const [selectedSubMenuItem, setSelectedSubMenuItem] = useState("");

  return (
    <div className="App">
      <div className="container">
        <Sidebar onSelect={setSelectedSidebarItem} />
        <div className="main-section">
          <SubMenu
            sidebarItem={selectedSidebarItem}
            onSelect={setSelectedSubMenuItem}
          />
          <div className="box">
            <MainContent subMenuItem={selectedSubMenuItem} />
            <CostSheet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateQuote;
