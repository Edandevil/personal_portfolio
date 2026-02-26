"use client";
import React, { useEffect } from 'react';

export default function WorkTextSlider() {
    useEffect(() => {
        // Initialize Swiper for text slider
        const timer = setTimeout(() => {
            interface VizonWindow extends Window {
                Swiper?: new (selector: string, options: object) => unknown;
            }

            const vWindow = window as unknown as VizonWindow;

            if (typeof window !== 'undefined' && vWindow.Swiper) {
                const Swiper = vWindow.Swiper;
                const slider = document.querySelector('.vz-text-6-active');

                if (slider && !slider.classList.contains('swiper-initialized')) {
                    new Swiper('.vz-text-6-active', {
                        slidesPerView: 'auto',
                        spaceBetween: 0,
                        loop: true,
                        speed: 10000,
                        autoplay: {
                            delay: 0,
                            disableOnInteraction: false,
                        },
                        freeMode: true,
                        allowTouchMove: false,
                    });
                }
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="elementor-element elementor-element-0908640 elementor-widget elementor-widget-tp-vz-text-slider"
            data-id="0908640" data-element_type="widget" data-widget_type="tp-vz-text-slider.default">
            <div className="elementor-widget-container">
                <div className="swiper-container vz-text-6-active tp-el-section">
                    <div className="swiper-wrapper slide-transtion">
                        <div className="swiper-slide">
                            <div className="vz-hero-6-text">
                                <span className="tp-el-title">Branding<i>_</i></span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="vz-hero-6-text">
                                <span className="tp-el-title">Development<i className="icon-left">_</i></span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="vz-hero-6-text">
                                <span className="tp-el-title">Design<i>_</i></span>
                            </div>
                        </div>
                        {/* Duplicate slides for infinite loop effect if needed */}
                        <div className="swiper-slide">
                            <div className="vz-hero-6-text">
                                <span className="tp-el-title">Branding<i>_</i></span>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="vz-hero-6-text">
                                <span className="tp-el-title">Development<i className="icon-left">_</i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
