import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Link, useLocation } from 'react-router-dom';

const Shop = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const categoryQuery = searchParams.get('category');

    const filteredProducts = categoryQuery
        ? products.filter(product => product.category.toLowerCase() === categoryQuery.toLowerCase())
        : products;

    return (
        <main>
            <div className="ul-page-header">
                <div className="ul-container">
                    <h1 className="ul-page-title">{categoryQuery ? `${categoryQuery}'s Collection` : "Shop"}</h1>
                    <ul className="ul-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>Shop</li>
                    </ul>
                </div>
            </div>

            <section className="ul-products ul-section-spacing">
                <div className="ul-container">
                    <div className="row row-cols-xxl-4 row-cols-xl-3 row-cols-lg-3 row-cols-2 row-cols-xxs-1 ul-bs-row">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map(product => (
                                <div className="col" key={product.id}>
                                    <ProductCard
                                        id={product.id}
                                        img={product.img}
                                        title={product.title}
                                        price={product.price}
                                        category={product.category}
                                    />
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center">
                                <h3>No products found in this category.</h3>
                            </div>
                        )}
                    </div>
                </div>
            </section >
        </main >
    );
};

export default Shop;
