import React from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Link, useLocation } from 'react-router-dom';

const Shop = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialCategory = searchParams.get('category') || 'All';

    const [searchQuery, setSearchQuery] = React.useState('');
    const [selectedCategory, setSelectedCategory] = React.useState(initialCategory);
    const [sortOrder, setSortOrder] = React.useState('default');

    // Extract unique categories from products
    const categories = ['All', ...new Set(products.map(p => p.category))];

    const filteredProducts = products
        .filter(product => {
            const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
            const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
            if (sortOrder === 'price-low-high') return parseFloat(a.price) - parseFloat(b.price);
            if (sortOrder === 'price-high-low') return parseFloat(b.price) - parseFloat(a.price);
            return 0; // default order
        });

    return (
        <main>
            <div className="ul-page-header">
                <div className="ul-container">
                    <h1 className="ul-page-title">Shop Collection</h1>
                    <ul className="ul-breadcrumb">
                        <li><Link to="/">Home</Link></li>
                        <li>Shop</li>
                    </ul>
                </div>
            </div>

            <section className="ul-products ul-section-spacing">
                <div className="ul-container">

                    {/* Filter and Search Controls */}
                    <div className="row mb-5 align-items-center g-3">
                        <div className="col-lg-4 col-md-6">
                            <div className="shop-search-box">
                                <span className="shop-search-icon"><i className="flaticon-search"></i></span>
                                <input
                                    type="text"
                                    className="shop-search-input"
                                    placeholder="Search products..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 order-lg-2 order-3">
                            <div className="d-flex flex-wrap gap-2 justify-content-lg-center justify-content-start">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        className={`shop-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                                        onClick={() => setSelectedCategory(cat)}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 order-lg-3 order-2 text-md-end">
                            <select
                                className="shop-sort-select form-select w-auto d-inline-block"
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                            >
                                <option value="default">Default Sorting</option>
                                <option value="price-low-high">Price: Low to High</option>
                                <option value="price-high-low">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

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
                            <div className="col-12 text-center py-5">
                                <div className="mb-3">
                                    <i className="flaticon-search display-1 text-muted"></i>
                                </div>
                                <h3>No products found</h3>
                                <p className="text-muted">Try adjusting your search or filter to find what you're looking for.</p>
                                <button
                                    className="btn btn-outline-dark mt-3"
                                    onClick={() => {
                                        setSearchQuery('');
                                        setSelectedCategory('All');
                                        setSortOrder('default');
                                    }}
                                >
                                    Clear Filters
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Shop;
