import React, { useState, useEffect } from 'react';

const DropdownInput = ({ value, onChange, name }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [options] = useState(['Option 1', 'Option 2', 'Option 3']); // Alternativen

    const handleOptionClick = (option) => {
        // Skicka tillbaka ett simulerat event till onChange för att uppdatera värdet i ContactForm
        onChange({ target: { name: name, value: option } });
        setIsDropdownOpen(false);
    };

    const handleInputClick = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    const handleOutsideClick = (event) => {
        if (event.target.closest('.dropdown') === null) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    return (
        <div className="dropdown">
            <input
                type="text"
                name={name}
                value={value}
                onClick={handleInputClick}
                readOnly
                placeholder="Select an option"
            />
            <div className={`chevron ${isDropdownOpen ? 'open' : ''}`} onClick={handleInputClick} />
            {isDropdownOpen && (
                <ul className="dropdown-list">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default DropdownInput;
