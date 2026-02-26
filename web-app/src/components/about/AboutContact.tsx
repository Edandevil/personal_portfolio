'use client';

import { useEffect } from 'react';

export default function AboutContact() {
    useEffect(() => {
        // Initialize nice-select plugin for dropdowns with a delay to ensure jQuery is loaded
        const timer = setTimeout(() => {
            if (typeof window !== 'undefined' && (window as any).$) {
                const $ = (window as any).$;
                // Destroy existing nice-select instances if any
                const selects = $('.vz-select');
                selects.each((_index: number, element: HTMLElement) => {
                    const $element = $(element);
                    const next = $element.next('.nice-select');
                    if (next.length) {
                        next.remove();
                        $element.show();
                    }
                });
                // Initialize nice-select
                if (selects.length > 0 && typeof $.fn.niceSelect !== 'undefined') {
                    selects.niceSelect();
                }
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="elementor-element elementor-element-ed2830b e-con-full e-flex e-con e-parent"
            data-id="ed2830b" data-element_type="container"
            data-settings='{"background_background":"classic"}'>
            <div className="elementor-element elementor-element-27fafaa elementor-widget elementor-widget-tp-vz-text-slider"
                data-id="27fafaa" data-element_type="widget" data-widget_type="tp-vz-text-slider.default">
                <div className="elementor-widget-container">
                    <div className="swiper-container vz-text-6-active tp-el-section">
                        <div className="swiper-wrapper slide-transtion">
                            {/* Swiper slides repeated for continuous marquee */}
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
                                    <span className="tp-el-title">get in touch n<i>_</i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-60dd59a e-flex e-con-boxed e-con e-child"
                data-id="60dd59a" data-element_type="container">
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-e02f8e6 e-con-full elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile e-flex e-con e-child"
                        data-id="e02f8e6" data-element_type="container">
                    </div>
                    <div className="elementor-element elementor-element-a95c590 e-con-full e-flex e-con e-child"
                        data-id="a95c590" data-element_type="container">
                        <div className="elementor-element elementor-element-c633e82 elementor-widget elementor-widget-tp-info-link"
                            data-id="c633e82" data-element_type="widget"
                            data-settings='{"tp_anima_type":" vz-fade-anim"}'
                            data-widget_type="tp-info-link.default">
                            <div className="elementor-widget-container">
                                <div className="vz-footer-3-tel tp-el-btn  vz-fade-anim" data-delay=".2">
                                    <a href="tel:(510)8956500" target="" rel="">(510) 895-6500</a>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-91d447b elementor-widget elementor-widget-tp-info-link"
                            data-id="91d447b" data-element_type="widget"
                            data-settings='{"tp_anima_type":" vz-fade-anim"}'
                            data-widget_type="tp-info-link.default">
                            <div className="elementor-widget-container">
                                <div className="vz-footer-3-tel tp-el-btn  vz-fade-anim" data-delay=".4">
                                    <a href="mailto:Hello@Vizon.com" target="" rel="">Hello@Vizon.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-93b932b elementor-widget elementor-widget-tp-contact-form"
                            data-id="93b932b" data-element_type="widget"
                            data-widget_type="tp-contact-form.default">
                            <div className="elementor-widget-container">
                                <div className="tp-join-form-wrap mr-z ml-z tp-el-section ">
                                    {/* Placeholder for Contact Form 7 - Replaced with standard HTML form */}
                                    <form action="#" method="post" className="wpcf7-form init">
                                        <div className="vz-footer-3-input-box vz-fade-anim" data-delay=".6">
                                            <div className="row">
                                                <div className="col-xl-4">
                                                    <div className="vz-footer-3-select mb-10">
                                                        <span className="wpcf7-form-control-wrap" data-name="select-562">
                                                            <select className="wpcf7-form-control wpcf7-select vz-select" aria-invalid="false" name="service">
                                                                <option value="Personal portfolio">Personal portfolio</option>
                                                                <option value="Digital Agency">Digital Agency</option>
                                                                <option value="Creative Agency">Creative Agency</option>
                                                                <option value="It Solution">It Solution</option>
                                                            </select>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4">
                                                    <div className="vz-footer-3-input mb-15">
                                                        <span className="wpcf7-form-control-wrap">
                                                            <input className="wpcf7-form-control wpcf7-text" placeholder="Your name" type="text" name="name" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4">
                                                    <div className="vz-footer-3-input mb-15">
                                                        <span className="wpcf7-form-control-wrap">
                                                            <input className="wpcf7-form-control wpcf7-email wpcf7-text" placeholder="Your email address" type="email" name="email" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="vz-footer-3-input mb-15">
                                                        <span className="wpcf7-form-control-wrap">
                                                            <input className="wpcf7-form-control wpcf7-text" placeholder="How may i help you?" type="text" name="message" />
                                                        </span>
                                                        <button className="vz-footer-3-btn" type="submit">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                    <path d="M1 11L11 1" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M1 1H11V11" stroke="currentcolor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                </svg>
                                                            </span>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-e0c5a7b elementor-widget elementor-widget-tp-vz-social-list"
                            data-id="e0c5a7b" data-element_type="widget"
                            data-settings='{"tp_anima_type":" vz-fade-anim"}'
                            data-widget_type="tp-vz-social-list.default">
                            <div className="elementor-widget-container">
                                <div className="vz-footer-3-social tp-el-section  vz-fade-anim" data-duration=".3" data-delay=".8">
                                    <a className="tp-el-text tp-el-btn" href="#" target="" rel="">
                                        Linkedin <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M1 11L11 1" stroke="currentcolor" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M1 1H11V11" stroke="currentcolor" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </a>
                                    <a className="tp-el-text tp-el-btn" href="#" target="" rel="">
                                        Twitter <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M1 11L11 1" stroke="currentcolor" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M1 1H11V11" stroke="currentcolor" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </a>
                                    <a className="tp-el-text tp-el-btn" href="#" target="" rel="">
                                        Facebook <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                <path d="M1 11L11 1" stroke="currentcolor" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                <path d="M1 1H11V11" stroke="currentcolor" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
