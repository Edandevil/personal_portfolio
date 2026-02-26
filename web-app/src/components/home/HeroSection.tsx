"use client";
import React from 'react';
import Image from 'next/image';
import { HomeHeroData } from '@/types';
import { getStrapiMedia } from '@/utils/strapi';

interface HeroSectionProps {
    data?: HomeHeroData | null;
}

const HeroSection = ({ data }: HeroSectionProps) => {
    // Default values if data is missing (access directly, no attributes wrapper in Strapi v5)
    const {
        title_line_1 = "We are The Creative",
        title_line_2 = "design",
        title_line_3 = "studio",
        subtitle = "/ FROM LONDON",
        small_text = "The Creative",
    } = data || {};

    const torusUrl = getStrapiMedia(data?.torus_image?.url || "/assets/images/title-img.gif");
    const arrowUrl = getStrapiMedia(data?.arrow_image?.url || "/assets/images/title-img-2.gif");

    React.useEffect(() => {
        // ... (GSAP code remains the same)
        const gsap = (window as any).gsap;
        const ScrollTrigger = (window as any).ScrollTrigger;
        if (gsap && ScrollTrigger) {
            gsap.registerPlugin(ScrollTrigger);
            gsap.to(".tp-hero-2-content", {
                yPercent: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: ".tp-hero-2-area",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
            gsap.to(".tp-hero-2-shape-1", {
                yPercent: -80,
                ease: "none",
                scrollTrigger: {
                    trigger: ".tp-hero-2-area",
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
    }, []);

    // ... (Styles remain the same)

    return (
        <section className="tp-hero-2-area p-relative fix" style={{ backgroundColor: '#FEFFF8' }}>
            <style jsx>{`
                /* ... css ... */
                /* Paste existing CSS here, keeping it exactly is */
                .hero-content-wrapper {
                    padding-top: 350px !important;
                    padding-bottom: 100px !important;
                }
                .hero-inner-content {
                    padding-left: 80px !important;
                }
                /* Hide Elementor badges */
                .elementor-screen-only,
                [class*="elementor-widget-badge"] {
                    display: none !important;
                    visibility: hidden !important;
                }
                
                /* Blue arrow on the LEFT near WE ARE */
                .hero-arrow-wrapper {
                    position: absolute;
                    left: -120px;
                    top: 80px;
                    z-index: 2;
                }
                
                /* FROM LONDON - Bottom RIGHT positioning */
                .hero-london-text {
                    position: absolute;
                    right: 5%;
                    bottom: 15%;
                    z-index: 4;
                    text-align: right;
                }
                
                .hero-london-heading {
                    font-family: var(--tp-ff-thunder) !important;
                    font-weight: 900 !important;
                    line-height: 0.85 !important;
                    font-size: 100px !important;
                    color: #000000 !important;
                }
                
                /* Torus positioning - RIGHT Side */
                .tp-hero-2-shape-1 {
                    position: absolute;
                    right: 15%;
                    top: 15%;
                    z-index: 1;
                }
                
                /* Mobile Small (320px - 480px) */
                @media (max-width: 480px) {
                     .hero-title-main {
                        text-align: left !important;
                        font-size: 40px !important;
                        line-height: 0.9 !important;
                        padding-left: 0px !important;
                     }
                     .hero-content-wrapper {
                        padding-top: 120px !important;
                        padding-bottom: 50px !important;
                     }
                     .hero-inner-content {
                        padding-left: 15px !important;
                     }
                     .hero-london-text {
                        position: relative !important;
                        bottom: auto !important;
                        right: auto !important;
                        text-align: left !important;
                        margin-top: 20px !important;
                        padding-left: 12px !important;
                     }
                     .hero-london-heading {
                        font-size: 30px !important;
                     }
                     .tp-hero-2-shape-1,
                     .hero-arrow-wrapper,
                     em img {
                        display: none !important;
                     }
                }

                /* Mobile Medium (481px - 767px) */
                @media (min-width: 481px) and (max-width: 767px) {
                     .hero-title-main {
                        text-align: left !important;
                        font-size: 55px !important;
                        line-height: 0.9 !important;
                        padding-left: 0px !important;
                     }
                     .hero-content-wrapper {
                        padding-top: 150px !important;
                     }
                     .hero-inner-content {
                        padding-left: 20px !important;
                     }
                     .hero-london-text {
                        position: relative !important;
                        bottom: auto !important;
                        right: auto !important;
                        text-align: left !important;
                        margin-top: 25px !important;
                        padding-left: 16px !important;
                     }
                     .hero-london-heading {
                        font-size: 40px !important;
                     }
                     .tp-hero-2-shape-1,
                     em img {
                        display: none !important;
                     }
                }

                /* Tablet (768px - 1023px) */
                @media (min-width: 768px) and (max-width: 1023px) {
                    .hero-title-main {
                        font-size: 85px !important;
                        line-height: 0.9 !important;
                        text-align: left !important;
                        padding-left: 16px !important;
                        display: block !important;
                        letter-spacing: -2px !important;
                    }
                    .hero-title-main i {
                        font-size: 0.5em !important;
                        vertical-align: middle !important;
                    }
                    /* Hide the second break to put DESIGN and STUDIO on same line */
                    .hero-title-main br:nth-of-type(2) {
                        display: none !important;
                    }
                    .hero-title-main br:first-of-type {
                        display: block !important;
                        content: "" !important;
                        margin-bottom: 10px !important;
                    }
                    .hero-london-text {
                        position: absolute !important;
                        right: 5% !important;
                        bottom: 10% !important;
                        text-align: right !important;
                    }
                    .hero-london-heading {
                        font-size: 50px !important;
                    }
                    .tp-hero-2-shape-1 {
                        left: 5% !important;
                        bottom: 10% !important;
                        top: auto !important;
                        right: auto !important;
                    }
                    .tp-hero-2-shape-1 img {
                        max-width: 297px !important;
                        height: auto !important;
                    }
                    em img {
                        display: none !important;
                    }
                }

                /* Laptop Small (1024px - 1365px) */
                @media (min-width: 1024px) and (max-width: 1365px) {
                    .hero-title-main {
                        font-size: 120px !important;
                        line-height: 0.88 !important;
                        text-align: left !important;
                        padding-left: 32px !important;
                    }
                    .hero-london-text {
                        right: 4% !important;
                        bottom: 12% !important;
                    }
                    .hero-london-heading {
                        font-size: 70px !important;
                    }
                    .tp-hero-2-shape-1 {
                        right: 8% !important;
                        top: 12% !important;
                    }
                    .tp-hero-2-shape-1 img {
                        max-width: 429px !important;
                        height: auto !important;
                    }
                    em img {
                        width: 140px !important;
                        margin-left: -155px !important;
                        top: -30px !important;
                    }
                }
                
                /* Desktop (1366px+) */
                @media (min-width: 1366px) {
                    .hero-title-main {
                        font-size: 200px !important;
                        text-align: left !important;
                        padding-left: 80px !important;
                    }
                    .hero-london-text {
                        right: 5% !important;
                        bottom: 15% !important;
                    }
                    .hero-london-heading {
                        font-size: 100px !important;
                    }
                    .tp-hero-2-shape-1 {
                        right: 15% !important;
                        top: 15% !important;
                    }
                    .tp-hero-2-shape-1 img {
                        width: 578px !important;
                        height: auto !important;
                    }
                    em img {
                        width: 180px !important;
                        margin-left: -200px !important;
                        top: -40px !important;
                    }
                }
            `}</style>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-12">
                        <div className="tp-hero-2-wrapper p-relative">

                            {/* Torus Shape Image - RIGHT Side */}
                            <div className="tp-hero-2-shape-1 d-none d-md-block">
                                <img
                                    src={torusUrl || "/assets/images/title-img.gif"}
                                    alt="Creative Shape"
                                    className="img-fluid"
                                    style={{ width: '578px', height: 'auto' }}
                                />
                            </div>

                            {/* Main Content Area - Left Aligned */}
                            <div className="tp-hero-2-content hero-content-wrapper">
                                <div className="p-relative hero-inner-content">

                                    {/* Main Title - LEFT ALIGNED */}
                                    <h2 className="vz-about-2-title fs-300 tp-el-title tp-el-img tp-el-alignment hero-title-main"
                                        style={{
                                            fontFamily: 'var(--tp-ff-thunder)',
                                            textAlign: 'left'
                                        }}>
                                        {title_line_1} <i>{small_text}</i> <br />
                                        {/* Design text in RED with inline arrow before it */}
                                        <em style={{ color: '#FF0000', fontStyle: 'normal' }}>
                                            <img
                                                src={arrowUrl || "/assets/images/title-img-2.gif"}
                                                alt="Arrow"
                                                className="d-none d-md-inline-block"
                                                style={{
                                                    width: '180px',
                                                    height: 'auto',
                                                    marginRight: '0px',
                                                    marginLeft: '-200px',
                                                    verticalAlign: 'baseline',
                                                    position: 'relative',
                                                    top: '-40px'
                                                }}
                                            /> {title_line_2}
                                        </em> <br />
                                        {title_line_3}
                                    </h2>

                                    {/* FROM LONDON Text - Bottom Right */}
                                    <div className="tp-hero-2-bottom-text hero-london-text">
                                        <h2 className="mb-0 hero-london-heading" dangerouslySetInnerHTML={{ __html: subtitle.replace("/", "/ <br/>") }}>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
