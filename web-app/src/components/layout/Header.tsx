import { fetchAPI } from '@/utils/strapi';
import { getStrapiMedia } from '@/utils/strapi';
import Link from 'next/link';
import Image from 'next/image';
import './Header.css';

async function getGlobalData() {
    try {
        const data = await fetchAPI("/global", {
            populate: {
                logo: true,
                favicon: true
            }
        });
        return data?.data;
    } catch (error) {
        console.error("Failed to fetch global data:", error);
        return null;
    }
}

import HeaderScrollWrapper from './HeaderScrollWrapper';

export default async function Header() {
    const globalData = await getGlobalData();
    const logoUrl = getStrapiMedia(globalData?.logo?.url);
    const defaultLogo = "/assets/images/logo-orange.png";
    const activeLogo = logoUrl || defaultLogo;

    return (
        <>
            {/* Minimalist Morphing Header */}
            <HeaderScrollWrapper>
                <div className="header-dock">
                    {/* Logo Section */}
                    <div className="dock-logo">
                        <Link href="/">
                            <img src={activeLogo} alt="Logo" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="dock-nav">
                        <Link href="/" className="dock-link">Home</Link>
                        <Link href="/about" className="dock-link">About</Link>
                        <Link href="/work" className="dock-link">Work</Link>
                        <Link href="/blog" className="dock-link">Blog</Link>
                        <Link href="/contact" className="dock-link dock-link-cta">Contact</Link>
                    </nav>

                    {/* Mobile Menu Toggle Button */}
                    <button className="dock-mobile-toggle tp-offcanvas-open-btn">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>
                </div>
            </HeaderScrollWrapper>

            {/* tp-offcanvus-area-start (Keeping for functional consistency) */}
            <div className="tp-offcanvas-area vz-offcanvas-style">
                <div className="tp-offcanvas-wrapper default">
                    <div className="tp-offcanvas-top d-flex align-items-center justify-content-between">
                        <div className="tp-offcanvas-logo tp-el-offcanvas-logo">
                            <Link href="/">
                                <img src={activeLogo} alt="Logo" style={{ height: '32px', width: 'auto' }} />
                            </Link>
                        </div>

                        <div className="tp-offcanvas-close">
                            <button className="tp-offcanvas-close-btn">
                                <svg width="37" height="38" viewBox="0 0 37 38" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.19141 9.80762L27.5762 28.1924" stroke="currentColor"
                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M9.19141 28.1924L27.5762 9.80761" stroke="currentColor"
                                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="tp-offcanvas-main">
                        <div className="tp-offcanvas-content mb-40 mt-40">
                            <nav className="mb-40">
                                <ul className="mobile-menu-list" style={{ listStyle: 'none', padding: 0 }}>
                                    {['Home', 'About', 'Work', 'Blog', 'Contact'].map((item) => (
                                        <li key={item} style={{ marginBottom: '20px' }}>
                                            <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                                style={{ fontSize: '24px', fontWeight: '600', color: '#000', textDecoration: 'none' }}>
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>

                            <h4 className="tp-offcanvas-title mb-20" style={{ fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', color: '#999' }}>INFORMATION</h4>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li className="d-block mb-10"><a href="tel:+42077001007" style={{ color: '#666', fontSize: '16px' }}>+ 4 20 7700 1007</a></li>
                                <li className="d-block mb-10"><a href="mailto:hello@agntix.com" style={{ color: '#666', fontSize: '16px' }}>hello@agntix.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="body-overlay"></div>
            </div>
            {/* tp-offcanvus-area-end */}
        </>
    );
}
