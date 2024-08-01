import React, { useState, useEffect } from 'react';
import './SubMenu.css';

function SubMenu({ sidebarItem, onSelect }) {
    const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);
    const [subMenuItems, setSubMenuItems] = useState([]);

    useEffect(() => {
        setSubMenuItems(getSubMenuItems(sidebarItem));
        setActiveSubMenuIndex(null); // Reset active index when sidebarItem changes
    }, [sidebarItem]);

    const handleSubMenuClick = (index) => {
        const selectedItem = subMenuItems[index];
        setActiveSubMenuIndex(index);
        if (typeof onSelect === 'function') {
            onSelect(selectedItem); // Pass selected item to parent
        } else {
            console.error('onSelect is not a function');
        }
    };

    return (
        <nav className="submenu">
            <ul>
                {subMenuItems.map((item, index) => (
                    <li 
                        key={index} 
                        className={activeSubMenuIndex === index ? 'active' : ''}
                        onClick={() => handleSubMenuClick(index)}
                    >
                        {item}
                    </li>
                ))} 
            </ul>
        </nav>
    );
}

function getSubMenuItems(sidebarItem) {
    const subMenuData = {
        'Customer Details': ['Personal Info', 'Contact Info', 'Address'],
        'Technical Inputs': ['Input Specs', 'Load Data'],
        // '1. Technical Specifications': ['SubMenu1', 'SubMenu2', 'SubMenu3'],
        'Electrical': ['SubMenu1', 'SubMenu2', 'SubMenu3'],
        'Mechanical': ['SubMenu1', 'SubMenu2', 'SubMenu3'],
        '2. Perf Params': ['SubMenu1', 'SubMenu2', 'SubMenu3'],
        '3. Utilities': ['SubMenu1', 'SubMenu2', 'SubMenu3'],
        '4. Broad Scope': ['SubMenu1', 'SubMenu2', 'SubMenu3'],
        '5. List of Sub Suppliers': ['SubMenu1', 'SubMenu2', 'SubMenu3'],
        '6. Tools & Tackles': ['SubMenu1', 'SubMenu2', 'SubMenu3'],
        '7. Steam Turbine': ['SubMenu1', 'SubMenu2', 'SubMenu3'],
        '8. Turbine Perf Curve': ['SubMenu1', 'SubMenu2', 'SubMenu3'],
        '9. Turbine GAD': ['SubMenu1', 'SubMenu2', 'SubMenu3'],
        '10. Chapter 10': ['SubMenu1', 'SubMenu2', 'SubMenu3'],
    };
    return subMenuData[sidebarItem] || [];
}

export default SubMenu;
