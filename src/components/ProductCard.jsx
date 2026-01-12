import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, img, title, price, category }) => {
    return (
        <div className="ul-product">
            <div className="ul-product-img">
                <img src={img} alt={title} />
                <div className="ul-product-actions">
                    <button><i className="flaticon-heart"></i></button>
                    <button><i className="flaticon-search-interface-symbol"></i></button>
                    <Link to="/cart"><i className="flaticon-shopping-bag"></i></Link>
                    <Link to={`/shop/${id}`}><i className="flaticon-arrow-point-to-right"></i></Link>
                </div>
            </div>
            <div className="ul-product-txt">
                <div className="ul-product-heading">
                    <span className="ul-product-price">${price}</span>
                    <span className="ul-product-discount-tag">New Arrival</span>
                </div>
                <h5 className="ul-product-title">
                    <Link to={`/shop/${id}`}>{title}</Link>
                </h5>
                <p className="ul-product-category">
                    <Link to={`/shop/${id}`}>{category}</Link>
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
