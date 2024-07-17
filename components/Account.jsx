import React, { useState } from 'react';

function Account() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        securityQuestion: '',
        securityAnswer: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validatePassword = (password) => {
        const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return passwordPattern.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!formData.username) {
            validationErrors.username = 'Username is required';
        }

        if (!formData.password) {
            validationErrors.password = 'Password is required';
        } else if (!validatePassword(formData.password)) {
            validationErrors.password = 'Password must be at least 8 characters long, contain one uppercase letter, one lowercase letter, and one number';
        }

        if (!formData.confirmPassword) {
            validationErrors.confirmPassword = 'Confirm Password is required';
        } else if (formData.confirmPassword !== formData.password) {
            validationErrors.confirmPassword = 'Passwords do not match';
        }

        if (!formData.securityQuestion) {
            validationErrors.securityQuestion = 'Security Question is required';
        }

        if (!formData.securityAnswer) {
            validationErrors.securityAnswer = 'Security Answer is required';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Submit the form
            console.log('Form submitted:', formData);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRbjLGVBgSRwHWFr0b_VxpuQhoRAr9Pqs_Q&s)' }}>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md my-8">
                <h2 className="text-2xl font-bold mb-6 text-center">Account Setup</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                        {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                        />
                        {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="securityQuestion">Security Question</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="securityQuestion"
                            name="securityQuestion"
                            value={formData.securityQuestion}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select a security question</option>
                            <option value="question1">What is your mother's maiden name?</option>
                            <option value="question2">What was the name of your first pet?</option>
                            <option value="question3">What was the name of your elementary school?</option>
                        </select>
                        {errors.securityQuestion && <span className="text-red-500 text-sm">{errors.securityQuestion}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="securityAnswer">Security Answer</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="securityAnswer"
                            name="securityAnswer"
                            placeholder="Security Answer"
                            value={formData.securityAnswer}
                            onChange={handleChange}
                            required
                        />
                        {errors.securityAnswer && <span className="text-red-500 text-sm">{errors.securityAnswer}</span>}
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Account;
