import React from 'react';
import Profile from './Profile';
import '../styles/layout/header-bar.css';

function HeaderBar() {
    return (
        <header className="header-bar">
            <div className="header-bar__inner">
                <Profile />
            </div>
        </header>
    );
}

export { HeaderBar };