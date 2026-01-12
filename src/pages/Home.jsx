import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
    useEffect(() => {
        // Initialize Banner Slider
        if (window.Swiper) {
            new window.Swiper(".ul-banner-slider", {
                slidesPerView: 1,
                loop: true,
                effect: "fade",
                pagination: {
                    el: ".ul-banner-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".ul-banner-slider-nav .next",
                    prevEl: ".ul-banner-slider-nav .prev",
                },
            });

            new window.Swiper(".ul-banner-img-slider", {
                slidesPerView: 1,
                loop: true,
                grabCursor: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
            });

            // Initialize Testimonial Slider
            new window.Swiper(".ul-reviews-slider", {
                slidesPerView: 3,
                spaceBetween: 30,
                loop: true,
                pagination: {
                    el: ".ul-reviews-pagination",
                    clickable: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                },
            });
        }
    }, []);

    const trendingProducts = products.filter(p => p.id >= 9 && p.id <= 12);
    const regularProducts = products.filter(p => p.id <= 8);


    return (
        <main>
            {/* BANNER SECTION START */}
            <div className="overflow-hidden">
                <div className="ul-container">
                    <section className="ul-banner">
                        <div className="ul-banner-slider-wrapper">
                            <div className="ul-banner-slider swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide ul-banner-slide">
                                        <div className="ul-banner-slide-img">
                                            <img src="/assets/img/kashmiri_model_1.png" alt="Banner Image" />
                                        </div>
                                        <div className="ul-banner-slide-txt">
                                            <span className="ul-banner-slide-sub-title">Perfect for Summer Evenings</span>
                                            <h1 className="ul-banner-slide-title">Casual and Stylish for All Seasons</h1>
                                            <p className="ul-banner-slide-price">Starting From <span className="price">$129</span>
                                            </p>
                                            <Link to="/shop" className="ul-btn">SHOP NOW <i
                                                className="flaticon-up-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                    <div className="swiper-slide ul-banner-slide">
                                        <div className="ul-banner-slide-img">
                                            <img src="/assets/img/newsuit.jpg" alt="Banner Image" />
                                        </div>
                                        <div className="ul-banner-slide-txt">
                                            <span className="ul-banner-slide-sub-title">Perfect for Summer Evenings</span>
                                            <h1 className="ul-banner-slide-title">Casual and Stylish for All Seasons</h1>
                                            <p className="ul-banner-slide-price">Starting From <span className="price">$129</span>
                                            </p>
                                            <Link to="/shop" className="ul-btn">SHOP NOW <i
                                                className="flaticon-up-right-arrow"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="ul-banner-slider-nav-wrapper">
                                    <div className="ul-banner-slider-nav">
                                        <button className="prev"><span className="icon"><i
                                            className="flaticon-down"></i></span></button>
                                        <button className="next"><span className="icon"><i
                                            className="flaticon-down"></i></span></button>
                                    </div>
                                </div>
                                <div className="ul-banner-pagination"></div>
                            </div>
                        </div>

                        <div className="ul-banner-img-slider-wrapper">
                            <div className="ul-banner-img-slider swiper">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <img src="/assets/img/banner-img-slide-1.jpg" alt="Banner Image" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/assets/img/banner-img-slide-2.jpg" alt="Banner Image" />
                                    </div>
                                    <div className="swiper-slide">
                                        <img src="/assets/img/banner-img-slide-3.jpg" alt="Banner Image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
            {/* BANNER SECTION END */}

            {/* SHOPPING EVERY DAY (PRODUCTS) START */}
            <section className="ul-products ul-section-spacing">
                <div className="ul-container">
                    <div className="ul-section-heading">
                        <div className="ul-section-heading-left">
                            <span className="ul-section-sub-title">New Arrivals</span>
                            <h2 className="ul-section-title">Shopping Every Day</h2>
                        </div>
                        <div className="ul-section-heading-right">
                            <Link to="/shop" className="ul-btn">View All Products <i className="flaticon-arrow-point-to-right"></i></Link>
                        </div>
                    </div>

                    <div className="row row-cols-xxl-4 row-cols-xl-3 row-cols-lg-3 row-cols-2 row-cols-xxs-1 ul-bs-row">
                        {regularProducts.map(product => (
                            <div className="col" key={product.id}>
                                <ProductCard
                                    id={product.id}
                                    img={product.img}
                                    title={product.title}
                                    price={product.price}
                                    category={product.category}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* SHOPPING EVERY DAY (PRODUCTS) END */}

            {/* AD BANNER START */}
            <div className="ul-container">
                <section className="ul-ad">
                    <div className="ul-inner-container">
                        <div className="ul-ad-content">
                            <div className="ul-ad-txt">
                                <span className="ul-ad-sub-title">Limited Offer</span>
                                <h2 className="ul-section-title">Get 50% Discount on All Items</h2>
                                <div className="ul-ad-categories">
                                    <span className="category"><i className="flaticon-sparkle"></i> Clothing</span>
                                    <span className="category"><i className="flaticon-sparkle"></i> Bags</span>
                                    <span className="category"><i className="flaticon-sparkle"></i> Shoes</span>
                                    <span className="category"><i className="flaticon-sparkle"></i> Accessories</span>
                                </div>
                            </div>
                            <div className="ul-ad-img">
                                <img src="/assets/img/kashmiri_model_4.png" alt="Ad Image" style={{ maxHeight: '400px' }} />
                            </div>
                            <Link to="/shop" className="ul-btn">Shop Collection <i className="flaticon-arrow-point-to-right"></i></Link>
                        </div>
                    </div>
                </section>
            </div>
            {/* AD BANNER END */}


            {/* CATEGORY SECTION START */}
            <section className="ul-categories ul-section-spacing">
                <div className="ul-container">
                    <div className="ul-section-heading center">
                        <h2 className="ul-section-title">Top Selling Categories This Week</h2>
                    </div>
                    <div className="ul-inner-container">
                        <div className="row row-cols-lg-3 row-cols-md-3 row-cols-2 row-cols-xxs-1 ul-bs-row justify-content-center">
                            <div className="col">
                                <Link className="ul-category" to="/shop">
                                    <div className="ul-category-img">
                                        <img src="/assets/img/category_women.png" alt="Category Image" />
                                    </div>
                                    <div className="ul-category-txt">
                                        <span>Women</span>
                                    </div>
                                    <div className="ul-category-btn">
                                        <span><i className="flaticon-arrow-point-to-right"></i></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link className="ul-category" to="/shop">
                                    <div className="ul-category-img">
                                        <img src="/assets/img/category_men.png" alt="Category Image" />
                                    </div>
                                    <div className="ul-category-txt">
                                        <span>Men</span>
                                    </div>
                                    <div className="ul-category-btn">
                                        <span><i className="flaticon-arrow-point-to-right"></i></span>
                                    </div>
                                </Link>
                            </div>
                            <div className="col">
                                <Link className="ul-category" to="/shop">
                                    <div className="ul-category-img">
                                        <img src="/assets/img/category_kids.png" alt="Category Image" />
                                    </div>
                                    <div className="ul-category-txt">
                                        <span>Kids</span>
                                    </div>
                                    <div className="ul-category-btn">
                                        <span><i className="flaticon-arrow-point-to-right"></i></span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CATEGORY SECTION END */}

            {/* VIDEO BANNER START */}
            <div className="ul-container">
                <section className="ul-video">
                    <img src="/assets/img/video-banner.jpg" alt="Video Cover" className="ul-video-cover" />
                    <button className="ul-video-btn"><i className="flaticon-play"></i></button>
                </section>
            </div>
            {/* VIDEO BANNER END */}

            {/* TRENDING BEST SET START */}
            <section className="ul-products ul-section-spacing">
                <div className="ul-container">
                    <div className="ul-section-heading">
                        <div className="ul-section-heading-left">
                            <span className="ul-section-sub-title">Featured</span>
                            <h2 className="ul-section-title">Trending Best Set</h2>
                        </div>
                    </div>
                    <div className="row row-cols-xxl-4 row-cols-xl-3 row-cols-lg-3 row-cols-2 row-cols-xxs-1 ul-bs-row">
                        {trendingProducts.map(product => (
                            <div className="col" key={product.id}>
                                <ProductCard
                                    id={product.id}
                                    img={product.img}
                                    title={product.title}
                                    price={product.price}
                                    category={product.category}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* TRENDING BEST SET END */}

            {/* TESTIMONIALS START */}
            <div className="ul-reviews-wrapper ul-section-spacing">
                <div className="ul-container">
                    <div className="ul-section-heading center text-center">
                        <span className="ul-section-sub-title">Testimonials</span>
                        <h2 className="ul-section-title">What Clients Say</h2>
                    </div>
                </div>
                <div className="ul-reviews">
                    <div className="ul-reviews-slider swiper">
                        <div className="swiper-wrapper">
                            {/* Single Review */}
                            <div className="swiper-slide ul-review">
                                <div className="ul-review-rating">
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                </div>
                                <p className="ul-review-descr">
                                    "The quality of the fabric is exceptional. I bought a kurta set for my wedding anniversary and it was perfect."
                                </p>
                                <div className="ul-review-bottom">
                                    <div className="ul-review-reviewer">
                                        <div className="reviewer-image">
                                            <img src="/assets/img/review-author-1.png" alt="Reviewer" />
                                        </div>
                                        <div className="reviewer-info">
                                            <h5 className="reviewer-name">Sarah Jenkins</h5>
                                            <span className="reviewer-role">Customer</span>
                                        </div>
                                    </div>
                                    <div className="ul-review-icon">
                                        <i className="flaticon-quote"></i>
                                    </div>
                                </div>
                            </div>
                            {/* Single Review */}
                            <div className="swiper-slide ul-review">
                                <div className="ul-review-rating">
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                </div>
                                <p className="ul-review-descr">
                                    "Fast delivery and great packaging. I love the intricate embroidery on the Kashmiri shawls."
                                </p>
                                <div className="ul-review-bottom">
                                    <div className="ul-review-reviewer">
                                        <div className="reviewer-image">
                                            <img src="/assets/img/review-author-2.png" alt="Reviewer" />
                                        </div>
                                        <div className="reviewer-info">
                                            <h5 className="reviewer-name">Maria Garcia</h5>
                                            <span className="reviewer-role">Customer</span>
                                        </div>
                                    </div>
                                    <div className="ul-review-icon">
                                        <i className="flaticon-quote"></i>
                                    </div>
                                </div>
                            </div>
                            {/* Single Review */}
                            <div className="swiper-slide ul-review">
                                <div className="ul-review-rating">
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                    <i className="flaticon-star"></i>
                                </div>
                                <p className="ul-review-descr">
                                    "Highly recommended for anyone looking for authentic ethnic wear. Will definitely shop again."
                                </p>
                                <div className="ul-review-bottom">
                                    <div className="ul-review-reviewer">
                                        <div className="reviewer-image">
                                            <img src="/assets/img/review-author-3.png" alt="Reviewer" />
                                        </div>
                                        <div className="reviewer-info">
                                            <h5 className="reviewer-name">Priya Sharma</h5>
                                            <span className="reviewer-role">Customer</span>
                                        </div>
                                    </div>
                                    <div className="ul-review-icon">
                                        <i className="flaticon-quote"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ul-reviews-pagination"></div>
                    </div>
                </div>
            </div>
            {/* TESTIMONIALS END */}

            {/* BLOG SECTION START */}
            <section className="ul-blog ul-section-spacing">
                <div className="ul-container">
                    <div className="ul-section-heading">
                        <div className="ul-section-heading-left">
                            <span className="ul-section-sub-title">Latest News & Blog</span>
                            <h2 className="ul-section-title">Get Every Updates From Articles</h2>
                        </div>
                        <div className="ul-section-heading-right">
                            <Link to="/blog" className="ul-btn">Read More News <i className="flaticon-arrow-point-to-right"></i></Link>
                        </div>
                    </div>

                    <div className="row row-cols-xxl-3 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-1 ul-bs-row">
                        <div className="col">
                            <div className="ul-blog">
                                <div className="ul-blog-img">
                                    <img src="/assets/img/blog-1.jpg" alt="Blog Image" />
                                    <div className="ul-blog-date">
                                        <span className="day">25</span>
                                        <span className="month">Mar</span>
                                    </div>
                                </div>
                                <div className="ul-blog-txt">
                                    <span className="ul-blog-tag">Fashion</span>
                                    <h4 className="ul-blog-title"><Link to="/blog">Secrets of styling a Kashmiri Kurta</Link></h4>
                                    <Link to="/blog" className="ul-blog-read-more">Read More <i className="flaticon-arrow-point-to-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="ul-blog">
                                <div className="ul-blog-img">
                                    <img src="/assets/img/blog-2.jpg" alt="Blog Image" />
                                    <div className="ul-blog-date">
                                        <span className="day">22</span>
                                        <span className="month">Mar</span>
                                    </div>
                                </div>
                                <div className="ul-blog-txt">
                                    <span className="ul-blog-tag">Lifestyle</span>
                                    <h4 className="ul-blog-title"><Link to="/blog">The Art of Hand Embroidery</Link></h4>
                                    <Link to="/blog" className="ul-blog-read-more">Read More <i className="flaticon-arrow-point-to-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="ul-blog">
                                <div className="ul-blog-img">
                                    <img src="/assets/img/blog-3.jpg" alt="Blog Image" />
                                    <div className="ul-blog-date">
                                        <span className="day">20</span>
                                        <span className="month">Mar</span>
                                    </div>
                                </div>
                                <div className="ul-blog-txt">
                                    <span className="ul-blog-tag">Trends</span>
                                    <h4 className="ul-blog-title"><Link to="/blog">Top Trends for 2026</Link></h4>
                                    <Link to="/blog" className="ul-blog-read-more">Read More <i className="flaticon-arrow-point-to-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* BLOG SECTION END */}
        </main >
    );
};

export default Home;
