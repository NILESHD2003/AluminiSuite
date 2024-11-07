import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from "sonner";

const SignUp = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        otp: '',
        name: '',
        phone: '',
        hostName: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSendOtp = async (e) => {
        e.preventDefault();

        if (!userData.email || !userData.hostName) {
            setError("Email and Institute Name are required to send OTP.");
            toast("Email and Institute Name are required to send OTP.");
            return;
        }

        try {
            const resp = await axios.post("https://aluminisuite.onrender.com/api/v1/auth/sendOTP", {
                email: userData.email,
                hostName: userData.hostName
            });
            if (resp.status === 200) {
                setIsOtpSent(true);
                setIsOtpModalOpen(true);
                toast("OTP sent! Please check your email.");
            }
        } catch (error) {
            setError("Failed to send OTP. Please try again.");
            toast("Failed to send OTP. Please try again.");
        }
    };

    const createUser = async (e) => {
        e.preventDefault();

        if (userData.password !== userData.confirmPassword) {
            setError("Passwords do not match.");
            toast("Passwords do not match. Change your passwords and try again.");
            return;
        }

        try {
            const resp = await axios.post("https://aluminisuite.onrender.com/api/v1/auth/host/signup", userData);
            if (resp.status === 201) {
                setSuccess("Account created successfully!");
                toast("Account created successfully! Login with your email and password.");
            }
        } catch (error) {
            setError("Failed to create account. Please try again.");
            toast("Failed to create account. Please try again.");
        } finally {
            setIsOtpModalOpen(false);
        }
    };

    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt="Welcome"
                        src="https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                </aside>

                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
                    <div className="max-w-xl lg:max-w-3xl">
                        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Welcome to AlumniaSuite 🦑
                        </h1>

                        <form onSubmit={handleSendOtp} className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700"> Name </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={userData.name}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700"> Email </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={userData.email}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="hostName" className="block text-sm font-medium text-gray-700"> Host Name </label>
                                <input
                                    type="text"
                                    id="hostName"
                                    name="hostName"
                                    value={userData.hostName}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password </label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={userData.password}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>

                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={userData.confirmPassword}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>

                            <div className="col-span-6">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700"> Phone </label>
                                <input
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    value={userData.phone}
                                    onChange={handleChange}
                                    className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                    required
                                />
                            </div>

                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    type="submit"
                                    className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                                >
                                    {isOtpSent ? "Resend OTP" : "Send OTP"}
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    Already have an account? <Link to="/login" className="text-gray-700 underline">Log in</Link>.
                                </p>
                            </div>

                            {error && <p className="text-red-500 text-sm mt-2 col-span-6">{error}</p>}
                            {success && <p className="text-green-500 text-sm mt-2 col-span-6">{success}</p>}
                        </form>

                        {isOtpModalOpen && (
                            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                                <div className="bg-white p-8 rounded shadow-md w-1/3">
                                    <h2 className="text-lg font-semibold mb-4">Enter OTP</h2>
                                    <input
                                        type="text"
                                        name="otp"
                                        value={userData.otp}
                                        onChange={handleChange}
                                        className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                                        required
                                    />
                                    <button
                                        onClick={createUser}
                                        className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </section>
    );
};

export default SignUp;
