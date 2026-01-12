import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetails = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();

    if (!product) {
        return (
            <div className="ul-container ul-section-spacing">
                <h2>Product not found</h2>
                <Link to="/" className="ul-btn">Back to Home</Link>
            </div>
        );
    }

    const handleQuantityChange = (type) => {
        if (type === 'inc') {
            setQuantity(prev => prev + 1);
        } else {
            setQuantity(prev => (prev > 1 ? prev - 1 : 1));
        }
    };

    return (
        <main>
            {/* Refactored Page Header Section */}
            <div className="product-details-header-wrapper">
                <div className="ul-container">
                    {/* 1. Title is separate and above the breadcrumb box */}
                    <h1 className="product-details-title-top">{product.title}</h1>

                    {/* 2. Breadcrumb is inside a centered pink pill box */}
                    <div className="product-details-breadcrumb-box">
                        {/* Centered Breadcrumb */}
                        <ul className="ul-breadcrumb">
                            <li>
                                <Link to="/">
                                    {/* Home Icon SVG */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
                                    </svg>
                                </Link>
                            </li>
                            <li><span className="separator">/</span></li>
                            <li><Link to="/shop">Shop</Link></li>
                            <li><span className="separator">/</span></li>
                            <li><span className="current-page">{product.title}</span></li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="ul-product-details ul-section-spacing">
                <div className="ul-container">
                    <div className="ul-product-details-top">
                        <div className="row align-items-center ul-bs-row">
                            <div className="col-lg-6">
                                <div className="ul-product-details-img">
                                    <img src={product.img} alt={product.title} />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ul-product-details-txt">
                                    <div className="ul-product-details-rating">
                                        <div className="rating">
                                            <i className="flaticon-star"></i>
                                            <i className="flaticon-star"></i>
                                            <i className="flaticon-star"></i>
                                            <i className="flaticon-star"></i>
                                            <i className="flaticon-star"></i>
                                        </div>
                                        <span>(25 Customer Reviews)</span>
                                    </div>

                                    <h2 className="ul-product-details-title">{product.title}</h2>
                                    <div className="ul-product-details-price">
                                        <span className="price">${product.price}</span>
                                    </div>
                                    <p className="ul-product-details-descr">
                                        {product.description || "Experience the finest quality and craftsmanship with this authentic Kashmiri product. Made with love and care, it brings elegance and style to your wardrobe."}
                                    </p>

                                    <div className="ul-product-details-options">
                                        <div className="ul-product-details-sizes ul-product-details-option">
                                            <span className="title">Size:</span>
                                            <div className="variants">
                                                <button className="active">S</button>
                                                <button>M</button>
                                                <button>L</button>
                                                <button>XL</button>
                                            </div>
                                        </div>
                                        <div className="ul-product-details-colors ul-product-details-option">
                                            <span className="title">Color:</span>
                                            <div className="variants">
                                                <button className="active color-btn blue"></button>
                                                <button className="color-btn red"></button>
                                                <button className="color-btn green"></button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="ul-product-details-quantity">
                                        <form onSubmit={(e) => e.preventDefault()}>
                                            <input type="number" readOnly value={quantity} />
                                            <div className="btns">
                                                <button type="button" className="plus-btn" onClick={() => handleQuantityChange('inc')}><i className="flaticon-plus"></i></button>
                                                <button type="button" className="minus-btn" onClick={() => handleQuantityChange('dec')}><i className="flaticon-minus"></i></button>
                                            </div>
                                        </form>
                                    </div>

                                    <div className="ul-product-details-actions">
                                        <div className="left">
                                            <button className="add-to-cart" onClick={() => addToCart(product, quantity)}>
                                                <span className="text">Add to Cart</span>
                                                <span className="icon"><i className="flaticon-shopping-bag"></i></span>
                                            </button>
                                            <button className="add-to-wishlist">
                                                <span className="icon"><i className="flaticon-heart"></i></span>
                                                <span className="text">Wishlist</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="ul-product-details-meta mt-4">
                                        <span>SKU: {product.id}00{product.id}</span> <br />
                                        <span>Category: {product.category}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ul-product-details-long-descr-wrapper">
                        <h3 className="ul-product-details-inner-title">Description</h3>
                        <p>
                            Elevate your style with our {product.title}, a masterpiece of traditional craftsmanship and modern design.
                            Perfect for any occasion, this piece promises comfort and elegance. The intricate details reflect the rich heritage of Kashmiri artistry.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProductDetails;
