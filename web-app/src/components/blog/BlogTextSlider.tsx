"use client";
import React from 'react';

export default function BlogTextSlider() {
    return (
        <div className="elementor-element elementor-element-ed2830b e-con-full e-flex e-con e-parent" data-id="ed2830b"
            data-element_type="container" data-settings='{"background_background":"classic"}'>
            <div className="elementor-element elementor-element-27fafaa elementor-widget elementor-widget-tp-vz-text-slider"
                data-id="27fafaa" data-element_type="widget" data-widget_type="tp-vz-text-slider.default">
                <div className="elementor-widget-container">
                    <div className="swiper-container vz-text-6-active tp-el-section">
                        <div className="swiper-wrapper slide-transtion">
                            <div className="swiper-slide">
                                <div className="vz-hero-6-text">
                                    <span className="tp-el-title">get in touch <i>_</i></span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="vz-hero-6-text">
                                    <span className="tp-el-title">get in touch <i className="icon-left">_</i></span>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="vz-hero-6-text">
                                    <span className="tp-el-title">get in touch <i>_</i></span>
                                </div>
                            </div>
                            {/* Duplicate for loop */}
                            <div className="swiper-slide">
                                <div className="vz-hero-6-text">
                                    <span className="tp-el-title">get in touch <i>_</i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
