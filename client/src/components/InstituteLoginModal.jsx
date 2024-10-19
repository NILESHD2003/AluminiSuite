import React, { useState } from "react";
import './InstituteLoginModal.css';

function InstituteLoginModal({ show, closeModal }) {
    const [formValues, setFormValues] = useState({
        username: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Institute Login Submitted", formValues);
        setFormValues({ username: "", password: "" });
        setError("");
        closeModal();
    };

    if (!show) return null;

    return (
        <div className="institute-modal-overlay">
            <div className="institute-modal-background" onClick={closeModal}></div>
            <div className="institute-modal-container">
                <h2 className="institute-modal-title">Institute Login</h2>

                <button className="institute-modal-close" onClick={closeModal}>&times;</button>

                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        {/* Corrected inline style for label */}
                        <label style={{ color: "#FFFFFF" }}>Username:</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={formValues.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-field">
                        {/* Corrected inline style for label */}
                        <label style={{ color: "#FFFFFF" }}>Password:</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formValues.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {error && <p className="error-message">{error}</p>}

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default InstituteLoginModal;
