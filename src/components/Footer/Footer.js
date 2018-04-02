import React from 'react';
import './Footer.css';
import blogo from '../../Wintendo.png'
import line from '../../line.png'

const Footer = (() => 
    
    <div className="footer">
        <div className="created-by">
            <img className="blogo" src={blogo} alt="Bottom-Logo"/>
            <img className="line" src={line} alt="Divider"/>
            <div className="create-card">
                <p className="myA">myAmiibo</p>
                <p className="cBy">CREATED BY</p>
                <p className="ww">WILLIAM WON</p> 
            </div>
        </div>
    </div>
)

export default Footer;