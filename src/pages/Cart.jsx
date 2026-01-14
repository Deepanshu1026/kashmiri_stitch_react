import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    const calculateSubtotal = () => {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    };

    return (
        <main>
            <div className="ul-page-header">
                <div className="ul-container">
                    <h1 className="ul-page-title">Cart</h1>
                    <ul className="ul-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>

            <section className="ul-cart ul-section-spacing">
                <div className="ul-container">
                    {cart.length === 0 ? (
                        <div className="text-center">
                            <h2>Your cart is empty</h2>
                            <Link to="/shop" className="ul-btn mt-3">Execute Shopping</Link>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="ul-cart-table-wrapper">
                                    <table className="ul-cart-table">
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Subtotal</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cart.map((item, index) => (
                                                <tr key={`${item.id}-${index}`}>
                                                    <td>
                                                        <div className="ul-cart-product d-flex align-items-center gap-3">
                                                            <div className="ul-cart-product-img">
                                                                <img src={item.img} alt={item.title} style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }} />
                                                            </div>
                                                            <div className="ul-cart-product-txt">
                                                                <h6 className="ul-cart-product-title mb-0"><Link to={`/shop/${item.id}`}>{item.title}</Link></h6>
                                                                <span className="ul-cart-product-cat text-muted" style={{ fontSize: '13px' }}>{item.category}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="ul-cart-item-price">${item.price}</td>
                                                    <td>
                                                        <div className="ul-product-details-quantity">
                                                            <form onSubmit={(e) => e.preventDefault()}>
                                                                <input type="number" readOnly value={item.quantity} />
                                                            </form>
                                                        </div>
                                                    </td>
                                                    <td className="ul-cart-item-subtotal">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </td>
                                                    <td className="ul-cart-item-remove">
                                                        <button onClick={() => removeFromCart(item.id)}><i className="flaticon-close"></i></button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="ul-cart-expense-overview" style={{ border: '1px solid #eee', padding: '30px', borderRadius: '15px' }}>
                                    <h3 className="ul-cart-expense-overview-title">Cart Totals</h3>
                                    <div className="ul-cart-expense-overview-content">
                                        <div className="single-row d-flex justify-content-between mb-3 border-bottom pb-3">
                                            <span className="inner-title">Subtotal</span>
                                            <span className="number">${calculateSubtotal()}</span>
                                        </div>
                                        <div className="single-row d-flex justify-content-between mb-4">
                                            <span className="inner-title fw-bold">Total</span>
                                            <span className="number fw-bold" style={{ color: '#d12a2a' }}>${calculateSubtotal()}</span>
                                        </div>
                                        <button className="ul-btn w-100 text-center" style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>Proceed to Checkout</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Cart;
