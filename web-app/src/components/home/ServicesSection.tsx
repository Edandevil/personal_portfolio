"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { getStrapiMedia } from '@/utils/strapi';

interface StrapiImage {
    url: string;
    data?: {
        attributes?: {
            url: string;
        };
    };
}

interface ServiceItem {
    id: number;
    title: string;
    description: string;
    categories: string;
    icon: StrapiImage;
}

interface ServicesSectionProps {
    data?: {
        title: string;
        video: StrapiImage;
        services: ServiceItem[];
    } | null;
}

export default function ServicesSection({ data }: ServicesSectionProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!data) return null;

    const services = data.services || [];
    const activeService = services[activeIndex];

    return (
        <section className="vz-services-area py-120 overflow-hidden" style={{ backgroundColor: '#000000', color: '#FFFFFF' }}>
            <style jsx>{`
                .vz-services-area {
                    min-height: 800px;
                    display: flex;
                    align-items: center;
                    padding: 80px 0;
                    position: relative;
                }
                .services-grid {
                    display: grid;
                    grid-template-columns: 0.8fr 2.2fr;
                    gap: 80px;
                    width: 100%;
                    position: relative;
                    z-index: 2;
                }
                .services-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                .services-tag {
                    font-size: 14px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: #FFFFFF;
                    margin-bottom: 40px;
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-weight: 600;
                }
                .services-tag-icon {
                    width: 24px;
                    height: 20px;
                    background: #FFF;
                    border-radius: 2px;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .services-tag-icon::after {
                    content: '';
                    width: 14px;
                    height: 10px;
                    background: linear-gradient(45deg, #00C2FF, #FF2929);
                    border-radius: 1px;
                }
                .service-main-title {
                    font-size: 64px;
                    font-weight: 700;
                    line-height: 1.1;
                    margin-bottom: 30px;
                    text-transform: none;
                    color: #FFFFFF;
                }
                .service-desc {
                    font-size: 18px;
                    color: #A0A0A0;
                    margin-bottom: 60px;
                    max-width: 400px;
                    line-height: 1.5;
                }
                .service-btn {
                    display: inline-flex !important;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid #FFFFFF !important;
                    color: #FFFFFF !important;
                    padding: 15px 40px !important;
                    border-radius: 100px !important;
                    text-decoration: none !important;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
                    font-size: 15px !important;
                    font-weight: 600 !important;
                    background: transparent !important;
                    position: relative;
                    overflow: hidden;
                    z-index: 1;
                    margin-top: 30px;
                }
                .service-btn::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: #FFFFFF;
                    transform: translateY(100.5%);
                    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    z-index: -1;
                }
                .service-btn:hover {
                    color: #000000 !important;
                    border-color: #FFFFFF !important;
                    transform: translateY(-3px);
                }
                .service-btn:hover::before {
                    transform: translateY(0);
                }

                /* Accordion Styles */
                .accordion-container {
                    display: flex;
                    height: 600px;
                    border-left: 1px solid rgba(255,255,255,0.1);
                }
                .accordion-item {
                    height: 100%;
                    overflow: hidden;
                    position: relative;
                    transition: all 0.8s cubic-bezier(0.25, 1, 0.5, 1);
                    cursor: pointer;
                    flex: 1;
                    min-width: 120px;
                    background-color: #000;
                    border-right: 1px solid rgba(255,255,255,0.1);
                }
                .accordion-item.active {
                    flex: 6;
                    border-radius: 24px;
                    border-right: none;
                    margin: 0 10px;
                }
                .accordion-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 1s ease;
                }
                .accordion-item:hover .accordion-image {
                    transform: scale(1.05);
                }

                /* Collapsed Label */
                .collapsed-label {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-between;
                    padding: 40px 0;
                    background: #000;
                    opacity: 1;
                    transition: opacity 0.4s ease;
                    z-index: 2;
                }
                .active .collapsed-label {
                    opacity: 0;
                    pointer-events: none;
                }
                .collapsed-icon {
                    color: #FFF;
                    font-size: 24px;
                    opacity: 0.6;
                }
                .collapsed-title {
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 2px;
                    color: #A0A0A0;
                    text-transform: uppercase;
                }
                .collapsed-id {
                    font-size: 40px;
                    font-weight: 900;
                    font-family: var(--tp-ff-thunder);
                    color: #FFF;
                    opacity: 0.8;
                }

                /* Expanded Branding / Label */
                .expanded-label {
                    position: absolute;
                    bottom: 0px;
                    left: 0px;
                    background: #000;
                    padding: 30px 60px 20px 30px;
                    border-top-right-radius: 40px;
                    display: flex;
                    align-items: flex-end;
                    gap: 20px;
                    opacity: 0;
                    transform: translateY(10px);
                    transition: all 0.5s ease 0.3s;
                    z-index: 3;
                }
                .active .expanded-label {
                    opacity: 1;
                    transform: translateY(0);
                }
                .expanded-id {
                    font-size: 80px;
                    font-weight: 900;
                    font-family: var(--tp-ff-thunder);
                    line-height: 0.8;
                }
                .expanded-title {
                    font-size: 20px;
                    font-weight: 700;
                    line-height: 1.2;
                    margin-bottom: 5px;
                }
                
                /* Inverse rounded corner effect */
                .expanded-label::before {
                    content: '';
                    position: absolute;
                    top: -56px;
                    left: 0;
                    width: 56px;
                    height: 56px;
                    background: transparent;
                    border-bottom-left-radius: 40px;
                    box-shadow: -20px 20px 0 0 #000;
                }
                .expanded-label::after {
                    content: '';
                    position: absolute;
                    bottom: 0;
                    right: -56px;
                    width: 56px;
                    height: 56px;
                    background: transparent;
                    border-bottom-left-radius: 40px;
                    box-shadow: -20px 20px 0 0 #000;
                }

                @media (max-width: 1200px) {
                    .service-main-title { font-size: 50px; }
                }
                @media (max-width: 1024px) {
                    .services-grid {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .accordion-container {
                        height: 500px;
                    }
                }
                @media (max-width: 768px) {
                    .accordion-container {
                        flex-direction: column;
                        height: auto;
                        border-left: none;
                        border-top: 1px solid rgba(255,255,255,0.1);
                    }
                    .accordion-item {
                        height: 90px;
                        flex: none;
                        width: 100%;
                        border-right: none;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                        border-radius: 0;
                    }
                    .accordion-item.active {
                        height: 350px;
                        margin: 10px 0;
                        border-radius: 12px;
                    }
                    .collapsed-label {
                        flex-direction: row;
                        padding: 0 25px;
                        writing-mode: horizontal-tb;
                    }
                    .collapsed-title {
                        writing-mode: horizontal-tb;
                        transform: none;
                    }
                    .expanded-id { font-size: 60px; }
                }
            `}</style>

            <div className="container">
                <div className="services-grid">
                    {/* Left Side Content */}
                    <div className="services-content">
                        <div className="services-tag">
                            <span className="services-tag-icon"></span>
                            {data.title || "Our Services"}
                        </div>
                        <h2 className="service-main-title">
                            {activeService?.title}
                        </h2>
                        <p className="service-desc">
                            {activeService?.description}
                        </p>
                        <Link href={`/`} className="service-btn">
                            Explore This Service
                        </Link>
                    </div>

                    {/* Right Side Cards */}
                    <div className="accordion-container">
                        {services.map((service, index) => {
                            const iconUrl = getStrapiMedia((service.icon?.url || service.icon?.data?.attributes?.url || null) as string | null);
                            const idStr = (index + 1).toString().padStart(2, '0');

                            return (
                                <div
                                    key={service.id}
                                    className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                                    onClick={() => setActiveIndex(index)}
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    <img
                                        src={iconUrl || "/assets/images/project-1.jpg"}
                                        alt={service.title}
                                        className="accordion-image"
                                    />

                                    {/* Collapsed view element */}
                                    <div className="collapsed-label">
                                        <div className="collapsed-icon">
                                            ↗
                                        </div>
                                        <div className="collapsed-title">{service.title}</div>
                                        <div className="collapsed-id">{idStr}</div>
                                    </div>

                                    {/* Expanded view element */}
                                    <div className="expanded-label">
                                        <span className="expanded-id">{idStr}</span>
                                        <span className="expanded-title">{service.title}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

