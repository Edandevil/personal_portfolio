
import { fetchAPI } from '@/utils/strapi';
import Link from 'next/link';

async function getFooterData() {
    try {
        const data = await fetchAPI("/footer", {
            populate: {
                social_links: true,
                quick_links: true
            }
        });
        return data?.data;
    } catch (error) {
        console.error("Failed to fetch footer data:", error);
        return null;
    }
}

// Icon mapping
const socialIcons: Record<string, any> = {
    facebook: { path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
    twitter: { path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5 4.1 1.2 8.3-1.4 8.3-1.4s-1.8.8-4-1.6c0 0 1.2.2 2-1-1.6-.2-3-2.6-2.6-5.8 0 0 .9 1.1 2.3 0C8 8.1 8 3.5 11 3.5c0 0 2.2-2 5 0 1.9-1.2 3.4-1 3.4-1-.7 2-2.3 3.6-2.3 3.6z" },
    dribbble: { path: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm7.93 6A8 8 0 0 1 19 15.13a3.5 3.5 0 0 0-1.29-4.8 8.19 8.19 0 0 0 .22-2.33zM12 20a8 8 0 0 1-5-1.93C7.5 16.5 9 15.6 11.66 15.6c.55 0 1.09.07 1.62.19A8 8 0 0 1 12 20zm5-3.07c-2.34-.35-4.85-.06-7.2.8A7.88 7.88 0 0 1 4.5 11c1.37-1.45 4.54-1.2 5.09-1.18A7.94 7.94 0 0 1 12 4a7.92 7.92 0 0 1 5.38 2.39 8.12 8.12 0 0 0-.38 2.54z" },
    instagram: {
        path: "M16 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm4-9a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 7z",
        isInstagram: true
    }
};

export default async function Footer() {
    const data = await getFooterData();

    // Default fallback data
    const {
        headline = "Helping start-ups scale & grow.",
        social_links = [],
        quick_links_title = "QUICK LINKS",
        quick_links = [],
        contact_title = "CONTACT",
        contact_email = "agntixs@studio.com",
        contact_phone = "+(302) 555-0107",
        contact_address = "4517 Washington Ave. Manchester, \nKentucky 39495",
        copyright_text = "VIZON.STUDIO"
    } = data || {};

    return (
        <footer className="tp-footer-area p-relative z-index-1 bg-black pt-120" style={{ backgroundColor: '#111' }}>
            <div className="container">
                <div className="row">
                    {/* Left Column: Headline */}
                    <div className="col-xl-6 col-lg-6 col-md-12 mb-50">
                        <div className="tp-footer-widget">
                            <h4 className="tp-footer-widget-title tp-el-footer-title text-white"
                                style={{ fontSize: '80px', lineHeight: '1', fontWeight: '700', fontFamily: 'var(--tp-ff-body)' }}
                                dangerouslySetInnerHTML={{ __html: headline.replace(/\n/g, '<br />') }}
                            >
                            </h4>
                            <div className="tp-footer-widget-social mt-50 d-flex" style={{ gap: '10px' }}>
                                {/* Social Icons - Circular Buttons with SVGs */}
                                {social_links.length > 0 ? social_links.map((link: any, i: number) => {
                                    const iconData = socialIcons[link.platform] || socialIcons['facebook']; // fallback
                                    return (
                                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                                            className="d-flex justify-content-center align-items-center"
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                borderRadius: '50%',
                                                backgroundColor: '#1a1a1a',
                                                color: '#fff',
                                                border: '1px solid #333',
                                                transition: 'all 0.3s'
                                            }}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d={iconData.path} />
                                                {iconData.isInstagram && <circle cx="12" cy="12" r="4" />}
                                                {iconData.isInstagram && <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />}
                                            </svg>
                                        </a>
                                    )
                                }) : (
                                    // Fallback text if no links, or empty array
                                    null
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Links and Contact */}
                    <div className="col-xl-6 col-lg-6 col-md-12">
                        <div className="row">
                            {/* Quick Links as Pills */}
                            <div className="col-xl-6 col-lg-6 col-md-6 mb-50">
                                <div className="tp-footer-widget">
                                    <h4 className="tp-footer-widget-title-sm text-white mb-20"
                                        style={{
                                            fontSize: '14px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px',
                                            fontFamily: '"Platform", sans-serif',
                                            fontWeight: '700',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}>
                                        <span style={{ fontSize: '18px', lineHeight: 1 }}>●</span> {quick_links_title}
                                    </h4>
                                    <div className="tp-footer-widget-menu">
                                        <div className="d-flex flex-wrap" style={{ gap: '10px' }}>
                                            {quick_links.map((item: any, i: number) => (
                                                <Link key={i} href={item.url}
                                                    className="tp-btn-pill"
                                                    style={{
                                                        padding: '10px 25px',
                                                        borderRadius: '30px',
                                                        border: '1px solid #333',
                                                        color: '#fff',
                                                        fontSize: '14px',
                                                        display: 'inline-block',
                                                        textTransform: 'uppercase',
                                                        backgroundColor: '#1a1a1a',
                                                        transition: 'all 0.3s'
                                                    }}>
                                                    {item.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Info */}
                            <div className="col-xl-6 col-lg-6 col-md-6 mb-50">
                                <div className="tp-footer-widget">
                                    <h4 className="tp-footer-widget-title-sm text-white mb-20"
                                        style={{
                                            fontSize: '14px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px',
                                            fontFamily: '"Platform", sans-serif',
                                            fontWeight: '700',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '10px'
                                        }}>
                                        <span style={{ fontSize: '18px', lineHeight: 1 }}>●</span> {contact_title}
                                    </h4>
                                    <div className="tp-footer-widget-info">
                                        <p style={{ color: '#999', marginBottom: '5px' }}>{contact_email}</p>
                                        <p style={{ color: '#999', marginBottom: '20px' }}>{contact_phone}</p>
                                        <p style={{ color: '#999', whiteSpace: 'pre-line' }}>
                                            {contact_address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom GIANT TEXT */}
                <div className="row">
                    <div className="col-12">
                        <div className="tp-copyright-content text-center pb-30 pt-40">
                            <h2 style={{
                                fontFamily: 'var(--tp-ff-thunder)', // Use Thunder font
                                fontWeight: '800',
                                fontSize: '14vw', // Responsive giant size
                                lineHeight: '0.8',
                                color: '#FF0000', // Red color
                                textShadow: '0 0 20px rgba(255, 0, 0, 0.6), 0 0 50px rgba(255, 0, 0, 0.4)', // Neon glow
                                margin: 0,
                                textAlign: 'center',
                                width: '100%',
                                textTransform: 'uppercase',
                                whiteSpace: 'nowrap'
                            }}>
                                {copyright_text}
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
