import { getStrapiMedia } from '@/utils/strapi';

interface ClientsSectionProps {
    data?: {
        title: string;
        logos: any[];
    } | null;
}

export default function ClientsSection({ data }: ClientsSectionProps) {
    // If no data, use fallback or return null
    if (!data) return null;

    const logos = data.logos || [];

    return (
        <div className="elementor-element elementor-element-6b0c5d2 e-con-full e-flex e-con e-parent"
            data-id="6b0c5d2" data-element_type="container">
            <div className="elementor-element elementor-element-24b41df e-flex e-con-boxed e-con e-child"
                data-id="24b41df" data-element_type="container">
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-612b11a elementor-widget elementor-widget-heading"
                        data-id="612b11a" data-element_type="widget" data-widget_type="heading.default">
                        <span className="elementor-heading-title elementor-size-default">{data.title || "Our clients"}</span>
                    </div>
                    <div className="elementor-element elementor-element-737c7ed elementor-widget elementor-widget-tp-vz-brand-list"
                        data-id="737c7ed" data-element_type="widget"
                        data-widget_type="tp-vz-brand-list.default">
                        <div className="elementor-widget-container">
                            <div className="vz-brand-style-3 tp-el-section">
                                <div className="vz-brand-slider-wrap">
                                    <div className="swiper vz-brand-3-active">
                                        <div className="swiper-wrapper slide-transtion">
                                            {logos.length > 0 ? logos.map((logo: any, i: number) => {
                                                const logoUrl = getStrapiMedia(logo?.url || logo?.data?.attributes?.url); // Handle raw or object structure
                                                return (
                                                    <div className="swiper-slide" key={i}>
                                                        <div className="vz-brand-item tp-el-border tp-el-img">
                                                            <img decoding="async" src={logoUrl || undefined} alt="" />
                                                        </div>
                                                    </div>
                                                )
                                            }) : (
                                                // Fallback if no logos
                                                [
                                                    'brand-1-5.png', 'brand-1-6.png', 'brand-1-1.png', 'brand-1-2.png',
                                                    'brand-1-3.png', 'brand-1-4.png', 'brand-1-1.png', 'brand-1-2.png',
                                                    'brand-1-3.png'
                                                ].map((img, i) => (
                                                    <div className="swiper-slide" key={i}>
                                                        <div className="vz-brand-item tp-el-border tp-el-img">
                                                            <img decoding="async" src={`/assets/images/${img}`} alt="" />
                                                        </div>
                                                    </div>
                                                ))
                                            )}
                                        </div>
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

