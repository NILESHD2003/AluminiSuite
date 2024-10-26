// src/context/AuthContext.js

import React, { createContext, useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';

const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => {
    return useContext(AuthContext);
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState("null");


    const login = (userData) => {
        setUser(userData);
        <Navigate to="/" /> // Redirect to homepage or dashboard on login
    };

    const logout = () => {
        setUser(null);
        navigate('/login'); // Redirect to login page on logout
    };

    const value = { user, login, logout, isAuthenticated: !!user };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
