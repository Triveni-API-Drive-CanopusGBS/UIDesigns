// src/components/CostSheet.js
import React from 'react';
import './CostSheet.css';

function CostSheet() {
    return (
        <div className="cost-sheet">
            <h3>Total Estimate Cost: SEA21905008-20240702-174312</h3>
            <div className="section">
                <h4>Flange to Flange</h4>
                <p>Steam Turbine: 74,87,181</p>
                <p>Step Down Gear Box: 14,75,003</p>
                <p>High & Low Speed: 2,15,250</p>
                <p>Lube & Control Oil: 6,98,132</p>
                <p>Turbine Material: 98,76,566</p>
            </div>
            <div className="section">
                <h4>F2F Add-Ons</h4>
                <p>Oil Mist Separator: 3,50,000</p>
                <p>AC Motor (AC-M): 0</p>
                <p>DC Motor (DC-M): 0</p>
                <p>Turbine Governing: 0</p>
                <p>Turbine Vibration: 9,33,750</p>
                <p>Total F2F Add-Ons: 12,83,750</p>
            </div>
            <div className="section">
                <h4>Shop Conversion</h4>
                <p>Shop Conversion: 21,27,000</p>
                <p>Sub-Contracting: 13,76,000</p>
                <p>Total F2F Cost: 1,46,63,316</p>
            </div>
            <div className="section">
                <h4>DBO Mechanical</h4>
                <p>Interconnecting Pipe: 3,00,000</p>
            </div>
        </div>
    );
}

export default CostSheet;
