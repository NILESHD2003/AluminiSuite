import React, { useState } from "react";
import "./SignUp.css";

function SignUp({ closeModal }) {
    const [formValues, setFormValues] = useState({
        instituteCode: "",
        instituteName: "",
        instituteEmail: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValues.password !== formValues.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        console.log("Form Submitted", formValues);
        setError("");
    };

    return (
        <div className="signup-form">
            <h2>Institute Sign Up</h2>

            <button className="close-button" onClick={closeModal}>
                &times;
            </button>

            <form onSubmit={handleSubmit}>
                <div className="mt-4">
                    <label>Institute Code:</label>
                    <input
                        type="text"
                        name="instituteCode"
                        placeholder="Enter institute code"
                        value={formValues.instituteCode}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <label>Institute Name:</label>
                    <input
                        type="text"
                        name="instituteName"
                        placeholder="Enter institute name"
                        value={formValues.instituteName}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <label>Institute Email:</label>
                    <input
                        type="email"
                        name="instituteEmail"
                        placeholder="Enter institute email"
                        value={formValues.instituteEmail}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        value={formValues.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mt-4">
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm your password"
                        value={formValues.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>

                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="submit-button">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default SignUp;
