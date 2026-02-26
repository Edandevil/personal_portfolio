export default function AboutTextSlider() {
    return (
        <div className="elementor-element elementor-element-d5738b7 e-con-full e-transform e-flex e-con e-parent"
            data-id="d5738b7" data-element_type="container"
            data-settings='{"background_background":"classic","_transform_translateY_effect":{"unit":"px","size":-300,"sizes":[]},"_transform_translateY_effect_tablet_extra":{"unit":"px","size":-112,"sizes":[]},"_transform_translateY_effect_tablet":{"unit":"px","size":-200,"sizes":[]},"_transform_translateY_effect_mobile_extra":{"unit":"px","size":0,"sizes":[]},"_transform_translateX_effect":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_tablet":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile_extra":{"unit":"px","size":"","sizes":[]},"_transform_translateX_effect_mobile":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_widescreen":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_laptop":{"unit":"px","size":"","sizes":[]},"_transform_translateY_effect_mobile":{"unit":"px","size":"","sizes":[]}}'>
            <div className="elementor-element elementor-element-956ee90 elementor-widget elementor-widget-tp-vz-text-slider"
                data-id="956ee90" data-element_type="widget" data-widget_type="tp-vz-text-slider.default">
                <div className="elementor-widget-container">
                    <div className="vz-text-slider-wrap pt-25 pb-25 tp-el-section">
                        <div className="swiper-container vz-text-slider-active">
                            <div className="swiper-wrapper slide-transtion">
                                {[
                                    "Brand Identity Design", "Infographic and other", "Branding & Identity",
                                    "Web Design & Development", "UI / UX Design", "Complex brand design",
                                    "Complex brand design", "Brand Identity Design"
                                ].map((text, i) => (
                                    <div className="swiper-slide" key={i}>
                                        <div className="vz-text-slider-item d-flex align-items-center">
                                            <span className="tp-el-title">{text}</span>
                                            <span className="pl-40">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 0L8.89064 5.10936L14 7L8.89064 8.89064L7 14L5.10936 8.89064L0 7L5.10936 5.10936L7 0Z" fill="#0A0A0A" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
