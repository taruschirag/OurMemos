// src/pages/LoginPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-2xl shadow-lg w-96">
                <h1 className="text-3xl font-bold mb-6 text-center">Caregiver Login</h1>
                <button
                    onClick={() => navigate('/questionnaire')}
                    className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}