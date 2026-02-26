"use client";
import { useEffect, useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import Footer from "@/components/layout/Footer";
import { blogs } from '@/data/blogs';

export default function BlogDetail() {
    const params = useParams();
    const slug = params?.slug as string;
    const [blog, setBlog] = useState<typeof blogs[0] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const foundBlog = blogs.find(b => b.id === slug);
        if (foundBlog) {
            setBlog(foundBlog);
        }
        setLoading(false);

        // Reset scroll position with a delay to ensure DOM is ready and GSAP catches up
        const handleScrollReset = () => {
            window.scrollTo(0, 0);

            // @ts-ignore
            if (typeof window !== 'undefined' && window.ScrollSmoother) {
                // @ts-ignore
                const smoother = window.ScrollSmoother.get();
                if (smoother) {
                    smoother.scrollTop(0);
                }
            }
        };

        // Immediate attempt
        handleScrollReset();

        // Delayed attempt to account for render/paint timing
        const timer1 = setTimeout(handleScrollReset, 10);
        const timer2 = setTimeout(handleScrollReset, 200);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, [slug]);

    if (loading) return <div>Loading...</div>;
    if (!blog) return notFound();

    // Calculate category counts
    const categoryCounts = blogs.reduce((acc, curr) => {
        acc[curr.category] = (acc[curr.category] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    return (
        <>
            <main>
                {/* Breadcrumb Section */}
                <section className="vz-breadcrumb-area vz-breadcrumb-ptb vz-default-breadcrumb">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-12">
                                <div className="vz-breadcrumb-content text-center">
                                    <h3 className="vz-breadcrumb-title tp-breadcrumb-title">
                                        {blog.title}
                                    </h3>
                                    <div className="vz-breadcrumb-list mb-5">
                                        <span><Link href="/" className="main-home">Home</Link></span>
                                        &nbsp;&gt;&nbsp;
                                        <span><Link href="/blog" className="home">Blog</Link></span>
                                        &nbsp;&gt;&nbsp;
                                        <span className="current-item">{blog.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Content Section */}
                <section className="tp-blogpost-area postbox-area pt-110 pb-115 z-index-1">
                    <div className="container container-1330">
                        <div className="row justify-content-center">
                            <div className="col-xxl-8 col-xl-8 col-lg-8">
                                <div className="postbox-wrapper">
                                    <article className="tp-postbox postbox-item mb-30 has-post-thumbnail hentry">
                                        <div className="postbox-thumb mb-35">
                                            <img src={blog.image} alt={blog.title} style={{ width: '100%', height: 'auto' }} />
                                        </div>

                                        <div className="postbox-meta mb-30">
                                            <span><a href="#">{blog.category}</a></span>
                                            <span>{blog.date}</span>
                                        </div>

                                        <h1 className="postbox-title mb-40">{blog.title}</h1>

                                        <div className="postbox-content" dangerouslySetInnerHTML={{ __html: blog.content }}></div>

                                        <div className="postbox-tag-wrapper mt-50">
                                            <span className="postbox-tag-label" style={{ fontWeight: 'bold' }}>Tags: </span>
                                            <span className="postbox-tag">
                                                {blog.tags.map((tag, index) => (
                                                    <span key={index}>
                                                        <a href="#">{tag}</a>
                                                        {index < blog.tags.length - 1 && ', '}
                                                    </span>
                                                ))}
                                            </span>
                                        </div>
                                    </article>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="col-xxl-4 col-xl-4 col-lg-4">
                                <div className="sidebar-wrapper">
                                    <div className="sidebar-widget tp-blog-sidebar-widget mb-45 widget_search">
                                        <form className="sidebar-search" action="#" method="get">
                                            <div className="sidebar-search-input">
                                                <input type="text" placeholder="Search ...." />
                                                <button type="submit">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M18.9999 19L14.6499 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="currentColor" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </form>
                                    </div>

                                    {/* Author Widget */}
                                    <div className="sidebar-widget tp-blog-sidebar-widget mb-45">
                                        <div className="sidebar-widget-author text-center">
                                            <div className="sidebar-widget-author-img">
                                                <img src="/assets/images/avater-2.png" alt="" />
                                            </div>
                                            <div className="sidebar-widget-author-content">
                                                <h4 className="sidebar-widget-author-name">Richard Scott</h4>
                                                <span>Content writer at Kanik</span>
                                                <p>Crafting Digital Experiences<br />with Purpose!</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Category Widget */}
                                    <div className="sidebar-widget tp-blog-sidebar-widget mb-45 widget_categories">
                                        <h3 className="sidebar-widget-title">Category</h3>
                                        <ul>
                                            {Object.entries(categoryCounts).map(([cat, count]) => (
                                                <li key={cat} className="cat-item">
                                                    <a href="#">{cat}<span> ({count})</span></a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Recent Posts - Using Valid Links */}
                                    <div className="sidebar-widget tp-blog-sidebar-widget mb-45">
                                        <h3 className="sidebar-widget-title">Latest Posts</h3>
                                        <div className="tp-blog-sidebar-post rc-post-wrap">
                                            {blogs.slice(0, 3).map((b) => (
                                                <div key={b.id} className="rc-post d-flex align-items-center">
                                                    <div className="rc-post-thumb">
                                                        <Link href={`/blog/${b.id}`}>
                                                            <img width="150" height="113" src={b.image} alt={b.title} style={{ objectFit: 'cover' }} />
                                                        </Link>
                                                    </div>
                                                    <div className="rc-post-content">
                                                        <div className="rc-post-category">
                                                            <a href="#">{b.category}</a>
                                                        </div>
                                                        <h3 className="rc-post-title">
                                                            <Link href={`/blog/${b.id}`}>{b.title}</Link>
                                                        </h3>
                                                        <div className="rc-post-meta">
                                                            <span>{b.date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
