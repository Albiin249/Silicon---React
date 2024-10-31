import React from 'react'

import iphone from '/src/assets/images/iphone-card.svg'
import card from '/src/assets/images/card.svg'

import payments from '/src/assets/images/payments.svg.svg'
import security from '/src/assets/images/security.svg.svg'
import statistics from '/src/assets/images/statistics.svg.svg'
import support from '/src/assets/images/support.svg.svg'
import cashback from '/src/assets/images/cashback.svg.svg'
import standards from '/src/assets/images/standards.svg.svg'

function Features() {
    return (
        <div className="second-page">
            <div className='container'>
                <main id="features">

                    <aside>
                        <img className="iphone" src={iphone} alt="iPhone" />
                        <img className="card" src={card} alt="Card" />
                    </aside>

                    <section className="app-features">
                        <h2 className="rubrik">App Features</h2>
                        <p className="features-p body-l">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>

                        <div className="lista">

                            <div className="listitem">
                                <div className="box-2">
                                    <img src={payments} alt="Logo for payments" />
                                </div>
                                <div className="text">
                                    <h3 className="rubrik">Easy Payments</h3>
                                    <p className="body-m" >Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                                </div>
                            </div>

                            <div className="listitem listitem-right">
                                <div className="box-2">
                                    <img src={security} alt="Logo for Security" />
                                </div>
                                <div className="text">
                                    <h3 className="rubrik">Data Security</h3>
                                    <p className="body-m" >Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
                                </div>
                            </div>

                            <div className="listitem listitem-bottom">
                                <div className="box-2">
                                    <img src={statistics} alt="Logo for statistics" />
                                </div>
                                <div className="text">
                                    <h3 className="rubrik" >Cost Statistics</h3>
                                    <p className="body-m" >Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                                </div>
                            </div>

                            <div className="listitem listitem-right listitem-bottom">
                                <div className="box-2">
                                    <img src={support} alt="Logo for support" />
                                </div>
                                <div className="text">
                                    <h3 className="rubrik">Support 24/7</h3>
                                    <p className="body-m">A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
                                </div>
                            </div>

                            <div className="listitem listitem-bottom-2">
                                <div className="box-2">
                                    <img src={cashback} alt="Logo for cashback" />
                                </div>
                                <div className="text">
                                    <h3 className="rubrik">Regular Cashback</h3>
                                    <p className="body-m" >Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
                                </div>
                            </div>

                            <div className="listitem listitem-right listitem-bottom-2">
                                <div className="box-2">
                                    <img src={standards} alt="Logo for standards" />
                                </div>
                                <div className="text">
                                    <h3 className="rubrik">Top Standards</h3>
                                    <p className="body-m" >Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
                                </div>
                            </div>


                        </div>

                    </section>



                </main>
            </div>
        </div>
    )
}

export default Features