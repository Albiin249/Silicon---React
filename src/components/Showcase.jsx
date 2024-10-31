import React from 'react'

import appStore from '/src/assets/images/app-store.svg'
import appStoreDark from '/src/assets/images/appstore-logo-darkmode.svg'

import googlePlayLogo from '/src/assets/images/play-btn-1.svg'
import googlePlayBtn from '/src/assets/images/play-btn-2.svg'
import googlePlayBtnDark from '/src/assets/images/play-btn-2-darkmode.svg'
import googlePlay2 from '/src/assets/images/play-btn-3.svg'
import googlePlay2Dark from '/src/assets/images/play-btn-3-darkmode.svg'

import chevron from '/src/assets/images/chevron.svg'
import chevronDark from '/src/assets/images/chevron-darkmode.svg'

import iphoneBack from '/src/assets/images/iphone-back.svg'
import iphoneFront from "/src/assets/images/iphone-front.svg"
import Navbar from './Navbar'

function Showcase() {
    return (

        <div className='first-page'>
            <div className="container">
                < Navbar />
                <main id="showcase">
                    <h1>Manage All Your<br />Money in One App</h1>
                    <div className="left-side">
                        <section className="manage">
                            <h1>Manage All Your<br />Money in One App</h1>
                            <p className="desktop-p body-l">We offer you a new generation of the mobile banking.<br />Save, spend & manage money in your pocket.</p>
                            <p className="mobile-p body-l">We offer you a new generation of the mobile<br />banking. Save, spend & manage money in<br />your pocket.</p>
                            <p className="tablet-p body-l">We offer you a new generation of<br />the mobile banking.<br />Save, spend & manage money in<br />your pocket. </p>
                        </section>
                        <div className="app-btns">
                            <div className="btn btn-app">
                                <img className="appstore-logo show-light" src={appStore} alt="App store logo" />
                                <img className="appstore-logo show-dark" src={appStoreDark} alt="App store logo" />
                            </div>
                            <div className="btn btn-app btn-googleplay">
                                <img className="googleplay-logo" src={googlePlayLogo} alt="googleplay logo" />
                                <div className="googleplay-text">
                                    <img className="get show-light" src={googlePlayBtn} alt="google play text" />
                                    <img className="get show-dark" src={googlePlayBtnDark} alt="google play text" />
                                    <img className="show-light" src={googlePlay2} alt="google play text" />
                                    <img className="show-dark" src={googlePlay2Dark} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="discover-more">
                        <a className="btn-circle" href="#features">
                            <img className="show-light" src={chevron} alt="chevron icon for button" />
                            <img className="show-dark" src={chevronDark} alt="chevron icon for button" />
                        </a>
                        <p className="body-s">Discover more</p>
                    </div>

                    <aside className="iphones">
                        <img className="iphone-back" src={iphoneBack} alt="iPhone 12 pro" />
                        <img className="iphone-front" src={iphoneFront} alt="iPhone 12 pro" />
                    </aside>

                </main>
            </div>

        </div>

    )
}



export default Showcase