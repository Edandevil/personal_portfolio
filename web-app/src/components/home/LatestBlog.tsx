

import Link from 'next/link';
import { getStrapiMedia } from '@/utils/strapi';

interface BlogPost {
    id: number;
    title: string;
    slug: string;
    category: string;
    publishedDate: string;
    coverImage: any;
}

interface LatestBlogProps {
    data?: {
        title: string;
        blogs: {
            data: BlogPost[];
        } | BlogPost[];
    } | null;
}

export default function LatestBlog({ data }: LatestBlogProps) {
    if (!data) return null;

    const blogsList = Array.isArray(data.blogs) ? data.blogs : (data.blogs?.data || []);

    return (
        <div className="elementor-element elementor-element-ab24492 e-con-full e-flex e-con e-parent"
            data-id="ab24492" data-element_type="container"
            data-settings='{"background_background":"classic"}'>
            <div className="elementor-element elementor-element-1c209b1 e-flex e-con-boxed e-con e-child"
                data-id="1c209b1" data-element_type="container">
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-4b385a5 elementor-widget elementor-widget-tp-section-heading"
                        data-id="4b385a5" data-element_type="widget"
                        data-widget_type="tp-section-heading.default">
                        <div className="elementor-widget-container">
                            <div className="vz-award-style-2">
                                <div className="vz-award-content">
                                    <h2 className="vz-section-title ff-thunder mb-0  tp-el-title tp-el-alignment">
                                        {data.title || "Latest blog"}</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-19a5756 e-con-full e-flex e-con e-child"
                        data-id="19a5756" data-element_type="container">
                        <div className="elementor-element elementor-element-6a47198 elementor-widget elementor-widget-tp-vz-blog-post"
                            data-id="6a47198" data-element_type="widget"
                            data-widget_type="tp-vz-blog-post.default">
                            <div className="elementor-widget-container">
                                <div className="vz-blog-area tp-el-section">
                                    <div className="row">
                                        {blogsList.map((blog: any, index: number) => {
                                            const bData = blog.attributes || blog;
                                            const imageUrl = getStrapiMedia(bData.coverImage?.data?.attributes?.url || bData.coverImage?.url);
                                            return (
                                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12" key={index}>
                                                    <div className="vz-blog-item mb-40">
                                                        <Link href={`/blog/${bData.slug}`}>
                                                            <div className="vz-blog-thumb ripple-image tp-el-thumb">
                                                                {imageUrl && <img loading="lazy" decoding="async" width="905"
                                                                    height="680" src={imageUrl}
                                                                    className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
                                                                    alt={bData.title} />}
                                                            </div>
                                                        </Link>
                                                        <div className="vz-blog-content">
                                                            <span className="vz-blog-category tp-el-tag-title">{bData.category}</span>
                                                            <h4 className="vz-blog-title tp-el-title">
                                                                <Link href={`/blog/${bData.slug}`}>
                                                                    {bData.title} </Link>
                                                            </h4>
                                                            <span className="vz-blog-meta tp-el-date-meta">Published on
                                                                {bData.publishedDate}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
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

