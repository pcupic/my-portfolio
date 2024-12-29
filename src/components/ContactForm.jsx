import { useState } from 'react';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = (e) => {
        e.preventDefault();
        if (firstName === '' || lastName === '' || email === '' || message === '') {
            setErrorMessage('Please fill out all fields.');
        } else {
            setErrorMessage('');
            alert('Email sent successfully!');
            setFirstName('');
            setLastName('');
            setEmail('');
            setMessage('');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white border border-gray-300 rounded-lg shadow-md mt-10 font-mono">
            <h2 className="text-2xl font-semibold mb-4">Contact me</h2>
            <form onSubmit={validateForm}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                    rows="4"
                />
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Send Email
                </button>
                {errorMessage && (
                    <p className="text-red-500 mt-2">{errorMessage}</p>
                )}
            </form>
        </div>
    );
};

export default ContactForm;