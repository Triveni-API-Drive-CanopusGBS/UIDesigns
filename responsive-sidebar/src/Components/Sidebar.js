import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const sections = [
    { name: 'Customer-Details', icon: 'fa-user' },
    { name: 'Technical-Inputs', icon: 'fa-cogs' },
    { name: 'Technical-Specifications', icon: 'fa-list' },
    { name: 'Perf-Params', icon: 'fa-chart-line' },
    { name: 'Utilities', icon: 'fa-tools' },
    { name: 'Broad-Scope', icon: 'fa-sitemap' },
    { name: 'List-of-Sub-Suppliers', icon: 'fa-truck' },
    { name: 'Tools-&-Tackles', icon: 'fa-wrench' },
    { name: 'Steam-Turbine', icon: 'fa-fan' },
    { name: 'Turbine-Perf-Curve', icon: 'fa-wave-square' },
    { name: 'Turbine-GAD', icon: 'fa-drafting-compass' },
    { name: 'Chapter-10', icon: 'fa-book' }
];

const Sidebar = () => {
    const [expanded, setExpanded] = React.useState(false);

    const toggleSidebar = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`sidebar ${expanded ? 'expanded' : ''}`}>
            <div className="menu-icon" onClick={toggleSidebar}>
                &#9776;
            </div>
            {sections.map((section, index) => (
                <div key={index} className="section">
                    <Link to={`/${section.name}`} className="section-header">
                        <i className={`fas ${section.icon}`} style={{fontSize:15}}></i>
                        {expanded && <span>{section.name}</span>}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
