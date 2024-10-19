import React from "react";
import "./Navbar.css";

function Navbar({ onSignUpClick }) {
    return (
        <div className="navbar">
            <div className="logo">
                <span className="alumini">alumini</span>
                <span className="suite">Suite</span>
            </div>
            <nav className="nav-links">.
            {/* Features dropdown button if require */}
                {/* <div className="nav-link dropdown">
                    <a href="#" className="nav-link">
                        Features
                    </a>
                    <div className="dropdown-content">
                        <a href="#">Podcasts</a>
                        <a href="#">Online Meetings</a>
                        <a href="#">Group Chats</a>
                    </div>
                </div> */}
                <a href="#" className="nav-link">
                    Solutions
                </a>
                <a href="#" className="nav-link">
                    About Us
                </a>
                <a href="#" className="nav-link">
                    Contact Us
                </a>

                <button
                    className="btn sign-up"
                    onClick={onSignUpClick}
                >
                    Sign up
                </button>
                <button className="btn login-up">
                    Log in
                </button>
            </nav>
        </div>
    );
}

export default Navbar;
