import React from 'react'

import iphoneLeft from '/src/assets/images/iphone-left.svg'
import iphoneMid from '/src/assets/images/iphone-mid.svg'
import iphoneRight from '/src/assets/images/iphone-right.svg'

import tabletIphoneLeft from '/src/assets/images/tablet-iphone-left.svg'
import tabletIphoneMid from '/src/assets/images/tablet-iphone-mid.svg'
import tabletIphoneMidContent from '/src/assets/images/tablet-iphone-mid-2.svg'
import tabletIphoneRight from '/src/assets/images/tablet-iphone-right.svg'

function Howdoesitwork() {
    return (
        <div className="third-page">

            <div className="container">

                <main id="howdoesitwork">

                    <h2 className="rubrik">How Does It Work?</h2>

                    <div className="iphones">
                        <img className="desktop-iphone-left" src={iphoneLeft} alt="iPhone" />
                        <img className="desktop-iphone-mid" src={iphoneMid} alt="iPhone" />
                        <img className="desktop-iphone-right" src={iphoneRight} alt="iPhone" />

                        <img className="tablet-iphone-left" src={tabletIphoneLeft} alt="iPhone" />
                        <div className="iphone-mid">
                            <img className="tablet-iphone-mid" src={tabletIphoneMid} alt="iPhone" />
                            <img className="tablet-iphone-mid-content" src={tabletIphoneMidContent} alt="iPhone" />
                        </div>
                        <img className="tablet-iphone-right" src={tabletIphoneRight} alt="iPhone" />

                    </div>

                    <footer>
                        <h3 className="rubrik desktop-h3">Latest transaction history</h3>
                        <h3 className="rubrik tablet-h3">Step 3. Transfers to people from your<br />contact list</h3>
                        <h3 className="rubrik mobile-h3">Transfers to people from<br />your contact list</h3>

                        <p className="body-m desktop-p">Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed.
                            Arcu sociis tristique<br /> quisque hac in consectetur condimentum. </p>
                        <p className="body-m mobile-p">Proin volutpat mollis egestas. Nam luctus facilisis ultrices.
                            Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
                    </footer>

                </main>

            </div>

        </div>
    )
}

export default Howdoesitwork