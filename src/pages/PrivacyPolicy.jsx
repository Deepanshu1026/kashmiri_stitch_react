import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <main>
            {/* Page Header */}
            <div className="ul-page-header">
                <div className="ul-container">
                    <h1 className="ul-page-title">Privacy Policy</h1>
                    <ul className="ul-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>

            <section className="ul-privacy-policy ul-section-spacing">
                <div className="ul-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="bg-light p-5 rounded-4">
                                <h2 className="mb-4">1. Introduction</h2>
                                <p className="text-muted mb-5">
                                    Welcome to Kashmiri Stitch. We value your privacy and are committed to protecting your personal data.
                                    This Privacy Policy explains how we collect, use, and share your information when you visit or make a purchase from our website.
                                </p>

                                <h2 className="mb-4">2. Information We Collect</h2>
                                <p className="text-muted mb-4">
                                    When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
                                </p>
                                <p className="text-muted mb-5">
                                    Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site.
                                </p>

                                <h2 className="mb-4">3. How We Use Your Information</h2>
                                <p className="text-muted mb-5">
                                    We use the Order Information that we collect generally to fulfill any orders placed through the Site (including processing your payment information, arranging for shipping, and providing you with invoices and/or order confirmations).
                                </p>

                                <h2 className="mb-4">4. Sharing Your Personal Information</h2>
                                <p className="text-muted mb-5">
                                    We share your Personal Information with third parties to help us use your Personal Information, as described above. For example, we use Google Analytics to help us understand how our customers use the Site.
                                </p>

                                <h2 className="mb-4">5. Your Rights</h2>
                                <p className="text-muted mb-5">
                                    If you are a European resident, you have the right to access personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.
                                </p>

                                <h2 className="mb-4">6. Changes</h2>
                                <p className="text-muted mb-0">
                                    We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;
