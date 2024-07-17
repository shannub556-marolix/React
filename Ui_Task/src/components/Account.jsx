import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Account() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        securityQuestion: '',
        securityAnswer: '',
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

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
            navigate('/home');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full px-6">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">Account Setup</h2>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Username</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="securityQuestion">Security Question</label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="securityAnswer">Security Answer</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
