<<<<<<< HEAD
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./Home/Header";
import AddUser from "./UserManagement/AddUser";
import EditUser from "./UserManagement/EditUser";
import AllUsersInfo from "./UserManagement/AllUsersInfo";
import ProfileData from "./UserManagement/ProfileData";
import Footer from "./Home/Footer";
import Home from "./Home/Home";
import NotFound from "./Home/NotFound";
import CreateQuote from "./CreateQuote";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div >

          <div className="main-content container-fluid">
              <Routes>
                <Route exact path="/" Component={Home} />
                <Route path="/profile" Component={ProfileData} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/edituser/:id" element={<EditUser />} />
                <Route path="/users" element={<AllUsersInfo />} />
                <Route path="/create-quotation" element={<CreateQuote />} />
                {/* <Route path="/edit-quotations" element={<CreateQuote />} /> */}
                <Route path="*" Component={NotFound} />
              </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
=======
import React from 'react';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import "./Components/Sidebar.css";
import "./Components/MainContent.css";
import './App.css';

const App = () => {
    return (
      
        <div className="app-container">
            <Sidebar />
            <MainContent />
        </div>
    );
>>>>>>> feature
};

export default App;
