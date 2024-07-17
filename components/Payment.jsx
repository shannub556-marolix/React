import React, { useState } from 'react';

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
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRbjLGVBgSRwHWFr0b_VxpuQhoRAr9Pqs_Q&s)' }}>
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="cardNumber">Credit Card Number</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="cardNumber"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleChange}
                            required
                        />
                        {errors.cardNumber && <span className="text-red-500 text-sm">{errors.cardNumber}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="expirationDate">Expiration Date</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        <label className="block text-gray-700 mb-2" htmlFor="cvv">CVV</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleChange}
                            required
                        />
                        {errors.cvv && <span className="text-red-500 text-sm">{errors.cvv}</span>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="street">Billing Address</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        <label className="block text-gray-700 mb-2" htmlFor="city">City</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        <label className="block text-gray-700 mb-2" htmlFor="state">State</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                        <label className="block text-gray-700 mb-2" htmlFor="zipCode">Zip Code</label>
                        <input
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <div className="flex justify-between">
                        <button
                            className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                            type="button"
                            onClick={() => console.log('Go back')}
                        >
                            Go Back
                        </button>
                        <button
                            className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
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
