import React from "react";
import "./InstituteLogin.css";

function InstituteLogin({ onLoginClick }) {
    return (
        <div className="login-section">
            <h2 className="login-title">For Institute</h2>
            <p className="login-description">
                We are the market-leading technical interview platform to identify and
                hire developers with the right skills.
            </p>

            <button className="login-button" onClick={onLoginClick}>
                Login
            </button>
        </div>
    );
}

export default InstituteLogin;
