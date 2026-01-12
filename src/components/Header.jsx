import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        // Initialize SlimSelect for the category dropdown
        if (window.SlimSelect) {
            new window.SlimSelect({
                select: '#ul-header-search-category',
                settings: {
                    showSearch: false,
                }
            });
        }

        // Initialize Header Top Slider (Splide)
        if (window.Splide) {
            new window.Splide('.ul-header-top-slider', {
                type: 'loop',
                drag: 'free',
                focus: 'center',
                perPage: 3,
                autoScroll: {
                    speed: 1,
                },
                arrows: false,
                pagination: false,
            }).mount(window.splide.Extensions);
        }
    }, []);

    return (
        <>
            {/* SIDEBAR SECTION START */}
            <div className={`ul-sidebar ${isSidebarOpen ? 'active' : ''}`}>
                {/* header */}
                <div className="ul-sidebar-header">
                    <div className="ul-sidebar-header-logo">
                        <Link to="/">
                            <img src="/assets/img/logo.png" alt="logo" className="logo" />
                        </Link>
                    </div>
                    {/* sidebar closer */}
                    <button className="ul-sidebar-closer" onClick={toggleSidebar}><i className="flaticon-close"></i></button>
                </div>

                <div className="ul-sidebar-header-nav-wrapper d-block d-lg-none"></div>

                <div className="ul-sidebar-about d-none d-lg-block">
                    <span className="title">About glamer</span>
                    <p className="mb-0">Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam commodo,
                        scelerisque felis id, eleifend turpis. Phasellus in nulla quis erat tempor tristique eget vel purus.
                        Nulla pharetra pharetra pharetra. Praesent varius eget justo ut lacinia. Phasellus pharetra, velit
                        viverra lacinia consequat, ipsum odio mollis dolor, nec facilisis arcu arcu ultricies sapien. Quisque ut
                        dapibus nunc. Vivamus sit amet efficitur velit. Phasellus eget fermentum mauris. Suspendisse nec
                        dignissim nulla. Integer non quam commodo, scelerisque felis id, eleifend turpis. Phasellus in nulla
                        quis erat tempor tristique eget vel purus. Nulla pharetra pharetra pharetra. Praesent varius eget justo
                        ut lacinia. Phasellus pharetra velit.</p>
                </div>

                {/* sidebar footer */}
                <div className="ul-sidebar-footer">
                    <span className="ul-sidebar-footer-title">Follow us</span>
                    <div className="ul-sidebar-footer-social">
                        <a href="#"><i className="flaticon-facebook-app-symbol"></i></a>
                        <a href="#"><i className="flaticon-twitter"></i></a>
                        <a href="#"><i className="flaticon-instagram"></i></a>
                        <a href="#"><i className="flaticon-youtube"></i></a>
                    </div>
                </div>
            </div>
            {/* SIDEBAR SECTION END */}
            {isSidebarOpen && <div className="ul-sidebar-overlay" onClick={toggleSidebar}></div>}


            {/* HEADER SECTION START */}
            <header className="ul-header">
                {/* header top */}
                <div className="ul-header-top">
                    <div className="ul-header-top-slider splide">
                        <div className="splide__track">
                            <ul className="splide__list">
                                <li className="splide__slide">
                                    <p className="ul-header-top-slider-item"><i className="flaticon-sparkle"></i> limited time offer</p>
                                </li>
                                <li className="splide__slide">
                                    <p className="ul-header-top-slider-item"><i className="flaticon-sparkle"></i> limited time offer</p>
                                </li>
                                <li className="splide__slide">
                                    <p className="ul-header-top-slider-item"><i className="flaticon-sparkle"></i> limited time offer</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* header bottom */}
                <div className="ul-header-bottom">
                    <div className="ul-container">
                        <div className="ul-header-bottom-wrapper">
                            {/* header left */}
                            <div className="header-bottom-left">
                                <div className="logo-container">
                                    <Link to="/" className="d-inline-block">
                                        <img src="/assets/img/logo.png" alt="logo" className="logo" />
                                    </Link>
                                </div>

                                {/* search form */}
                                <div className="ul-header-search-form-wrapper flex-grow-1 flex-shrink-0">
                                    <form action="#" className="ul-header-search-form">
                                        <div className="dropdown-wrapper">
                                            <select name="search-category" id="ul-header-search-category">
                                                <option data-placeholder="true">Select Category</option>
                                                <option value="1">Clothing</option>
                                                <option value="2">Watches</option>
                                                <option value="3">Jewellery</option>
                                                <option value="4">Glasses</option>
                                            </select>
                                        </div>
                                        <div className="ul-header-search-form-right">
                                            <input type="search" name="header-search" id="ul-header-search"
                                                placeholder="Search Here" />
                                            <button type="submit"><span className="icon"><i
                                                className="flaticon-search-interface-symbol"></i></span></button>
                                        </div>
                                    </form>

                                    <button className="ul-header-mobile-search-closer d-xxl-none"><i
                                        className="flaticon-close"></i></button>
                                </div>
                            </div>

                            {/* header nav */}
                            <div className="ul-header-nav-wrapper">
                                <div className="to-go-to-sidebar-in-mobile">
                                    <nav className="ul-header-nav">
                                        <Link to="/">Home</Link>
                                        <Link to="/shop">Shop</Link>
                                        <Link to="/shop">Women</Link>
                                        <Link to="/shop">Men's</Link>
                                        <Link to="/shop">Kids</Link>
                                        <Link to="/blog">Blog</Link>

                                        <div className="has-sub-menu has-mega-menu">
                                            <a role="button">Pages</a>
                                            <div className="ul-header-submenu ul-header-megamenu">
                                                <div className="single-col">
                                                    <span className="single-col-title">Inner Pages</span>
                                                    <ul>
                                                        <li><Link to="/about">About</Link></li>
                                                        <li><Link to="/contact">Contact</Link></li>
                                                        <li><Link to="/login">Log In</Link></li>
                                                        <li><Link to="/signup">Sign Up</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            {/* actions */}
                            <div className="ul-header-actions">
                                <button className="ul-header-mobile-search-opener d-xxl-none"><i
                                    className="flaticon-search-interface-symbol"></i></button>
                                <Link to="/login"><i className="flaticon-user"></i></Link>
                                <Link to="/wishlist"><i className="flaticon-heart"></i></Link>
                                <Link to="/cart"><i className="flaticon-shopping-bag"></i></Link>
                            </div>

                            {/* sidebar opener */}
                            <div className="d-inline-flex">
                                <button className="ul-header-sidebar-opener" onClick={toggleSidebar}><i className="flaticon-hamburger"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* HEADER SECTION END */}
        </>
    );
};

export default Header;
