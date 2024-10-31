import React from 'react'

import logoOne from '/src/assets/images/logo-1.svg'
import logoTwo from '/src/assets/images/logo-2.svg'
import logoThree from '/src/assets/images/logo-3.svg'
import logoFour from '/src/assets/images/logo-4.svg'
import logoFive from '/src/assets/images/logo-5.svg'
import logoSix from '/src/assets/images/logo-6.svg'

function Logos() {
    return (
        <div className="second-page">
            <div className="container">
                <header>
                    <div className="box">
                        <img src={logoOne} alt="Logoipsum" />
                    </div>
                    <div className="box">
                        <img src={logoTwo} alt="Logoipsum" />
                    </div>
                    <div className="box">
                        <img src={logoThree} alt="Logoipsum" />
                    </div>
                    <div className="box">
                        <img src={logoFour} alt="Logoipsum" />
                    </div>
                    <div className="box box-desktop">
                        <img src={logoFive} alt="Logoipsum" />
                    </div>
                    <div className="box box-desktop">
                        <img src={logoSix} alt="Logoipsum" />
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Logos