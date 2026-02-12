import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <main>
            {/* Page Header */}
            <div className="ul-page-header">
                <div className="ul-container">
                    <h1 className="ul-page-title">Contact Us</h1>
                    <ul className="ul-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>

            <section className="ul-contact ul-section-spacing">
                <div className="ul-container">
                    <div className="row g-5">
                        <div className="col-lg-5">
                            <div className="ul-contact-info">
                                <span className="ul-section-sub-title">Get in Touch</span>
                                <h2 className="ul-section-title mb-4">We're Here to Help</h2>
                                <p className="text-muted mb-5">Have a question about our products or your order? Feel free to reach out to us using the contact details below or fill out the form.</p>

                                <div className="d-flex flex-column gap-4">
                                    <div className="d-flex gap-3">
                                        <div className="icon-box">
                                            <i className="flaticon-location control-icon fs-3"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Visit Us</h5>
                                            <p className="text-muted mb-0">123 Lal Chowk, Srinagar, Kashmir, 190001</p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3">
                                        <div className="icon-box">
                                            <i className="flaticon-call control-icon fs-3"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Call Us</h5>
                                            <p className="text-muted mb-0"><a href="tel:+911234567890" className="text-muted">+91 123 456 7890</a></p>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3">
                                        <div className="icon-box">
                                            <i className="flaticon-email control-icon fs-3"></i>
                                        </div>
                                        <div>
                                            <h5 className="mb-2">Email Us</h5>
                                            <p className="text-muted mb-0"><a href="mailto:info@kashmiristitch.com" className="text-muted">info@kashmiristitch.com</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="ul-contact-form-wrapper bg-light p-5 rounded-4">
                                <h3 className="mb-4">Send Us a Message</h3>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <input type="text" className="form-control py-3 px-4 border-0" placeholder="Your Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control py-3 px-4 border-0" placeholder="Your Email" />
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control py-3 px-4 border-0" placeholder="Subject" />
                                        </div>
                                        <div className="col-12">
                                            <textarea className="form-control py-3 px-4 border-0" rows="5" placeholder="Your Message"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="ul-btn w-100">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <div className="ul-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105627.91599387665!2d74.7288636402283!3d34.08365313880628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1855686e3c5ef%3A0x66244b7cc1e305c6!2sSrinagar!5e0!3m2!1sen!2sin!4v1707765123456!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </main>
    );
};

export default Contact;
