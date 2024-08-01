import React from 'react';
import { useParams, Route, Routes, NavLink } from 'react-router-dom';
import './MainContent.css';
import Header from './Header'
import AddUser from './../UserManagement/AddUser';
import ProfileData from './../UserManagement/ProfileData';
import AllUsersInfo from './../UserManagement/AllUsersInfo';
import EditUserPage from './../UserManagement/EditUser';

const subSections = ['Subsection1', 'Subsection2', 'Subsection3'];

const MainContent = () => {
    return (
        <div className="main-content">
            <Header />
            <div className='d-flex'>
                    <Routes>
                        <Route path="/" element={<DefaultContent />} />
                        <Route path="/edit-quotations" element={<DefaultContent />} />
                        <Route path="/:section/*" element={<SectionContent />} />
                        <Route path="/profile" element={<ProfileData />} />
                        <Route path="/download-docs" element={<DefaultContent />} />
                        <Route path="/adduser" element={<AddUser />} />
                        <Route path="/users" element={<AllUsersInfo />} />
                        <Route path="/Customer-Deatils" element={<DefaultContent />} />
                        <Route path="/edituser/:id" element={<EditUserPage />} />
                    </Routes>
               
                {/* <CostSheet /> */}
            </div>
        </div>
    );
};

const SectionContent = () => {
    const { section } = useParams();
    return (
        <div style={{width:1200}}>
            <h1>{section.replace(/-/g, " ")}</h1>
            <nav className="sub-section-nav ">
                {subSections.map((subSection, index) => (
                    <NavLink to={`${subSection}`} key={index}>
                        {subSection}
                    </NavLink>
                ))}
            </nav>
            <Routes>
                <Route path=":subSection" element={<SubSectionContent />} />
            </Routes>
        </div>
    );
};

const SubSectionContent = () => {
    const { section, subSection } = useParams();
    return (
        <div>
            <h2>{subSection}</h2>
            <p>This is the content for {subSection} under {section}.</p>
        </div>
    );
};

const DefaultContent = () => {
    return (
        <div>
            <h1>Main Content Area</h1>
            <p>This is where the routed content will be displayed.</p>
        </div>
    );
};

export default MainContent;
