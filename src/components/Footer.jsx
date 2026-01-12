import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="ul-footer">
            <div className="ul-inner-container">
                <div className="ul-footer-top">
                    <div className="ul-footer-top-widget">
                        <h3 className="ul-footer-top-widget-title">Brands</h3>
                        <div className="ul-footer-top-widget-links">
                            <a href="#">Zara</a>
                            <a href="#">Guess</a>
                            <a href="#">Mango</a>
                            <a href="#">LCWaikiki</a>
                            <a href="#">Monda</a>
                        </div>
                    </div>

                    <div className="ul-footer-top-widget">
                        <h3 className="ul-footer-top-widget-title">Categories</h3>
                        <div className="ul-footer-top-widget-links">
                            <Link to="/shop">Women</Link>
                            <Link to="/shop">Men</Link>
                            <Link to="/shop">Kids</Link>
                        </div>
                    </div>

                    <div className="ul-footer-top-widget">
                        <h3 className="ul-footer-top-widget-title">Accessories</h3>
                        <div className="ul-footer-top-widget-links">
                            <a href="#">Order Tracking</a>
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Tutorials</a>
                            <a href="#">FAQ</a>
                        </div>
                    </div>

                    <div className="ul-footer-top-widget">
                        <h3 className="ul-footer-top-widget-title">Services</h3>
                        <div className="ul-footer-top-widget-links">
                            <a href="#">Sale</a>
                            <a href="#">Quick Ship</a>
                            <a href="#">New Designs</a>
                            <a href="#">Protection Plan</a>
                            <a href="#">Gift Cards</a>
                        </div>
                    </div>

                    <div className="ul-footer-top-widget">
                        <h3 className="ul-footer-top-widget-title">Policies</h3>
                        <div className="ul-footer-top-widget-links">
                            <a href="#">Policy</a>
                            <a href="#">Dressy Inside</a>
                            <a href="#">About Us</a>
                            <a href="#">Company</a>
                            <a href="#">Careers</a>
                        </div>
                    </div>

                    <div className="ul-footer-top-widget">
                        <h3 className="ul-footer-top-widget-title">Help</h3>
                        <div className="ul-footer-top-widget-links">
                            <Link to="/contact">Contact us</Link>
                            <Link to="/about">About us</Link>
                            <a href="#">Reviews</a>
                            <a href="#">Terms of Service</a>
                            <a href="#">Refund policy</a>
                        </div>
                    </div>
                </div>

                <div className="ul-footer-middle">
                    <div className="ul-footer-middle-widget">
                        <h3 className="ul-footer-middle-widget-title">Download Our Apps</h3>
                        <div className="ul-footer-middle-widget-content">
                            <div className="app-links">
                                <a href="#"><img src="/assets/img/android.png" alt="Play Store Link Image" /></a>
                                <a href="#"><img src="/assets/img/ios.png" alt="App Store Link Image" /></a>
                            </div>
                        </div>
                    </div>

                    <div className="ul-footer-middle-widget">
                        <h3 className="ul-footer-middle-widget-title">Follow us</h3>
                        <div className="ul-footer-middle-widget-content">
                            <div className="social-links">
                                <a href="#"><i className="flaticon-facebook-app-symbol"></i></a>
                                <a href="#"><i className="flaticon-twitter"></i></a>
                                <a href="#"><i className="flaticon-linkedin-big-logo"></i></a>
                                <a href="#"><i className="flaticon-youtube"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="ul-footer-middle-widget">
                        <h3 className="ul-footer-middle-widget-title">Need help? Call now!</h3>
                        <div className="ul-footer-middle-widget-content">
                            <div className="contact-nums">
                                <a href="tel:1234567890">1234567890</a>
                            </div>
                        </div>
                    </div>

                    <div className="ul-footer-middle-widget align-self-center">
                        <Link to="/"><img src="/assets/img/logo-white.png" alt="logo" className="logo" /></Link>
                    </div>
                </div>

                <div className="ul-footer-bottom">
                    <p className="copyright-txt">Copyright 2026 © <a href="https://temptics.com/" className="ul-footer-bottom-link">Kashmir Stitch</a></p>
                    <img src="/assets/img/payment-methods.png" alt="payment methods logos" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
