import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Payment() {
    const [formData, setFormData] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        street: '',
        city: '',
        state: '',
        zipCode: '',
    });

    const [errors, setErrors] = useState({});
    const navigate=useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateCardNumber = (cardNumber) => {
        const cardPattern = /^[0-9]{16}$/;
        return cardPattern.test(cardNumber);
    };

    const validateCVV = (cvv) => {
        const cvvPattern = /^[0-9]{3,4}$/;
        return cvvPattern.test(cvv);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!formData.cardNumber) {
            validationErrors.cardNumber = 'Credit Card Number is required';
        } else if (!validateCardNumber(formData.cardNumber)) {
            validationErrors.cardNumber = 'Invalid Credit Card Number';
        }

        if (!formData.expirationDate) {
            validationErrors.expirationDate = 'Expiration Date is required';
        }

        if (!formData.cvv) {
            validationErrors.cvv = 'CVV is required';
        } else if (!validateCVV(formData.cvv)) {
            validationErrors.cvv = 'Invalid CVV';
        }

        if (!formData.street) {
            validationErrors.street = 'Billing Address is required';
        }

        if (!formData.city) {
            validationErrors.city = 'City is required';
        }

        if (!formData.state) {
            validationErrors.state = 'State is required';
        }

        if (!formData.zipCode) {
            validationErrors.zipCode = 'Zip Code is required';
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            // Submit the form or navigate to the next page
            console.log('Form submitted:', formData);
            navigate('/account')
            
        }
    };

    const handleBack = () => {
        navigate('/course');
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full px-6">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Payment Details</h1>
                <form onSubmit={handleSubmit} noValidate className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cardNumber">
                            Credit Card Number
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            placeholder="Credit Card Number"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                        />
                        {errors.cardNumber && <span className="text-red-500 text-sm">{errors.cardNumber}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expirationDate">
                            Expiration Date
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="month"
                            id="expirationDate"
                            name="expirationDate"
                            value={formData.expirationDate}
                            onChange={handleChange}
                            required
                        />
                        {errors.expirationDate && <span className="text-red-500 text-sm">{errors.expirationDate}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvv">
                            CVV
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="cvv"
                            name="cvv"
                            placeholder="CVV"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                        />
                        {errors.cvv && <span className="text-red-500 text-sm">{errors.cvv}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street">
                            Billing Address
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="street"
                            name="street"
                            placeholder="Street"
                            value={formData.street}
                            onChange={handleChange}
                            required
                        />
                        {errors.street && <span className="text-red-500 text-sm">{errors.street}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
                            City
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="city"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            required
                        />
                        {errors.city && <span className="text-red-500 text-sm">{errors.city}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="state">
                            State
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="state"
                            name="state"
                            placeholder="State"
                            value={formData.state}
                            onChange={handleChange}
                            required
                        />
                        {errors.state && <span className="text-red-500 text-sm">{errors.state}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="zipCode">
                            Zip Code
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            placeholder="Zip Code"
                            value={formData.zipCode}
                            onChange={handleChange}
                            required
                        />
                        {errors.zipCode && <span className="text-red-500 text-sm">{errors.zipCode}</span>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="button"
                            onClick={handleBack}
                        >
                            Go Back
                        </button>
                        <button
                            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
    
}

export default Payment;
