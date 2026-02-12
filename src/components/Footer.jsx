import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="ul-footer">
            <div className="ul-inner-container">
                {/* Newsletter Section */}
                <div className="ul-newsletter py-5 border-bottom mb-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h3 className="mb-2">Subscribe to our Newsletter</h3>
                            <p className="mb-0 text-muted">Get the latest updates on new products and upcoming sales.</p>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <form className="d-flex gap-2" onSubmit={(e) => e.preventDefault()}>
                                <input type="email" className="form-control rounded-pill py-3 px-4 border-0 bg-light" placeholder="Your Email Address" required />
                                <button type="submit" className="ul-btn rounded-pill px-5">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="ul-footer-top">
                    {/* ... (existing top widgets with updated Links) ... */}
                    <div className="ul-footer-top-widget">
                        <h3 className="ul-footer-top-widget-title">Brands</h3>
                        <div className="ul-footer-top-widget-links">
                            <Link to="/shop">Pashmina</Link>
                            <Link to="/shop">Kani</Link>
                            <Link to="/shop">Sozni</Link>
                            <Link to="/shop">Paper Mache</Link>
                            <Link to="/shop">Aari</Link>
                        </div>
                    </div>

                    <div className="ul-footer-top-widget">
                        <h3 className="ul-footer-top-widget-title">Categories</h3>
                        <div className="ul-footer-top-widget-links">
                            <Link to="/shop?category=Women">Women</Link>
                            <Link to="/shop?category=Men">Men</Link>
                            <Link to="/shop?category=Kids">Kids</Link>
                            <Link to="/shop?category=Accessories">Accessories</Link>
                        </div>
                    </div>

                    <div className="ul-footer-top-widget">
                        <h3 className="ul-footer-top-widget-title">Support</h3>
                        <div className="ul-footer-top-widget-links">
                            <Link to="/contact">Order Tracking</Link>
                            <Link to="/about">Terms & Conditions</Link>
                            <Link to="/about">Privacy Policy</Link>
                            <Link to="/contact">FAQ</Link>
                        </div>
                    </div>

                    <div className="ul-footer-top-widget">
                        <h3 className="ul-footer-top-widget-title">Company</h3>
                        <div className="ul-footer-top-widget-links">
                            <Link to="/about">About Us</Link>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/shop">Careers</Link>
                            <Link to="/blog">Blog</Link>
                        </div>
                    </div>
                </div>

                <div className="ul-footer-middle mt-5">
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
                                <a href="#"><i className="flaticon-instagram"></i></a>
                                <a href="#"><i className="flaticon-youtube"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="ul-footer-middle-widget">
                        <h3 className="ul-footer-middle-widget-title">Need help? Call now!</h3>
                        <div className="ul-footer-middle-widget-content">
                            <div className="contact-nums">
                                <a href="tel:1234567890">+91 123 456 7890</a>
                            </div>
                        </div>
                    </div>

                    <div className="ul-footer-middle-widget align-self-center">
                        <Link to="/"><img src="/assets/img/logo-white.png" alt="logo" className="logo" /></Link>
                    </div>
                </div>

                <div className="ul-footer-bottom">
                    <p className="copyright-txt">Copyright 2026 © <Link to="/" className="ul-footer-bottom-link">Kashmir Stitch</Link>. All rights reserved.</p>
                    <img src="/assets/img/payment-methods.png" alt="payment methods logos" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
