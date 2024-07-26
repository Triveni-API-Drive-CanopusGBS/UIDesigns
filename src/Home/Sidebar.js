import React, { useState } from 'react';
import './Sidebar.css';

const sidebarItems = [
    'Customer Details',
    'Technical Inputs',
    '1. Technical Specifications',
    '2. Perf Params',
    '3. Utilities',
    '4. Broad Scope',
    '5. List of Sub Suppliers',
    '6. Tools & Tackles',
    '7. Steam Turbine',
    '8. Turbine Perf Curve',
    '9. Turbine GAD',
    '10. Chapter 10'
];

function Sidebar({ onSelect }) {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index, item) => {
        setActiveIndex(index);
        if (onSelect) {
            onSelect(item);
        }
    };

    return (
        <aside className="sidebar">
            <ul>
                {sidebarItems.map((item, index) => (
                    <li 
                        key={index} 
                        className={activeIndex === index ? 'active' : ''} 
                        onClick={() => handleClick(index, item)}
                    >
                        {item}
                        {index === 2 && (
                            <ul 
                            key={index} 
                            className={activeIndex === index ? 'active hover-links' : ''} >
                                <li onClick={() => handleClick(index, item)}>Electrical</li>
                                <li onClick={() => handleClick(index, item)}>Mechanical</li>
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar;
