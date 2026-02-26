import { fetchAPI, getStrapiMedia } from '@/utils/strapi';
import Link from 'next/link';
import { renderRichText } from '@/utils/renderRichText';
import { headers } from 'next/headers';

// Force dynamic rendering to prevent caching issues
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Disable all caching
export const fetchCache = 'force-no-store';

// Helper to fetch project by slug
async function getProject(slug: string) {
    const data = await fetchAPI('/projects', {
        filters: {
            slug: {
                $eq: slug,
            },
        },
        populate: {
            thumbnail: true,
            categories: true,
            detailImage: true,
            gallery: true,
            storeImages: true,
            process: {
                populate: {
                    steps: true
                }
            }
        },
    });
    return data?.data?.[0] || null;
}

// Helper to fetch next project
async function getNextProject(currentId: number) {
    const data = await fetchAPI('/projects', {
        filters: {
            id: {
                $ne: currentId,
            }
        },
        pagination: {
            limit: 1,
        },
        populate: ['thumbnail']
    });
    return data?.data?.[0] || null;
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const projectData = await getProject(slug);

    console.log('DEBUG: Project slug:', slug);
    console.log('DEBUG: Project data:', JSON.stringify(projectData, null, 2));

    if (!projectData) {
        console.log('DEBUG: No project found for slug:', slug);
        return (
            <main>
                <div className="container pt-200">
                    <h1>Project Not Found</h1>
                    <p>Looking for project with slug: {slug}</p>
                </div>
            </main>
        );
    }

    const project = projectData;
    const projectId = project.id;

    const nextProjectData = await getNextProject(projectId);
    const nextProject = nextProjectData || null;

    const detailImageUrl = getStrapiMedia(project.detailImage?.url);
    const gallery = project.gallery || [];

    // Parse categories
    let categories: string[] = [];

    // Handle Relation
    if (project.categories && project.categories.data && Array.isArray(project.categories.data)) {
        categories = project.categories.data.map((cat: any) => cat.attributes?.name || cat.name);
    }
    // Handle Legacy
    else if (project.categories && typeof project.categories === 'object' && !Array.isArray(project.categories)) {
        if (Array.isArray(project.categories.categories)) {
            categories = project.categories.categories;
        }
    }
    else if (typeof project.categories === 'string') {
        categories = project.categories.split(',');
    } else if (Array.isArray(project.categories)) {
        categories = project.categories.map((cat: any) =>
            typeof cat === 'string' ? cat : (cat.name || cat.attributes?.name || '')
        );
    }

    // Parse services if string/array/json
    let services: string[] = [];
    if (project.services) {
        if (Array.isArray(project.services)) {
            services = project.services;
        } else if (typeof project.services === 'string') {
            services = project.services.split(',');
        }
    }

    console.log('DEBUG: Description:', project.description);
    console.log('DEBUG: Description type:', typeof project.description);
    console.log('DEBUG: Gallery:', gallery);
    console.log('DEBUG: Gallery length:', gallery.length);

    return (
        <>
            <main>
                <div id="smooth-wrapper">
                    <div id="smooth-content">
                        <div data-elementor-type="wp-post" data-elementor-id="11865" className="elementor elementor-11865">
                            {/* Title Section */}
                            <div className="elementor-element elementor-element-b00baff e-con-full e-flex e-con e-parent"
                                data-id="b00baff" data-element_type="container">
                                <div className="elementor-element elementor-element-5f6fe25 e-flex e-con-boxed e-con e-child"
                                    data-id="5f6fe25" data-element_type="container">
                                    <div className="e-con-inner">
                                        <div className="elementor-element elementor-element-103286ca e-con-full e-flex e-con e-child"
                                            data-id="103286ca" data-element_type="container">
                                            <div className="elementor-element elementor-element-7c1f8952 e-con-full e-flex e-con e-child"
                                                data-id="7c1f8952" data-element_type="container">
                                                <div className="elementor-element elementor-element-e236738 e-con-full e-flex e-con e-child"
                                                    data-id="e236738" data-element_type="container">
                                                    <div className="elementor-element elementor-element-30d99d5 e-con-full e-flex e-con e-child"
                                                        data-id="30d99d5" data-element_type="container">
                                                        <div className="elementor-element elementor-element-429d1d8 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon"
                                                            data-id="429d1d8" data-element_type="widget"
                                                            data-settings='{"_position":"absolute"}'
                                                            data-widget_type="icon.default">
                                                            <div className="elementor-icon-wrapper">
                                                                <div className="elementor-icon">
                                                                    <i aria-hidden="true" className="fas fa-circle"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="elementor-element elementor-element-e502abf elementor-widget elementor-widget-heading"
                                                            data-id="e502abf" data-element_type="widget"
                                                            data-widget_type="heading.default">
                                                            <h2 className="elementor-heading-title elementor-size-default">
                                                                {categories[0] || 'Project'}
                                                            </h2>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-element elementor-element-c7deca4 elementor-widget elementor-widget-tp-heading-title"
                                                data-id="c7deca4" data-element_type="widget"
                                                data-widget_type="tp-heading-title.default">
                                                <div className="elementor-widget-container">
                                                    <div className="tp-el-section text-center">
                                                        <h2 className="tp-section-title fs-140 tp-el-title tp_fade_anim"
                                                            data-delay="0.3">{project.title}</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="elementor-element elementor-element-19501938 e-con-full e-flex e-con e-child"
                                            data-id="19501938" data-element_type="container">
                                            <div className="elementor-element elementor-element-73da26ce e-con-full e-flex e-con e-child"
                                                data-id="73da26ce" data-element_type="container">
                                                <div className="elementor-element elementor-element-1fc75368 elementor-widget__width-initial elementor-widget elementor-widget-tp-heading-title"
                                                    data-id="1fc75368" data-element_type="widget"
                                                    data-widget_type="tp-heading-title.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="dgm-about-title-box z-index-1 mb-35 tp-el-section text-center">
                                                            <div className="tp-common-subtitle">
                                                                <span className="tp-section-subtitle tp-el-subtitle subtitle-black mb-15 none"
                                                                    data-delay="0">Client</span>
                                                            </div>
                                                            <div className="tp-common-title">
                                                                <h2 className="tp-section-title-grotesk tp-el-title none"
                                                                    data-delay="0">{project.client || 'N/A'}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-element elementor-element-27c950dd e-con-full e-flex e-con e-child"
                                                data-id="27c950dd" data-element_type="container">
                                                <div className="elementor-element elementor-element-62eb7672 elementor-widget__width-initial elementor-widget elementor-widget-tp-heading-title"
                                                    data-id="62eb7672" data-element_type="widget"
                                                    data-widget_type="tp-heading-title.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="dgm-about-title-box z-index-1 mb-35 tp-el-section text-center">
                                                            <div className="tp-common-subtitle">
                                                                <span className="tp-section-subtitle tp-el-subtitle subtitle-black mb-15 none"
                                                                    data-delay="0">Role</span>
                                                            </div>
                                                            <div className="tp-common-title">
                                                                <h2 className="tp-section-title-grotesk tp-el-title none"
                                                                    data-delay="0">{project.role || 'N/A'}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-element elementor-element-1043ec31 e-con-full e-flex e-con e-child"
                                                data-id="1043ec31" data-element_type="container">
                                                <div className="elementor-element elementor-element-36633280 elementor-widget__width-initial elementor-widget-mobile_extra__width-inherit elementor-widget elementor-widget-tp-heading-title"
                                                    data-id="36633280" data-element_type="widget"
                                                    data-widget_type="tp-heading-title.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="dgm-about-title-box z-index-1 mb-35 tp-el-section text-center">
                                                            <div className="tp-common-subtitle">
                                                                <span className="tp-section-subtitle tp-el-subtitle subtitle-black mb-15 none"
                                                                    data-delay="0">Duration</span>
                                                            </div>
                                                            <div className="tp-common-title">
                                                                <h2 className="tp-section-title-grotesk tp-el-title none"
                                                                    data-delay="0">{project.year || project.duration || 'N/A'}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="elementor-element elementor-element-1d81f65 e-con-full e-flex e-con e-child"
                                                data-id="1d81f65" data-element_type="container">
                                                <div className="elementor-element elementor-element-1add6908 elementor-widget__width-initial elementor-widget elementor-widget-tp-heading-title"
                                                    data-id="1add6908" data-element_type="widget"
                                                    data-widget_type="tp-heading-title.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="dgm-about-title-box z-index-1 mb-35 tp-el-section text-center">
                                                            <div className="tp-common-subtitle">
                                                                <span className="tp-section-subtitle tp-el-subtitle subtitle-black mb-15 none"
                                                                    data-delay="0">Designer</span>
                                                            </div>
                                                            <div className="tp-common-title">
                                                                <h2 className="tp-section-title-grotesk tp-el-title none"
                                                                    data-delay="0">{project.designer || 'Edandevil'}</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Main Banner Image */}
                            <div className="elementor-element elementor-element-1e8e6623 e-con-full e-flex e-con e-parent"
                                data-id="1e8e6623" data-element_type="container">
                                <div className="elementor-element elementor-element-1a1e92f1 tp-el-image-h elementor-widget elementor-widget-tp-image-parallax"
                                    data-id="1a1e92f1" data-element_type="widget" data-widget_type="tp-image-parallax.default">
                                    <div className="elementor-widget-container">
                                        <div className="tp-banner-area">
                                            <div className="tp-banner-img tp-el-img tp-el-section">
                                                {detailImageUrl && (
                                                    <img className="w-100" data-speed="0.8"
                                                        src={detailImageUrl} alt={project.title} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Brand Overview Section */}
                            <div className="elementor-element elementor-element-544b3da0 e-flex e-con-boxed e-con e-parent"
                                data-id="544b3da0" data-element_type="container">
                                <div className="e-con-inner">
                                    <div className="elementor-element elementor-element-447f6eb9 e-con-full e-flex e-con e-child"
                                        data-id="447f6eb9" data-element_type="container">
                                        <div className="elementor-element elementor-element-174cb78 elementor-widget elementor-widget-tp-architecture-heading-single"
                                            data-id="174cb78" data-element_type="widget"
                                            data-settings='{"tp_anima_type":"tp_fade_anim"}'
                                            data-widget_type="tp-architecture-heading-single.default">
                                            <div className="elementor-widget-container">
                                                <h3 className="tp-section-title-clash-600 mb-0 tp-el-title tp_fade_anim"
                                                    data-delay=".5">Brand overview</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="elementor-element elementor-element-34bca45e e-con-full e-flex e-con e-child"
                                        data-id="34bca45e" data-element_type="container">
                                        <div className="elementor-element elementor-element-3ed20d9a e-con-full e-flex e-con e-child"
                                            data-id="3ed20d9a" data-element_type="container">
                                            {project.description && (
                                                <div className="elementor-element elementor-element-2244350 elementor-widget elementor-widget-tp-section-heading"
                                                    data-id="2244350" data-element_type="widget"
                                                    data-widget_type="tp-section-heading.default">
                                                    <div className="elementor-widget-container">
                                                        <div className="vz-project-title-box">
                                                            <div className="tp-el-content tp-el-alignment" dangerouslySetInnerHTML={{ __html: renderRichText(project.description) }}>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {(services.length > 0) && (
                                                <div className="elementor-element elementor-element-1e59c042 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                                    data-id="1e59c042" data-element_type="widget" data-widget_type="icon-list.default">
                                                    <ul className="elementor-icon-list-items">
                                                        {services.map((service, index) => (
                                                            <li className="elementor-icon-list-item" key={index}>
                                                                <span className="elementor-icon-list-icon">
                                                                    <i aria-hidden="true" className="fas fa-circle"></i>
                                                                </span>
                                                                <span className="elementor-icon-list-text">{service}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Slider Section - Using gallery */}
                            {gallery.length > 0 && (
                                <div className="elementor-element elementor-element-6207d188 e-con-full e-flex e-con e-parent"
                                    data-id="6207d188" data-element_type="container">
                                    <div className="elementor-element elementor-element-3ab7611d elementor-widget elementor-widget-tp-port-image-slider"
                                        data-id="3ab7611d" data-element_type="widget" data-widget_type="tp-port-image-slider.default">
                                        <div className="elementor-widget-container">
                                            <div className="tp-dark-wrapper">
                                                <div className="tp-pd-2-slider-ptb pb-140">
                                                    <div className="container-fluid">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="tp-pd-2-slider-wrapper">
                                                                    <div className="tp-pd-2-active swiper">
                                                                        <div className="swiper-wrapper">
                                                                            {gallery.slice(0, 4).map((img: any, idx: number) => {
                                                                                const imgUrl = getStrapiMedia(img.url);
                                                                                return (
                                                                                    <div className="swiper-slide" key={idx}>
                                                                                        <div className="tp-pd-2-slider-thumb">
                                                                                            {imgUrl && <img decoding="async" src={imgUrl} alt="" />}
                                                                                        </div>
                                                                                    </div>
                                                                                );
                                                                            })}
                                                                        </div>
                                                                        <div className="tp-pd-2-dot text-center tp-el-bullets"></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}



                            {/* Process Section - Structured Layout */}
                            {project.process && project.process.steps && project.process.steps.length > 0 && (
                                <div className="elementor-element elementor-element-756992a6 e-con-full e-flex e-con e-parent"
                                    data-id="756992a6" data-element_type="container">
                                    <div className="elementor-element elementor-element-2d6a896c e-flex e-con-boxed e-con e-child"
                                        data-id="2d6a896c" data-element_type="container">
                                        <div className="e-con-inner">
                                            {/* Heading */}
                                            {project.process.heading && (
                                                <div className="elementor-element elementor-element-2a50d4f0 elementor-widget elementor-widget-tp-architecture-heading-single"
                                                    data-id="2a50d4f0" data-element_type="widget"
                                                    data-settings='{"tp_anima_type":"tp_fade_anim"}'
                                                    data-widget_type="tp-architecture-heading-single.default"
                                                    style={{ maxWidth: '450px', marginBottom: '40px' }}>
                                                    <div className="elementor-widget-container">
                                                        <h3 className="tp-section-title-clash-600 mb-0 tp-el-title tp_fade_anim"
                                                            data-delay=".5"
                                                            style={{ fontSize: '36px', lineHeight: '1.2', textTransform: 'uppercase' }}
                                                            dangerouslySetInnerHTML={{ __html: project.process.heading.replace(/\n/g, '<br/>') }}>
                                                        </h3>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Steps with Bootstrap Grid */}
                                            <div className="row w-100" style={{ margin: '0 -15px', flexWrap: 'nowrap', display: 'flex' }}>
                                                {project.process.steps.slice(0, 3).map((step: any, index: number) => (
                                                    <div className="col-lg-4 col-md-6 mb-30" key={index} style={{ flex: '0 0 33.333333%', maxWidth: '33.333333%', padding: '0 15px' }}>
                                                        <div className="elementor-element e-con-full e-flex e-con e-child"
                                                            data-id={`process-step-${index}`} data-element_type="container">
                                                            <div className="elementor-element elementor-widget elementor-widget-tp-heading-title"
                                                                data-element_type="widget"
                                                                data-widget_type="tp-heading-title.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="dgm-about-title-box z-index-1 mb-35 tp-el-section text-start">
                                                                        <div className="tp-common-title">
                                                                            <h2 className="tp-section-title-grotesk tp-el-title none"
                                                                                data-delay="0" style={{ fontSize: '18px', fontWeight: 700, lineHeight: '1.3', wordBreak: 'break-word', textTransform: 'uppercase' }}>
                                                                                {step.number || `0${index + 1}`}. {step.title}
                                                                            </h2>
                                                                        </div>
                                                                        <div className="tp-el-content none" data-delay="0" style={{ fontSize: '14px', lineHeight: '1.6', marginTop: '15px' }}>
                                                                            <div dangerouslySetInnerHTML={{ __html: step.description ? step.description.replace(/\n/g, '<br/>') : '' }}></div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            }

                            {/* Fallback for old description2 if process doesn't exist yet */}
                            {!project.process && project.description2 && (
                                <div className="elementor-element e-flex e-con-boxed e-con e-parent"
                                    data-id="desc2-section" data-element_type="container">
                                    <div className="e-con-inner">
                                        <div className="elementor-element e-con-full e-flex e-con e-child"
                                            data-id="desc2-inner" data-element_type="container">
                                            <div className="elementor-element elementor-widget elementor-widget-tp-section-heading"
                                                data-id="desc2-widget" data-element_type="widget"
                                                data-widget_type="tp-section-heading.default">
                                                <div className="elementor-widget-container">
                                                    <div className="vz-project-title-box">
                                                        <div className="tp-el-content tp-el-alignment" dangerouslySetInnerHTML={{ __html: renderRichText(project.description2) }}>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Store Gallery Images - 1 Large + 2 Small Layout */}
                            {project.storeImages && project.storeImages.length > 0 && (
                                <>
                                    {/* First Image (Large) */}
                                    {project.storeImages[0] && (
                                        <div className="elementor-element elementor-element-1e1198b5 e-flex e-con-boxed e-con e-parent"
                                            data-id="1e1198b5" data-element_type="container">
                                            <div className="e-con-inner">
                                                <div className="elementor-element elementor-element-5367842c e-con-full e-flex e-con e-child"
                                                    data-id="5367842c" data-element_type="container">
                                                    <div className="elementor-element elementor-element-2eca9ac tp-el-image-h elementor-widget elementor-widget-tp-image-parallax"
                                                        data-id="2eca9ac" data-element_type="widget"
                                                        data-widget_type="tp-image-parallax.default">
                                                        <div className="elementor-widget-container">
                                                            <div className="tp-banner-area">
                                                                <div className="tp-banner-img tp-el-img tp-el-section">
                                                                    <img className="w-100" data-speed="0.8"
                                                                        src={getStrapiMedia(project.storeImages[0].url) || ''} alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Next Two Images (Side by Side) - Bootstrap Row */}
                                    {project.storeImages.length > 1 && (
                                        <div className="elementor-element elementor-element-741a21fc e-flex e-con-boxed e-con e-parent"
                                            data-id="741a21fc" data-element_type="container"
                                            style={{ paddingBottom: 0, marginBottom: 0 }}>
                                            <div className="e-con-inner" style={{ paddingTop: 0, paddingBottom: 0 }}>
                                                <div className="row w-100">
                                                    {project.storeImages.slice(1, 3).map((img: any, idx: number) => (
                                                        <div className="col-lg-6 col-md-6 mb-30" key={idx}>
                                                            <div className="elementor-element tp-el-image-h elementor-widget elementor-widget-tp-image-parallax"
                                                                data-element_type="widget"
                                                                data-widget_type="tp-image-parallax.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="tp-banner-area">
                                                                        <div className="tp-banner-img tp-el-img tp-el-section">
                                                                            <img className="w-100 img-fluid" data-speed="0.8"
                                                                                src={getStrapiMedia(img.url) || ''} alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Remaining Images - Fallback */}
                                    {project.storeImages.length > 3 && (
                                        <div className="elementor-element e-flex e-con-boxed e-con e-parent"
                                            data-id="gallery-extra" data-element_type="container">
                                            <div className="e-con-inner" style={{ paddingTop: 0, paddingBottom: 0 }}>
                                                <div className="row">
                                                    {project.storeImages.slice(3).map((img: any, idx: number) => (
                                                        <div className="col-lg-6 col-md-6 mb-30" key={idx}>
                                                            <div className="elementor-element tp-el-image-h elementor-widget elementor-widget-tp-image-parallax"
                                                                data-element_type="widget"
                                                                data-widget_type="tp-image-parallax.default">
                                                                <div className="elementor-widget-container">
                                                                    <div className="tp-banner-area">
                                                                        <div className="tp-banner-img tp-el-img tp-el-section">
                                                                            <img className="w-100" data-speed="0.8"
                                                                                src={getStrapiMedia(img.url) || ''} alt="" />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* Fallback to original gallery if storeImages is missing but gallery has extensive items */}
                            {!project.storeImages && gallery.length > 4 && (
                                <div className="elementor-element e-flex e-con-boxed e-con e-parent"
                                    data-id="gallery-extra-section" data-element_type="container" style={{ paddingBottom: '100px' }}>
                                    <div className="e-con-inner" style={{ paddingTop: 0, paddingBottom: 0 }}>
                                        <div className="elementor-element e-con-full e-flex e-con e-child">
                                            <div className="row">
                                                {gallery.slice(4).map((img: any, idx: number) => (
                                                    <div className="col-lg-6 col-md-6 mb-30" key={idx}>
                                                        <div className="elementor-element tp-el-image-h elementor-widget elementor-widget-tp-image-parallax"
                                                            data-element_type="widget"
                                                            data-widget_type="tp-image-parallax.default">
                                                            <div className="elementor-widget-container">
                                                                <div className="tp-banner-area">
                                                                    <div className="tp-banner-img tp-el-img tp-el-section">
                                                                        <img className="w-100" data-speed="0.8"
                                                                            src={getStrapiMedia(img.url) || ''} alt="" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Challenge Section - After Gallery */}
                            {project.challenge && (
                                <div className="container" style={{ marginTop: '30px', marginBottom: '60px' }}>
                                    <div className="row">
                                        <div className="col-12">
                                            {/* Challenge Heading - Same style as Process */}
                                            <div style={{ maxWidth: '450px', marginBottom: '30px' }}>
                                                <h3 className="tp-section-title-clash-600 mb-0 tp-el-title"
                                                    style={{ fontSize: '36px', lineHeight: '1.2', textTransform: 'uppercase' }}>
                                                    Challenge
                                                </h3>
                                            </div>

                                            {/* Challenge Content */}
                                            <div className="tp-el-content"
                                                style={{ fontSize: '16px', lineHeight: '1.7' }}
                                                dangerouslySetInnerHTML={{ __html: renderRichText(project.challenge) }}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Next Project Navigation */}
                            {nextProject && (
                                <div className="elementor-element elementor-element-740464e7 e-con-full e-flex e-con e-parent"
                                    data-id="740464e7" data-element_type="container">
                                    <div className="elementor-element elementor-element-6b2d3c43 elementor-widget elementor-widget-tp-portfolio-navigation"
                                        data-id="6b2d3c43" data-element_type="widget"
                                        data-widget_type="tp-portfolio-navigation.default">
                                        <div className="elementor-widget-container">
                                            <div className="tp-pd-2-np-ptb tp-el-section">
                                                <div className="row">
                                                    <div className="col-lg-12">
                                                        <div className="tp-pd-2-np-content text-center d-flex justify-content-center align-items-center flex-wrap">
                                                            <div className="tp_fade_anim" data-delay=".5" data-fade-from="top" data-ease="bounce">
                                                                <Link className="tp-el-btn-next" href={`/work/${nextProject.slug}`} prefetch={false}>
                                                                    Next work
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                                                            <path d="M13.0637 0.828381C13.0637 0.414168 12.7279 0.0783817 12.3137 0.0783812L5.56371 0.0783814C5.14949 0.0783814 4.81371 0.414168 4.81371 0.828382C4.81371 1.2426 5.14949 1.57838 5.56371 1.57838H11.5637V7.57838C11.5637 7.9926 11.8995 8.32838 12.3137 8.32838C12.7279 8.32838 13.0637 7.9926 13.0637 7.57838L13.0637 0.828381ZM1 12.1421L1.53033 12.6724L12.844 1.35871L12.3137 0.828382L11.7834 0.298051L0.46967 11.6118L1 12.1421Z" fill="currentColor"></path>
                                                                        </svg>
                                                                    </span>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div >
                </div >
            </main >
        </>
    );
}
