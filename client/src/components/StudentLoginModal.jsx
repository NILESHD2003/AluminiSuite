import React, { useState } from "react";
import './StudentLoginModal.css';

function StudentLoginModal({ show, closeModal }) {
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
        console.log("Student Login Submitted", formValues);
        setFormValues({ username: "", password: "" });
        setError("");
        closeModal();
    };

    if (!show) return null;

    return (
        <div className="student-modal-overlay" >
            <div className="student-modal-background" onClick={closeModal}></div>
            <div className="student-modal-container">
                <h2 className="student-modal-title">Student / Alumni Login</h2>

                <button className="student-modal-close" onClick={closeModal}>&times;</button>

                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label>Username:</label>
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
                        <label>Password:</label>
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

export default StudentLoginModal;
