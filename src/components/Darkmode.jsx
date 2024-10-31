import React, { useState, useEffect } from 'react';
//Lite hjälp från ChatGPT.
const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const hasDarkMode = localStorage.getItem('darkmode');
        return hasDarkMode === 'on' || (hasDarkMode === null && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
            localStorage.setItem('darkmode', 'on');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('darkmode', 'off');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

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
