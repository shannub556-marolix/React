import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Course() {
    const [formData, setFormData] = useState({
        courseName: '',
        startDate: '',
        preferredTime: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!formData.courseName) {
            validationErrors.courseName = 'Course Name is required';
        }

        if (!formData.startDate) {
            validationErrors.startDate = 'Preferred Start Date is required';
        }

        if (!formData.preferredTime) {
            validationErrors.preferredTime = 'Preferred Time is required';
        }

        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            console.log('Form Successfully validated');
            navigate('/payment');
        }
    };

    const handleBack = () => {
        navigate('/personal');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full px-6">
                <div className="bg-white p-8 rounded-lg shadow-md my-8">
                    <h2 className="text-2xl font-bold mb-6 text-center">Course Registration Form</h2>
                    <form noValidate>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="courseName">Course Name</label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="courseName"
                                name="courseName"
                                value={formData.courseName}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select a course</option>
                                <option value="course1">Course 1</option>
                                <option value="course2">Course 2</option>
                                <option value="course3">Course 3</option>
                            </select>
                            {errors.courseName && <span className="text-red-500 text-sm">{errors.courseName}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="startDate">Preferred Start Date</label>
                            <input
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                type="date"
                                id="startDate"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                                required
                            />
                            {errors.startDate && <span className="text-red-500 text-sm">{errors.startDate}</span>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="preferredTime">Preferred Time</label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="preferredTime"
                                name="preferredTime"
                                value={formData.preferredTime}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Select a time</option>
                                <option value="morning">Morning</option>
                                <option value="afternoon">Afternoon</option>
                                <option value="evening">Evening</option>
                            </select>
                            {errors.preferredTime && <span className="text-red-500 text-sm">{errors.preferredTime}</span>}
                        </div>
                        <div className="flex justify-between">
                            <button
                                className="bg-gray-500 text-white p-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                type="button"
                                onClick={handleBack}
                            >
                                Go Back
                            </button>
                            <button
                                className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                type="button"
                                onClick={handleSubmit}
                            >
                                Next
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Course;
