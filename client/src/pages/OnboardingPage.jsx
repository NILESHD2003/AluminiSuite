import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from "sonner"
const OnboardingPage = () => {
    const params = useParams()
    const [formData, setFormData] = useState({
        name: '',
        dob: '',
        gender: '',
        location: '',
        password: '',
        confirmPassword: '',
        phone: '',
    });

    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'confirmPassword' && value !== formData.password) {
            setError('Passwords do not match');
        } else {
            setError('');
        }
    };

    const handlePhoneChange = (e) => {
        const value = e.target.value;
        if (/^\d{0,10}$/.test(value)) {
            setFormData({
                ...formData,
                phone: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
        } else {
            try {

                const data = await axios.post(`https://aluminisuite.onrender.com/api/v1/member/onboard?invite=${params.token}`, formData);

                console.log(data);
                if (data.status == 400) {

                    toast("Failed to create event!", {
                        description: "Please try again",
                    });
                    return
                }

                toast("Success!", {
                    description: "Testing toast notification",
                });
            }
            catch (error) {
                toast("Failed to create event!", {
                    description: "Please try again",
                });
                console.log(error);
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-0 font-primary">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center text-black mb-4">
                    Welcome to <span className="text-3xl font-logo text-[#14213D]">Alumini</span><span className="text-3xl font-logo text-[#FCA311]">Suite</span>
                </h2>
                <p className="text-center text-gray-500 mb-6">Please provide your basic details to continue.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <div className="flex gap-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Male"
                                checked={formData.gender === 'Male'}
                                onChange={handleChange}
                                className="mr-2 transform scale-125"
                            />
                            Male
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Female"
                                checked={formData.gender === 'Female'}
                                onChange={handleChange}
                                className="mr-2 transform scale-125"
                            />
                            Female
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="gender"
                                value="Other"
                                checked={formData.gender === 'Other'}
                                onChange={handleChange}
                                className="mr-2 transform scale-125"
                            />
                            Other
                        </label>
                    </div>
                    <input
                        type="text"
                        placeholder="Location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Phone Number"
                        name="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        maxLength="10"
                        title="Please enter a valid 10-digit phone number"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OnboardingPage;
