import React from "react";
import './StudentLogin.css';

function StudentLogin({ onLoginClick }) {
    return (
        <div className="student-login-section">
            <h2 className="title">For Students / Alumni</h2>
            <p className="description">
                Join over 21 million developers, practice coding skills, prepare for interviews, and get hired.
            </p>

            <button
                className="login-btn"
                onClick={onLoginClick}
            >
                Login
            </button>
        </div>
    );
}

export default StudentLogin;
