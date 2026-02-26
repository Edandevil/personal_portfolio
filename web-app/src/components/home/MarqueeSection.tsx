
interface MarqueeItem {
    id: number;
    text: string;
}

interface MarqueeSectionProps {
    data?: {
        items: MarqueeItem[];
    } | null;
}

export default function MarqueeSection({ data }: MarqueeSectionProps) {
    const items = data?.items || [];

    // If no items, fallback to dummy or return nothing
    if (items.length === 0) return null;

    return (
        <div className="elementor-element elementor-element-7c96417 e-con-full e-flex e-con e-parent"
            data-id="7c96417" data-element_type="container">
            <div className="elementor-element elementor-element-8c38302 e-flex e-con-boxed e-con e-child"
                data-id="8c38302" data-element_type="container">
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-c266858 elementor-widget elementor-widget-tp-text-slider"
                        data-id="c266858" data-element_type="widget"
                        data-widget_type="tp-text-slider.default">
                        <div className="elementor-widget-container">
                            <div className="vz-text-slider-area fix tp-el-section">
                                <div className="vz-text-slider-active swiper-container">
                                    <div className="swiper-wrapper">
                                        {/* Duplicate array to create enough items for marquee effect if needed, or just map items */}
                                        {/* Assuming items are sufficient or we just map them repeatedly */}
                                        {[...items, ...items].map((item, i) => (
                                            <div className="swiper-slide" key={i}>
                                                <div className="vz-text-slider-item d-flex align-items-center">
                                                    <span className="tp-el-title">{item.text}</span>
                                                    <span className="pl-40">
                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M7 0L8.89064 5.10936L14 7L8.89064 8.89064L7 14L5.10936 8.89064L0 7L5.10936 5.10936L7 0Z"
                                                                fill="#0A0A0A"></path>
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
            </div>
        </div>
    );
}

