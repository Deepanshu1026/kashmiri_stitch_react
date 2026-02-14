import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    return (
        <main>
            {/* Page Header */}
            <div className="ul-page-header">
                <div className="ul-container">
                    <h1 className="ul-page-title">Frequently Asked Questions</h1>
                    <ul className="ul-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>

            <section className="ul-faq ul-section-spacing">
                <div className="ul-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="accordion" id="faqAccordion">
                                {/* FAQ Item 1 */}
                                <div className="accordion-item mb-3 border bg-white rounded-3 overflow-hidden">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button fs-5 py-4 px-4 bg-white shadow-none text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What types of products do you sell?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body px-4 pb-4 pt-0 text-muted">
                                            We specialize in authentic Kashmiri products including Pashmina shawls, Kani shawls, Sozni embroidery works, Paper Mache items, and traditional Aari work clothing for men, women, and kids.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Item 2 */}
                                <div className="accordion-item mb-3 border bg-white rounded-3 overflow-hidden">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed fs-5 py-4 px-4 bg-white shadow-none text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            How do I care for my Pashmina shawl?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body px-4 pb-4 pt-0 text-muted">
                                            Pashmina requires gentle care. We recommend dry cleaning to maintain its texture and longevity. If washing at home, use cold water and a specialized wool detergent, and never wring or twist the fabric.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Item 3 */}
                                <div className="accordion-item mb-3 border bg-white rounded-3 overflow-hidden">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed fs-5 py-4 px-4 bg-white shadow-none text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Do you ship internationally?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body px-4 pb-4 pt-0 text-muted">
                                            Yes, we ship globally! Shipping costs and delivery times vary depending on your location. You can view the shipping options at checkout.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Item 4 */}
                                <div className="accordion-item mb-3 border bg-white rounded-3 overflow-hidden">
                                    <h2 className="accordion-header" id="headingFour">
                                        <button className="accordion-button collapsed fs-5 py-4 px-4 bg-white shadow-none text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            What is your return policy?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body px-4 pb-4 pt-0 text-muted">
                                            We accept returns within 14 days of delivery for unused items with original tags. Please visit our Return Policy page for more detailed information.
                                        </div>
                                    </div>
                                </div>

                                {/* FAQ Item 5 */}
                                <div className="accordion-item mb-3 border bg-white rounded-3 overflow-hidden">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed fs-5 py-4 px-4 bg-white shadow-none text-dark fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                            Are your products handmade?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#faqAccordion">
                                        <div className="accordion-body px-4 pb-4 pt-0 text-muted">
                                            Absolutely. We take pride in supporting local artisans. All our embroidery and weaving works are handcrafted by skilled artisans in Kashmir.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default FAQ;
