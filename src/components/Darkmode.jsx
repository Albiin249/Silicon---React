import React from 'react';
import { useDarkMode } from './DarkModeContext';

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useDarkMode();

    return (
        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
            <span className="label">Dark mode</span>
            <label htmlFor="darkmode-switch" className="toggle-switch">
                <input
                    id="darkmode-switch"
                    type="checkbox"
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default DarkModeToggle;
