import React from 'react'


import siliconLogo from '/src/assets/images/silicon-logo.svg'
import siliconLogoDark from '/src/assets/images/silicon-logo-darkmode.svg'


import loginLogo from '/src/assets/images/login-logo.svg'
import DarkModeToggle from './Darkmode'
import HambMeny from './HambMeny'

import { Link, NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'active-link' : ''}
            >
                <img className="show-light" src={siliconLogo} alt="Silicon Logotype" />
                <img className="show-dark" src={siliconLogoDark} alt="Silicon Logotype" />
            </NavLink>
            <NavLink to="#features" className="features">
                Features
            </NavLink>
            <NavLink
                to="/contact"
                className={({ isActive }) => isActive ? 'features active-link' : 'features'}
            >
                Contact
            </NavLink>

            <DarkModeToggle />
            <HambMeny />

            <Link to="#" className="btn signin-btn">
                <img src={loginLogo} alt="Login logo" />
                <span>Sign in / up</span>
            </Link>
        </nav>


    )
}

export default Navbar