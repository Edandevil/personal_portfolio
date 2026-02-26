import Link from 'next/link';
import { getStrapiMedia } from '@/utils/strapi';

interface AboutSectionProps {
    data?: {
        title: string;
        subtitle: string;
        description: string; // rich text (markdown) or string
        image: any;
        buttonText: string;
        buttonLink: string;
    } | null;
}

export default function AboutSection({ data }: AboutSectionProps) {
    if (!data) return null;

    const imageUrl = getStrapiMedia(data.image?.url || data.image?.data?.attributes?.url);

    return (
        <>
            <div className="elementor-element elementor-element-45ee6d6 e-con-full e-flex e-con e-parent"
                data-id="45ee6d6" data-element_type="container">
                <div className="elementor-element elementor-element-229ac9e elementor-widget elementor-widget-tp-image-parallax"
                    data-id="229ac9e" data-element_type="widget" data-widget_type="tp-image-parallax.default">
                    <div className="elementor-widget-container">
                        <div className="tp-banner-area">
                            <div className="tp-banner-img tp-el-img tp-el-section">
                                {imageUrl && <img className="w-100" data-speed="0.1" src={imageUrl} alt="" />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="elementor-element elementor-element-57f8edd e-con-full e-flex e-con e-parent"
                data-id="57f8edd" data-element_type="container">
                <div className="elementor-element elementor-element-461767a e-flex e-con-boxed e-con e-child"
                    data-id="461767a" data-element_type="container">
                    <div className="e-con-inner">
                        <div className="elementor-element elementor-element-07639e7 tp-el-about-big-title elementor-widget elementor-widget-tp-section-heading"
                            data-id="07639e7" data-element_type="widget"
                            data-widget_type="tp-section-heading.default">
                            <div className="elementor-widget-container">
                                <div className="vz-award-style-2">
                                    <div className="vz-award-content">
                                        <h2 className="vz-section-title ff-thunder mb-0  tp-el-title tp-el-alignment"
                                            style={{ fontFamily: 'var(--tp-ff-thunder)' }}>{data.title || "About vizon"}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="elementor-element elementor-element-0a6d1d0 e-con-full e-flex e-con e-child"
                            data-id="0a6d1d0" data-element_type="container">
                            <div className="elementor-element elementor-element-5a0b58d e-con-full e-flex e-con e-child"
                                data-id="5a0b58d" data-element_type="container">
                                <div className="elementor-element elementor-element-72a5cb6 elementor-widget elementor-widget-heading"
                                    data-id="72a5cb6" data-element_type="widget" data-widget_type="heading.default">
                                    <span className="elementor-heading-title elementor-size-default">{data.subtitle || "About Us"}</span>
                                </div>
                            </div>
                            <div className="elementor-element elementor-element-7a7e654 e-con-full e-flex e-con e-child"
                                data-id="7a7e654" data-element_type="container">
                                <div className="elementor-element elementor-element-96c3f09 tp-el-about-big-texarea elementor-widget elementor-widget-tp-section-heading"
                                    data-id="96c3f09" data-element_type="widget"
                                    data-widget_type="tp-section-heading.default">
                                    <div className="elementor-widget-container">
                                        <div className="vz-award-style-2">
                                            <div className="vz-award-content">
                                                <h2 className="vz-section-title ff-thunder mb-0  tp-el-title tp-el-alignment"
                                                    style={{ fontFamily: 'var(--tp-ff-thundermed)' }}>
                                                    {/* Ideally use a markdown renderer here */}
                                                    {data.description}
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="elementor-element elementor-element-2a09594 elementor-align-left elementor-tablet-align-left elementor-widget elementor-widget-button"
                                    data-id="2a09594" data-element_type="widget" data-widget_type="button.default">
                                    <Link className="elementor-button elementor-button-link elementor-size-sm" href={data.buttonLink || "/about"}>
                                        <span className="elementor-button-content-wrapper">
                                            <span className="elementor-button-text">{data.buttonText || "More About Us"}</span>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

