import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <main>
            {/* Page Header */}
            <div className="ul-page-header">
                <div className="ul-container">
                    <h1 className="ul-page-title">About Us</h1>
                    <ul className="ul-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>About Us</li>
                    </ul>
                </div>
            </div>

            {/* About Content */}
            <section className="ul-section-spacing">
                <div className="ul-container">
                    <div className="row align-items-center gy-5">
                        <div className="col-lg-6">
                            <div className="ul-about-img">
                                <img src="/assets/img/about-img-1.jpg" alt="About Kashmiri Stitch" className="rounded-3 w-100" />
                                <div className="ul-about-img-txt">
                                    <span className="number">10+</span>
                                    <span className="text">Years of <br />Experience</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="ul-about-content">
                                <span className="ul-section-sub-title">Our Story</span>
                                <h2 className="ul-section-title mb-4">We Craft Authentic Kashmiri Apparel with Passion</h2>
                                <p className="mb-4 text-muted">
                                    Kashmiri Stitch is dedicated to bringing the timeless elegance of Kashmiri craftsmanship to the world.
                                    Our journey began with a simple mission: to preserve and promote the intricate art of embroidery and weaving
                                    that has been passed down through generations in the Kashmir Valley.
                                </p>
                                <p className="mb-5 text-muted">
                                    Each piece in our collection is a testament to the skill and dedication of our artisans. From the finest
                                    Pashmina shawls to intricately embroidered Pherans, we ensure that every product reflects the rich
                                    cultural heritage of Kashmir.
                                </p>

                                <div className="ul-about-features">
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="icon-box bg-light rounded-circle p-3">
                                                    <i className="flaticon-medal fs-4 text-dark"></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-1">Quality Assurance</h5>
                                                    <p className="mb-0 small text-muted">Premium fabrics & thread</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="icon-box bg-light rounded-circle p-3">
                                                    <i className="flaticon-shipped fs-4 text-dark"></i>
                                                </div>
                                                <div>
                                                    <h5 className="mb-1">Global Shipping</h5>
                                                    <p className="mb-0 small text-muted">Delivering worldwide</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/contact" className="ul-btn mt-5">Contact Us <i className="flaticon-arrow-point-to-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section (Optional) */}
            <section className="ul-team ul-section-spacing bg-light">
                <div className="ul-container">
                    <div className="ul-section-heading center text-center">
                        <span className="ul-section-sub-title">Our Team</span>
                        <h2 className="ul-section-title">Meet The Experts</h2>
                    </div>

                    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 g-4">
                        {[1, 2, 3, 4].map((item) => (
                            <div className="col" key={item}>
                                <div className="ul-team-member text-center">
                                    <div className="ul-team-member-img mb-3 overflow-hidden rounded-3">
                                        <img src={`/assets/img/team-${item}.jpg`} alt="Team Member" className="w-100" />
                                    </div>
                                    <h5 className="mb-1">Artisan Name</h5>
                                    <span className="text-muted small">Master Embroiderer</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
