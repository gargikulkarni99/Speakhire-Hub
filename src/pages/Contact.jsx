import React, { useState } from 'react';
import "../Styles/ContactMe.css"


const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, email, subject, message } = formData;
        if (!firstName || !email || !subject || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        console.log('Form submitted:', formData);
        alert('Message sent!');

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-info">
                <h1>Contact Us</h1>
                <p>You SPEAK. We Listen. Leave a message!</p>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group inline-fields">
                    <div className="field-container">
                        <label htmlFor="firstName">First Name (required)</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="field-container">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email (required)</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject (required)</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message (required)</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
            </form>

        </div>
    );
};

export default Contact;
