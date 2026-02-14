import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const OrderTracking = () => {
    const [orderId, setOrderId] = useState('');
    const [trackingResult, setTrackingResult] = useState(null);

    const handleTrackOrder = (e) => {
        e.preventDefault();
        // Mock tracking logic - replace with actual API call
        if (orderId) {
            setTrackingResult({
                status: 'In Transit',
                location: 'Srinagar, Kashmir',
                estimatedDelivery: 'Feb 20, 2026',
                details: 'Your order has left our facility and is on its way.'
            });
        }
    };

    return (
        <main>
            {/* Page Header */}
            <div className="ul-page-header">
                <div className="ul-container">
                    <h1 className="ul-page-title">Order Tracking</h1>
                    <ul className="ul-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>Track Order</li>
                    </ul>
                </div>
            </div>

            <section className="ul-tracking ul-section-spacing">
                <div className="ul-container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            <div className="text-center mb-5">
                                <h2 className="ul-section-title mb-3">Track Your Order</h2>
                                <p className="text-muted">Enter your Order ID in the box below to see your order status. The Order ID was found on your receipt and in the confirmation email you should have received.</p>
                            </div>

                            <form onSubmit={handleTrackOrder} className="bg-light p-5 rounded-4 shadow-sm">
                                <div className="mb-4">
                                    <label htmlFor="orderId" className="form-label fw-bold">Order ID</label>
                                    <input
                                        type="text"
                                        className="form-control py-3 px-4 border-0"
                                        id="orderId"
                                        placeholder="Found in your order confirmation email"
                                        value={orderId}
                                        onChange={(e) => setOrderId(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="billingEmail" className="form-label fw-bold">Billing Email</label>
                                    <input type="email" className="form-control py-3 px-4 border-0" id="billingEmail" placeholder="Email you used during checkout" />
                                </div>
                                <button type="submit" className="ul-btn w-100">Track</button>
                            </form>

                            {trackingResult && (
                                <div className="mt-5 bg-white border rounded-4 p-4 animate__animated animate__fadeIn">
                                    <h4 className="mb-3">Order Status: <span className="text-primary">{trackingResult.status}</span></h4>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="text-muted">Current Location:</span>
                                        <span className="fw-medium">{trackingResult.location}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-3">
                                        <span className="text-muted">Estimated Delivery:</span>
                                        <span className="fw-medium">{trackingResult.estimatedDelivery}</span>
                                    </div>
                                    <p className="mb-0 small bg-light p-3 rounded">{trackingResult.details}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OrderTracking;
