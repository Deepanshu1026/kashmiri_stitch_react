import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { cart } = useCart();
    const location = window.location.pathname;

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initialize Header Top Slider (Splide) safely
        if (window.Splide && document.querySelector('.ul-header-top-slider')) {
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
            }).mount(window.splide?.Extensions || {});
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* SIDEBAR SECTION START */}
            <div className={`ul-sidebar ${isSidebarOpen ? 'active' : ''}`}>
                <div className="ul-sidebar-header">
                    <div className="ul-sidebar-header-logo">
                        <Link to="/">
                            <img src="/assets/img/logo.png" alt="logo" className="logo" />
                        </Link>
                    </div>
                    <button className="ul-sidebar-closer" onClick={toggleSidebar}><i className="flaticon-close"></i></button>
                </div>

                <div className="ul-sidebar-header-nav-wrapper d-block d-lg-none"></div>

                <div className="ul-sidebar-about d-none d-lg-block">
                    <span className="title">About Kashmiri Stitch</span>
                    <p className="mb-0">
                        Bringing the authentic beauty of Kashmir to your doorstep. We specialize in traditional Pherans, Pashminas, and intricate embroidery work that tells a story of heritage and craftsmanship.
                    </p>
                </div>

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
            <header className={`ul-header ${isSticky ? 'sticky-header' : ''}`}>
                {/* header top */}
                <div className="ul-header-top">
                    <div className="ul-header-top-slider splide">
                        <div className="splide__track">
                            <ul className="splide__list">
                                <li className="splide__slide">
                                    <p className="ul-header-top-slider-item"><i className="flaticon-sparkle"></i> limited time offer: 20% OFF</p>
                                </li>
                                <li className="splide__slide">
                                    <p className="ul-header-top-slider-item"><i className="flaticon-sparkle"></i> Free Shipping on Orders over $100</p>
                                </li>
                                <li className="splide__slide">
                                    <p className="ul-header-top-slider-item"><i className="flaticon-sparkle"></i> Authentic Kashmiri Craftsmanship</p>
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

                                {/* search form (Hidden in sticky mode if needed, or styled differently) */}
                                <div className="ul-header-search-form-wrapper flex-grow-1 flex-shrink-0 d-none d-xl-block">
                                    <form action="/shop" className="ul-header-search-form">
                                        <div className="ul-header-search-form-right">
                                            <input type="search" name="search" id="ul-header-search" placeholder="Search for products..." />
                                            <button type="submit"><span className="icon"><i className="flaticon-search-interface-symbol"></i></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            {/* header nav */}
                            <div className="ul-header-nav-wrapper">
                                <div className="to-go-to-sidebar-in-mobile">
                                    <nav className="ul-header-nav">
                                        <Link to="/" className={location === '/' ? 'active' : ''}>Home</Link>
                                        <Link to="/shop" className={location.includes('/shop') ? 'active' : ''}>Shop</Link>
                                        <Link to="/about" className={location === '/about' ? 'active' : ''}>About</Link>
                                        <Link to="/contact" className={location === '/contact' ? 'active' : ''}>Contact</Link>

                                        <div className="has-sub-menu has-mega-menu">
                                            <a role="button">More</a>
                                            <div className="ul-header-submenu ul-header-megamenu">
                                                <div className="single-col">
                                                    <span className="single-col-title">Account</span>
                                                    <ul>
                                                        <li><Link to="/login">Log In</Link></li>
                                                        <li><Link to="/signup">Sign Up</Link></li>
                                                        <li><Link to="/cart">My Cart</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="single-col">
                                                    <span className="single-col-title">Categories</span>
                                                    <ul>
                                                        <li><Link to="/shop?category=Women">Women</Link></li>
                                                        <li><Link to="/shop?category=Men">Men</Link></li>
                                                        <li><Link to="/shop?category=Kids">Kids</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>

                            {/* actions */}
                            <div className="ul-header-actions">
                                <button className="ul-header-mobile-search-opener d-xxl-none"><i className="flaticon-search-interface-symbol"></i></button>
                                <Link to="/login"><i className="flaticon-user"></i></Link>
                                <Link to="/cart" className="position-relative">
                                    <i className="flaticon-shopping-bag"></i>
                                    {cart.length > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger" style={{ fontSize: '10px', padding: '5px 8px' }}>
                                        {cart.length}
                                    </span>}
                                </Link>
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
