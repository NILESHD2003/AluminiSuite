import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer'>
        {/* main footer content container */}
        <div className='footer-container'>

            {/* 1st column: about alumni suite */}
            <div className='footer-column'>
                <h4>About AlumniSuite</h4>
                <ul>
                    <li><a href="/about">About Us</a></li>  
                    <li><a href="/features">Features</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/carrers">Carrers</a></li>
                </ul>
            </div>

            {/* 2nd column: Resources */}
            <div className='footer-column'>
                <h4>Resources</h4>
                <ul>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/help-center">Help Center</a></li>
                    <li><a href="/faq">FAQ</a></li>
                    <li><a href="/podcasts">Podcasts</a></li>
                </ul>
            </div>

            {/* 3rd Column: contact Info */}
            <div className='footer-column'>
                <h4>Contact Us</h4>
                <ul>
                    {/* Email link */}
                    <li>Email: <a href="somemail@alumnisuite.com">contact@alumnisuite.com</a></li>
                    {/* Phone number */}
                    <li>Phone: 123-456-789</li>
                    {/* Contact form Link */}
                    <li><a href="/contact">Contact Form</a></li>
                </ul>
            </div>

            {/* 4th column: Social Media */}
            <div className='footer-column'>
                <h4>Follow Us</h4>
                <div className='social-icons'>
                    {/* social media icons*/}
                    <a href="https://facebook.com" target='_blank' rel='noopener noreferrer'>
                    <FaFacebook />  {/*fb icon*/}
                    </a>
                    <a href="https://x.com" target='_blank' rel='noopener noreferrer'>
                        <FaTwitter />      {/* x icon}*/}
                    </a>
                    <a href="https://linkedin.com" target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin />      {/* Linked Icon*/}
                    </a>
                    <a href="https://instagram.com" target='_blank' rel='noopener noreferre'>
                        <FaInstagram />       {/* Instagram Icon*/}
                    </a>
                </div>
            </div>
            
        </div>     {/* End of footer-container */}

        {/* Bottom footer container - copright and links */}
        <div className='footer-bottom'>
            <p>© 2024 AlumniSuite. All rights reserved.</p>
            <p>
                <a href="/terms-of-service">Terms of Service</a>
            </p>
            <p>
            <a href="/privacy-policy">Privacy Policy</a>
            </p>
        </div>

      
    </div>
  )
}

export default Footer;


