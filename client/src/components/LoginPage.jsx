import React from 'react'

function LoginPage() {
    return (
        <div className="content">
            <div className="container">
                <InstituteLogin onLoginClick={handleInstituteLoginClick} />
                <StudentLogin onLoginClick={handleStudentLoginClick} />
            </div>

            {/* Modal for SignUp Form */}
            <SignUpModal show={showSignUpForm} closeModal={closeSignUpModal} />
            {/* Modal for Institute Login */}
            <InstituteLoginModal show={showInstituteLoginModal} closeModal={closeInstituteLoginModal} />
            {/* Modal for Student Login */}
            <StudentLoginModal show={showStudentLoginModal} closeModal={closeStudentLoginModal} />
        </div>
    )
}

export default LoginPage