import React from 'react'


import siliconLogo from '/src/assets/images/silicon-logo.svg'
import siliconLogoDark from '/src/assets/images/silicon-logo-darkmode.svg'

import hambMeny from '/src/assets/images/hamb-meny.svg'
import hambMenyDark from '/src/assets/images/hamb-meny-darkmode.svg'

import loginLogo from '/src/assets/images/login-logo.svg'
import DarkModeToggle from './Darkmode'
import HambMeny from './HambMeny'

function Navbar() {
    return (

        <nav>
            <a href="#">
                <img className="show-light" src={siliconLogo} alt="Silicon Logotype" />
                <img className="show-dark" src={siliconLogoDark} alt="Silicon Logotype" />
            </a>
            <a className="features" href="#">Features</a>

            <DarkModeToggle />
            <HambMeny />

            <a href="#" className="btn signin-btn">
                <img src={loginLogo} alt="Login logo" />
                <span>Sign in / up</span>
            </a>
        </nav>

    )
}

export default Navbar