import Link from 'next/link';
import { getStrapiMedia } from '@/utils/strapi';

interface Project {
    id: number;
    title: string;
    slug: string;
    thumbnail: any;
    categories: any;
    client: string;
    description: string;
}

interface FeaturedProjectsProps {
    data?: {
        title: string;
        buttonText: string;
        buttonLink: string;
        projects: {
            data: Project[]; // Collection relation usually comes as data array
        } | Project[]; // Handle both structures
    } | null;
}

export default function FeaturedProjects({ data }: FeaturedProjectsProps) {
    if (!data) return null;

    // Normalize projects list
    const projectsList = Array.isArray(data.projects) ? data.projects : (data.projects?.data || []);

    return (
        <div className="elementor-element elementor-element-4cfe284 e-con-full e-flex e-con e-parent"
            data-id="4cfe284" data-element_type="container"
            data-settings='{"background_background":"classic"}'>
            <div className="elementor-element elementor-element-4f3cf32 e-con-full e-flex e-con e-child"
                data-id="4f3cf32" data-element_type="container">
                <div className="elementor-element elementor-element-9e56fff e-con-full e-flex e-con e-child"
                    data-id="9e56fff" data-element_type="container">
                    <div className="elementor-element elementor-element-cd49e02 e-con-full e-flex e-con e-child"
                        data-id="cd49e02" data-element_type="container">
                        <div className="elementor-element elementor-element-ca1ccec elementor-widget elementor-widget-tp-section-heading"
                            data-id="ca1ccec" data-element_type="widget"
                            data-widget_type="tp-section-heading.default">
                            <div className="elementor-widget-container">
                                <div className="vz-award-style-2">
                                    <div className="vz-award-content">
                                        <h2 className="vz-section-title ff-thunder mb-0  tp-el-title tp-el-alignment">
                                            {data.title || "Featured projects"}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-7d494cb e-con-full e-flex e-con e-child"
                        data-id="7d494cb" data-element_type="container">
                        <div className="elementor-element elementor-element-fd36632 elementor-align-right elementor-tablet-align-left elementor-widget elementor-widget-button"
                            data-id="fd36632" data-element_type="widget" data-widget_type="button.default">
                            <Link className="elementor-button elementor-button-link elementor-size-sm" href={data.buttonLink || "/work"}>
                                <span className="elementor-button-content-wrapper">
                                    <span className="elementor-button-text">{data.buttonText || "View all Project"}</span>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="elementor-element elementor-element-b9e1312 e-con-full e-flex e-con e-child"
                    data-id="b9e1312" data-element_type="container">
                    <div className="elementor-element elementor-element-0bcfc22 e-con-full e-flex e-con e-child"
                        data-id="0bcfc22" data-element_type="container">

                        {/* Map first 2 projects */}
                        {projectsList.slice(0, 2).map((project: any, index: number) => { // Use any for project to handle attributes nesting variants
                            const pData = project.attributes || project;
                            const thumbnail = getStrapiMedia(pData.thumbnail?.data?.attributes?.url || pData.thumbnail?.url);
                            // Handle categories - JSON or text
                            let categories = [];
                            if (typeof pData.categories === 'string') {
                                categories = pData.categories.split(',');
                            } else if (Array.isArray(pData.categories)) {
                                categories = pData.categories.map((cat: any) =>
                                    typeof cat === 'string' ? cat : (cat.attributes?.name || cat.name || '')
                                );
                            }

                            return (
                                <div className="elementor-element elementor-element-d3b45c7 elementor-widget elementor-widget-tp-vz-portfolio-card"
                                    data-id="d3b45c7" data-element_type="widget"
                                    data-widget_type="tp-vz-portfolio-card.default" key={index}>
                                    <div className="elementor-widget-container">
                                        <div className="vz-project-3-item mb-55">
                                            <Link href={`/work/${pData.slug}`} className="d-block">
                                                <div className="vz-project-3-thumb ripple-image">
                                                    {thumbnail && <img decoding="async" src={thumbnail} alt="" />}
                                                </div>
                                            </Link>
                                            <div className="vz-project-3-content d-flex justify-content-between align-items-center">
                                                <h4 className="vz-project-3-title tp-el-title">
                                                    <Link href={`/work/${pData.slug}`} target="_self">{pData.title}</Link>
                                                </h4>
                                                <div className="vz-project-3-category  tp-el-cat">
                                                    {categories.map((cat: string, i: number) => (
                                                        <span key={i}>{cat}</span>
                                                    ))}
                                                    {categories.length === 0 && <span>Project</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="elementor-element elementor-element-5157c29 e-con-full e-flex e-con e-child"
                        data-id="5157c29" data-element_type="container">

                        {/* Map next 2 projects */}
                        {projectsList.slice(2, 4).map((project: any, index: number) => {
                            const pData = project.attributes || project;
                            const thumbnail = getStrapiMedia(pData.thumbnail?.data?.attributes?.url || pData.thumbnail?.url);
                            let categories: string[] = [];
                            if (typeof pData.categories === 'string') {
                                categories = pData.categories.split(',');
                            } else if (Array.isArray(pData.categories)) {
                                categories = pData.categories.map((cat: any) =>
                                    typeof cat === 'string' ? cat : (cat.attributes?.name || cat.name || '')
                                );
                            }

                            return (
                                <div className="elementor-element elementor-element-833e50a elementor-widget elementor-widget-tp-vz-portfolio-card"
                                    data-id="833e50a" data-element_type="widget"
                                    data-widget_type="tp-vz-portfolio-card.default" key={index}>
                                    <div className="elementor-widget-container">
                                        <div className="vz-project-3-item mb-55">
                                            <Link href={`/work/${pData.slug}`} className="d-block">
                                                <div className="vz-project-3-thumb ripple-image">
                                                    {thumbnail && <img decoding="async" src={thumbnail} alt="" />}
                                                </div>
                                            </Link>
                                            <div className="vz-project-3-content d-flex justify-content-between align-items-center">
                                                <h4 className="vz-project-3-title tp-el-title">
                                                    <Link href={`/work/${pData.slug}`} target="_self">{pData.title}</Link>
                                                </h4>
                                                <div className="vz-project-3-category  tp-el-cat">
                                                    {categories.map((cat: string, i: number) => (
                                                        <span key={i}>{cat}</span>
                                                    ))}
                                                    {categories.length === 0 && <span>Project</span>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

