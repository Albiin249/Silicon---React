import React from 'react'
import { useState } from 'react'

import bell from '/src/assets/images/bell.svg'
import envelope from '/src/assets/images/bx-envelope.svg'
import envelopeDark from '/src/assets/images/bx-envelope-darkmode.svg'

function SubscribeForm() {

    const [formData, setFormData] = useState({ email: '' })
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

        if (value.trim() === '') {
            setErrors(prevErrors => ({ ...prevErrors, [name]: `The ${name} field is required.` }))
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (name === 'email' && !emailRegex.test(value)) {
                setErrors(prevErrors => ({ ...prevErrors, [name]: 'Please enter a valid email.' }))
            } else {
                setErrors(prevErrors => ({ ...prevErrors, [name]: '' }))
            }
        }

    }


    const handleOk = () => {
        setSubmitted(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = `The ${field} field is required.`
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.ok) {
            setSubmitted(true)
            setFormData({ email: '' })
            setErrors({});
            console.log('Lyckat!')
        }
    }

    if (submitted) {
        return (
            <div className="subscribe">
                <div className="return-box">
                    <h1>You are now subscribed to our newsletter!</h1>
                    <button className="btn" onClick={handleOk} >OK</button>
                </div>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="subscribe" noValidate>
            <div className="bell-text">
                <img className="bell" src={bell} alt="Notification Bell" />
                <h3 className="desktop-h3 rubrik">Subscribe to our newsletter to stay<br />informed about
                    latest updates</h3>
                <h3 className="mobile-h3 rubrik">Subscribe to our<br />newsletter</h3>
            </div>
            <div className="input-grp">
                <img className="email-icon show-light" src={envelope} alt="mail icon" />
                <img className="email-icon show-dark" src={envelopeDark} alt="mail icon" />

                <input className="form-input"
                    type="email"
                    name="email"
                    required value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email" />

                <button className="knappen" type="submit">Subscribe</button>
                <span className="error-text">{errors.email && errors.email}</span>
            </div>

        </form>
    )
}

export default SubscribeForm