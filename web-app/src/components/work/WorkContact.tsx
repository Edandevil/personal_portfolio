'use client';

import { useEffect } from 'react';

export default function WorkContact() {
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
        <div className="elementor-element elementor-element-c9c0dc8 e-flex e-con-boxed e-con e-child"
            data-id="c9c0dc8" data-element_type="container">
            <div className="e-con-inner">
                <div className="elementor-element elementor-element-1c42bfb e-con-full elementor-hidden-tablet_extra elementor-hidden-tablet elementor-hidden-mobile_extra elementor-hidden-mobile e-flex e-con e-child"
                    data-id="1c42bfb" data-element_type="container">
                </div>
                <div className="elementor-element elementor-element-711aa74 e-con-full e-flex e-con e-child"
                    data-id="711aa74" data-element_type="container">
                    <div className="elementor-element elementor-element-d836a36 elementor-widget elementor-widget-tp-info-link"
                        data-id="d836a36" data-element_type="widget"
                        data-widget_type="tp-info-link.default">
                        <div className="elementor-widget-container">
                            <div className="vz-footer-3-tel tp-el-btn  vz-fade-anim" data-delay=".2">
                                <a href="tel:(510)8956500" target="" rel="">(510) 895-6500</a>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-6e4f078 elementor-widget elementor-widget-tp-info-link"
                        data-id="6e4f078" data-element_type="widget"
                        data-widget_type="tp-info-link.default">
                        <div className="elementor-widget-container">
                            <div className="vz-footer-3-tel tp-el-btn  vz-fade-anim" data-delay=".4">
                                <a href="mailto:Hello@Vizon.com" target="" rel="">Hello@Vizon.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-520ff5c elementor-widget elementor-widget-tp-contact-form"
                        data-id="520ff5c" data-element_type="widget"
                        data-widget_type="tp-contact-form.default">
                        <div className="elementor-widget-container">
                            <div className="tp-join-form-wrap mr-z ml-z tp-el-section ">
                                <div className="wpcf7 no-js" id="wpcf7-f9946-p12880-o1" lang="en-US" dir="ltr">
                                    <form action="#" method="post" className="wpcf7-form init">
                                        <div className="vz-footer-3-input-box vz-fade-anim" data-delay=".6">
                                            <div className="row">
                                                <div className="col-xl-4">
                                                    <div className="vz-footer-3-select mb-10">
                                                        <span className="wpcf7-form-control-wrap" data-name="select-562">
                                                            <select className="wpcf7-form-control wpcf7-select vz-select" aria-invalid="false" name="interest">
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
                                                            <input className="wpcf7-form-control wpcf7-text" placeholder="Your name" type="text" name="your-name" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-4">
                                                    <div className="vz-footer-3-input mb-15">
                                                        <span className="wpcf7-form-control-wrap">
                                                            <input className="wpcf7-form-control wpcf7-email wpcf7-text" placeholder="Your email address" type="email" name="your-email" />
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-12">
                                                    <div className="vz-footer-3-input mb-15">
                                                        <span className="wpcf7-form-control-wrap">
                                                            <input className="wpcf7-form-control wpcf7-text" placeholder="How may i help you?" type="text" name="your-message" />
                                                        </span>
                                                        <button className="vz-footer-3-btn" type="submit">
                                                            <span>
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                    <path d="M1 11L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                                                    <path d="M1 1H11V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
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
                    </div>
                    <div className="elementor-element elementor-element-8104137 elementor-widget elementor-widget-tp-vz-social-list"
                        data-id="8104137" data-element_type="widget"
                        data-widget_type="tp-vz-social-list.default">
                        <div className="elementor-widget-container">
                            <div className="vz-footer-3-social tp-el-section vz-fade-anim" data-duration=".3" data-delay=".8">
                                <a className="tp-el-text tp-el-btn" href="#" target="" rel="">
                                    Linkedin <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M1 11L11 1" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M1 1H11V11" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                </a>
                                <a className="tp-el-text tp-el-btn" href="#" target="" rel="">
                                    Twitter <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M1 11L11 1" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M1 1H11V11" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                </a>
                                <a className="tp-el-text tp-el-btn" href="#" target="" rel="">
                                    Facebook <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M1 11L11 1" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M1 1H11V11" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
