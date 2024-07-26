import React from 'react';
import './MainContent.css';
import SubMenu1 from '../New-Draft-Folder/Technical Specifications/SubMenu3';
import SubMenu2 from '../New-Draft-Folder/Technical Specifications/SubMenu3';
import SubMenu3 from '../New-Draft-Folder/Technical Specifications/SubMenu3';

const componentMapping = {
    'SubMenu1': SubMenu1,
    'SubMenu2': SubMenu2,
    'SubMenu3': SubMenu3,
    // 'Profile Info': Profile,
    // 'Contact Info': Contact,
    // 'Address': Address,
    // Add mappings for other submenu items...
};

function MainContent({ subMenuItem }) {
    const SelectedComponent = componentMapping[subMenuItem] || DefaultComponent;

    return (
        <main className="main-content">
            <SelectedComponent />
        </main>
    );
}

// Optional: Create a default component to show when no submenu item is selected
const DefaultComponent = () => (
    <div >
        <h2>Welcome</h2>
        <p>Select a section from the sidebar to view content.</p>
    </div>
);

export default MainContent;
