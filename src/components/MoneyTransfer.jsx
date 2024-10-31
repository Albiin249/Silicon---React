import React from 'react'

import circleCheck from '/src/assets/images/circle-check.svg'
import pil from '/src/assets/images/pil.svg'

import inner from '/src/assets/images/inner.svg'
import outer from '/src/assets/images/outer.svg'

import contacts from '/src/assets/images/contacts.svg'
import card from '/src/assets/images/card.svg'

import payments from '/src/assets/images/payments.svg.svg'
import cashback from '/src/assets/images/cashback.svg.svg'


function MoneyTransfer() {
    return (
        <div className="fourth-page">
            <div className="container">
                <main id="bank-info">
                    <section className="moneytransfer">
                        <div className="transfer">
                            <h3 className="rubrik">Make your money<br />transfer simple and clear</h3>
                            <div className="transfer-margin">
                                <div className="transfer-info">
                                    <img src={circleCheck} alt="Check circle" />
                                    <p className="body-m">Banking transactions are free for you</p>
                                </div>
                                <div className="transfer-info">
                                    <img src={circleCheck} alt="Check circle" />
                                    <p className="body-m">No monthly cash commission</p>
                                </div>
                                <div className="transfer-info">
                                    <img src={circleCheck} alt="Check circle" />
                                    <p className="body-m">Manage payments and transactions online</p>
                                </div>
                            </div>
                            <a href="#" className="btn btn-learn">
                                <span>Learn more</span>
                                <img src={pil} alt="arrow" />
                            </a>
                        </div>

                        <div className="images">
                            <img className="inner" src={inner} alt="September Forecast" />
                            <img className="outer" src={outer} alt="Send money picture" />
                        </div>


                        <div className="contacts-images">
                            <img className="contacts" src={contacts} alt="Contacts" />
                            <img className="card-2" src={card} alt="Card" />
                        </div>

                        <div className="international">
                            <h3 className="rubrik">Receive payment from<br />international bank details</h3>
                            <div className="payments-2">
                                <div className="payment-box">
                                    <div className="box-2">
                                        <img src={payments} alt="Logo for payments" />
                                    </div>
                                    <div className="text">
                                        <p className="body-m">Manage your payments online.<br />Mollis congue egestas
                                            egestas<br />fermentum fames.</p>
                                    </div>
                                </div>
                                <div className="payment-box">
                                    <div className="box-2">
                                        <img src={cashback} alt="Logo for cashback" />
                                    </div>
                                    <div className="text">
                                        <p className="body-m">A elementur and imperdiet enim,<br />pretium etiam facilisi
                                            aenean<br />quam mauris.</p>
                                    </div>
                                </div>
                            </div>
                            <a href="#" className="btn btn-learn btn-payment">
                                <span>Learn more</span>
                                <img src={pil} alt="" />
                            </a>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default MoneyTransfer