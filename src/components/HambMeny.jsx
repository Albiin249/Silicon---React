import { useState, useEffect } from 'react';
import hambMeny from '/src/assets/images/hamb-meny.svg'
import hambMenyDark from '/src/assets/images/hamb-meny-darkmode.svg'

import React from 'react'

function HambMeny() {
    const [menu, setMenu] = useState()
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(prev => !prev)
    }

    //Skapat med lite hjälp av ChatGPT.
    useEffect(() => {
        const clickOutside = (event) => {
            if (!event.target.closest('.hamb-meny') && !event.target.closest('.popout-menu')) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', clickOutside);

        return () => {
            document.removeEventListener('mousedown', clickOutside);
        };
    }, []);


    return (
        <div style={{ position: "relative" }}>
            <button onClick={toggleMenu} className="hamb-meny menu-toggle">
                <img className="show-light" src={hambMeny} alt="Menu for mobile/tablet screens" />
                <img className="show-dark" src={hambMenyDark} alt="Menu for mobile/tablet screens" />
            </button>
            {showMenu ? <div className="popout-menu">
                <ul>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Login/Sign up</a></li>
                </ul>
            </div> : false}
        </div>
    )
}

export default HambMeny