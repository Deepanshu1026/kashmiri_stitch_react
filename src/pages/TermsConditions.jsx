import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (
        <main>
            {/* Page Header */}
            <div className="ul-page-header">
                <div className="ul-container">
                    <h1 className="ul-page-title">Terms & Conditions</h1>
                    <ul className="ul-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
            </div>

            <section className="ul-terms ul-section-spacing">
                <div className="ul-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="bg-light p-5 rounded-4">
                                <h2 className="mb-4">1. Overview</h2>
                                <p className="text-muted mb-5">
                                    This website is operated by Kashmiri Stitch. Throughout the site, the terms “we”, “us” and “our” refer to Kashmiri Stitch.
                                    Kashmiri Stitch offers this website, including all information, tools and services available from this site to you, the user,
                                    conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                                </p>

                                <h2 className="mb-4">2. Online Store Terms</h2>
                                <p className="text-muted mb-5">
                                    By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence,
                                    or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your
                                    minor dependents to use this site.
                                </p>

                                <h2 className="mb-4">3. Products and Services</h2>
                                <p className="text-muted mb-5">
                                    Certain products or services may be available exclusively online through the website. These products or services may have limited
                                    quantities and are subject to return or exchange only according to our Return Policy. We have made every effort to display as
                                    accurately as possible the colors and images of our products that appear at the store.
                                </p>

                                <h2 className="mb-4">4. Billing and Account Information</h2>
                                <p className="text-muted mb-5">
                                    We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased
                                    per person, per household or per order. These restrictions may include orders placed by or under the same customer account,
                                    the same credit card, and/or orders that use the same billing and/or shipping address.
                                </p>

                                <h2 className="mb-4">5. Governing Law</h2>
                                <p className="text-muted mb-0">
                                    These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance
                                    with the laws of India.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default TermsConditions;
