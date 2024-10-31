import { useState, useEffect } from 'react';

function DarkModeToggle() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Kontrollera tidigare värde för dark mode från localStorage
        const hasDarkmode = localStorage.getItem('darkmode');

        if (hasDarkmode == null) {
            // Använd systemets preferens om inget värde är satt i localStorage
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        } else if (hasDarkmode === 'on') {
            enableDarkMode();
        } else if (hasDarkmode === 'off') {
            disableDarkMode();
        }
    }, []);

    const enableDarkMode = () => {
        setIsDarkMode(true);
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkmode', 'on');
    };

    const disableDarkMode = () => {
        setIsDarkMode(false);
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkmode', 'off');
    };

    const toggleDarkMode = () => {
        if (isDarkMode) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    };

    return (
        <div>
            <label htmlFor="darkmode-switch">Dark Mode</label>
            <input
                id="darkmode-switch"
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
            />
        </div>
    );
}

export default DarkModeToggle;
