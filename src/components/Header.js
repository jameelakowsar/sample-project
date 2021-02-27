import React from 'react';

const Header = () => {
        return (
                <nav className="navBar">
                <div className="companyContainer">
                    <span className="captain-text">Captain</span>
                    <span className="companyName">Marvel</span>
                </div>
                <div className="left-bar">
                    <div className="mail-container">
                        <button className="mail-text">hakunamatata@gmail.com</button>
                    </div>
                    <div className="logout-content">
                        <span className="logout-text">Logout</span>
                    </div>
                </div>
                </nav>
        )
    }

export default Header    