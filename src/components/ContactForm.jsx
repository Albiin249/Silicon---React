import React from 'react'
import DropdownInput from './DropdownInput'
import { useState } from 'react'
import axios from 'axios'

function ContactForm() {

    const [contacted, setContacted] = useState(false)
    const [formData, setFormData] = useState({ fullName: '', email: '', specialist: '', })
    const [errors, setErrors] = useState({})

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })

        if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: 'Please enter a valid email.' }))
        } else if (name === 'fullName' && value.trim() === '') {
            setErrors(prevErrors => ({ ...prevErrors, [name]: 'Full name is required.' }));
        } else if (name === 'fullName' && value.trim().length < 2) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: 'Full name must be at least 2 characters long.' }));
        } else {
            setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
        }
    }

    const handleOk = () => {
        setContacted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {};
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        }
        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required.';

        }
        if (!formData.specialist.trim()) {
            newErrors.specialist = 'Please select a specialist.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }



        try {
            const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/contact', formData);

            if (res.status === 200) {
                console.log(res.status);
                setContacted(true); // Visa bekräftelsemeddelande
            } else {
                console.log("Error:", res.data);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div>
            {contacted ? (
                <div className="contacted">
                    <div className="return-box">
                        <h3>Your request has been submitted! We will review your information and reach out shortly to schedule your online consultation.</h3>
                        <button className="btn" onClick={handleOk}>OK</button>
                    </div>
                </div>
            ) : (
                <form className='contact-form' onSubmit={handleSubmit} noValidate>
                    <div className="container-form">
                        <h2 className="rubrik">Get Online Consultation</h2>

                        <div className="input-form">
                            <div className="full-name">
                                <p className='input-rubrik'>Full name</p>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    required
                                />
                                <span className="error-text">{errors.fullName && errors.fullName}</span>
                            </div>
                            <div className="email-address">
                                <p className='input-rubrik'>Email address</p>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                                <span className="error-text">{errors.email && errors.email}</span>
                            </div>
                            <div className="specialist">
                                <p className='input-rubrik'>Specialist</p>
                                <DropdownInput
                                    name="specialist"
                                    value={formData.specialist}
                                    onChange={handleInputChange}
                                    required
                                />
                                <span className="error-text">{errors.specialist && errors.specialist}</span>
                            </div>
                        </div>

                        <button className="btn">Make an appointment</button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default ContactForm;




