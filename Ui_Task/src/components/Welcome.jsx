import React from 'react';
import { useNavigate } from 'react-router-dom';


function Welcome() {
    const navigate = useNavigate()

    const handleButton=()=>{
        navigate('/personal')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full px-6">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Welcome to Online Course</h1>
                <p className="text-lg text-gray-600 text-center mb-8">
                    Our online course offers a comprehensive learning experience designed to help you master new skills and achieve your goals. Whether you're looking to advance your career, pick up a new hobby, or simply learn something new, our courses provide the flexibility and support you need to succeed.
                </p>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button"
                        onClick={handleButton}
                    >
                        Start Registering
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
