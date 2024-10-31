import React from 'react'

import quotes from '/src/assets/images/quotes.svg'
import fannie from '/src/assets/images/fannie.svg'
import fannieRating from '/src/assets/images/rating-fannie.svg'

import albert from '/src/assets/images/albert.svg'
import albertRating from '/src/assets/images/rating-albert.svg'

function Recensions() {
    return (
        <div className="fifth-page">
            <div className="container">
                <section id="recensions">
                    <h2 className="rubrik">Clients are<br />Loving Our App</h2>
                    <div className="box-3 fannie-box">
                        <div className="imgs">
                            <img className="quotes" src={quotes} alt="quotes" />
                            <img className="ratings" src={fannieRating} alt="fannies rating 4/5 stars" />
                        </div>
                        <p className="body-l">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet
                            posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit.
                            Montes justo turpis sit amet.</p>
                        <div className="fannie">
                            <img src={fannie} alt="animated picture of Fannie" />
                            <div className="text-fannie">
                                <h3 className="rubrik">Fannie Summers</h3>
                                <p className="body-s">Designer</p>
                            </div>
                        </div>
                    </div>
                    <div className="box-3 albert">
                        <div className="imgs">
                            <img className="quotes" src={quotes} alt="quotes" />
                            <img className="ratings" src={albertRating} alt="Albert rating 4/5 stars" />
                        </div>
                        <p className="body-l">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet
                            porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium
                            dolor tincidunt egestas eget nunc.</p>

                        <div className="fannie">
                            <img src={albert} alt="animated picture of Albert" />
                            <div className="text-fannie">
                                <h3 className="rubrik">Albert Flores</h3>
                                <p className="body-s">Designer</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Recensions