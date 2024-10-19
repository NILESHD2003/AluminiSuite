import React from "react";
import SignUp from "./SignUp";
import "./SignUpModal.css";

function SignUpModal({ show, closeModal }) {
    if (!show) return null;

    return (
        <div className="modal-overlay">
            {/* Click outside the modal to close */}
            <div className="modal-background" onClick={closeModal}></div>
            <div className="modal-content">
                <SignUp closeModal={closeModal} />
            </div>
        </div>
    );
}

export default SignUpModal;
