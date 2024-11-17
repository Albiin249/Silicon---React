//Skapat med en del hjälp av ChatGPT.

import React, { createContext, useContext, useState, useEffect } from 'react';


const DarkModeContext = createContext();


export const DarkModeProvider = ({ children }) => {
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
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};


export const useDarkMode = () => useContext(DarkModeContext);
