import React, { useState, useEffect } from 'react';

const DropdownInput = () => {
    const [inputValue, setInputValue] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [options, setOptions] = useState(['Option 1', 'Option 2', 'Option 3']);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleOptionClick = (option) => {
        setInputValue(option);
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

    const handleChevronClick = () => {
        setIsDropdownOpen((prev) => !prev);
    };


    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick); // Städa upp eventlyssnare
        };
    }, []);

    return (
        <div className="dropdown">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onClick={handleInputClick}
                placeholder=""
            />
            <div className={`chevron ${isDropdownOpen ? 'open' : ''}`}
                onClick={handleChevronClick}
            />
            {isDropdownOpen && (
                <ul className="dropdown-list">
                    {options
                        .filter((option) => option.toLowerCase().includes(inputValue.toLowerCase()))
                        .map((option, index) => (
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
