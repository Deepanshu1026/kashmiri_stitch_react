import React from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const faqItems = [
        {
            question: "What types of products do you sell?",
            answer: "We specialize in authentic Kashmiri products including Pashmina shawls, Kani shawls, Sozni embroidery works, Paper Mache items, and traditional Aari work clothing for men, women, and kids."
        },
        {
            question: "How do I care for my Pashmina shawl?",
            answer: "Pashmina requires gentle care. We recommend dry cleaning to maintain its texture and longevity. If washing at home, use cold water and a specialized wool detergent, and never wring or twist the fabric."
        },
        {
            question: "Do you ship internationally?",
            answer: "Yes, we ship globally! Shipping costs and delivery times vary depending on your location. You can view the shipping options at checkout."
        },
        {
            question: "What is your return policy?",
            answer: "We accept returns within 14 days of delivery for unused items with original tags. Please visit our Return Policy page for more detailed information."
        },
        {
            question: "Are your products handmade?",
            answer: "Absolutely. We take pride in supporting local artisans. All our embroidery and weaving works are handcrafted by skilled artisans in Kashmir."
        }
    ];

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
                                {faqItems.map((item, index) => (
                                    <div key={index} className="accordion-item mb-3 border bg-white rounded-3 overflow-hidden">
                                        <h2 className="accordion-header">
                                            <button
                                                className={`accordion-button fs-5 py-4 px-4 bg-white shadow-none text-dark fw-bold ${activeIndex !== index ? 'collapsed' : ''}`}
                                                type="button"
                                                onClick={() => toggleAccordion(index)}
                                            >
                                                {item.question}
                                            </button>
                                        </h2>
                                        <div className={`accordion-collapse collapse ${activeIndex === index ? 'show' : ''}`}>
                                            <div className="accordion-body px-4 pb-4 pt-0 text-muted">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};


export default FAQ;
