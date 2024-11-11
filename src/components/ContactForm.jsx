import React from 'react'
import DropdownInput from './DropdownInput'

import chevron from '/src/assets/images/chevron.svg'
function ContactForm() {
    return (
        <form action="" className='contact-form'>
            <div className="container-form">
                <h2 className="rubrik">Get Online Consultation</h2>

                <div className="input-form">
                    <div className="full-name">
                        <p className='input-rubrik'>Full name</p>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="email-address">
                        <p className='input-rubrik'>Email address</p>
                        <input type="email" name="" id="" />
                    </div>
                    <div className="specialist">
                        <p className='input-rubrik'>Specialist</p>
                        <DropdownInput />
                    </div>
                    
                </div>

                <button className="btn">Make an appointment</button>


            </div>
        </form>
    )
}

export default ContactForm