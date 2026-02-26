import React from 'react';

// Project Data for Blog Posts
const blogPosts = [
    {
        id: 13119,
        slug: "always-aim-forward",
        title: "Always Aim Forward",
        author: "Vizon",
        date: "October 9, 2025",
        category: "Creative",
        image: "/assets/images/project-6-2.jpg",
        excerpt: "We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary. My preferred tools are more modern javascript[...]"
    },
    {
        id: 13117,
        slug: "stay-focused-on-success",
        title: "Stay Focused on Success",
        author: "Vizon",
        date: "October 9, 2025",
        category: "Creative",
        image: "/assets/images/project-5-2.jpg",
        excerpt: "We love to bring designs to life as a developer, and I aim to do this using whatever front end tools are necessary. My preferred tools are more modern javascript[...]"
    }
];

export default function BlogContent() {
    return (
        <section className="tp-blogpost-area postbox-area pt-110 pb-115 z-index-1">
            <div className="container container-1330">
                <div className="row justify-content-center">
                    <div className="col-xxl-8 col-xl-8 col-lg-8">
                        <div className="postbox-wrapper">
                            <header>
                                <h1 className="page-title screen-reader-text">Blog Standard</h1>
                            </header>

                            {blogPosts.map(post => (
                                <article key={post.id} id={`post-${post.id}`} className={`tp-postbox postbox-item mb-30 post-${post.id} post type-post status-publish format-standard has-post-thumbnail hentry category-creative`}>
                                    <div className="postbox-author-wrap d-flex align-items-center justify-content-between mb-30">
                                        <div className="postbox-author-box d-flex align-items-center ">
                                            <div className="postbox-author-img">
                                                <img src="/assets/images/avater-2.png" alt="img" />
                                            </div>
                                            <div className="postbox-author-info">
                                                <h4 className="postbox-author-name">
                                                    <a href="#">{post.author}</a>
                                                </h4>
                                            </div>
                                        </div>
                                        <div className="postbox-meta">
                                            <span>{post.date}</span>
                                        </div>
                                    </div>

                                    <div className="postbox-thumb mb-35">
                                        <a href={`/blog/${post.slug}`}>
                                            <img width="905" height="680" src={post.image} className="attachment-post-thumbnail size-post-thumbnail wp-post-image" alt="" decoding="async" />
                                        </a>
                                    </div>

                                    <div className="postbox-content">
                                        <span className="postbox-tag">
                                            <a href="#" rel="tag">{post.category}</a>
                                        </span>
                                        <h3 className="postbox-title mb-25">
                                            <a href={`/blog/${post.slug}`}>{post.title}</a>
                                        </h3>
                                        <div className="tp-postbox-excerpt">
                                            <p>{post.excerpt}</p>
                                        </div>
                                        <div className="tp-postbox-btn">
                                            <a href={`/blog/${post.slug}`} className="tp-btn-yellow-border postbox-btn">
                                                <span>
                                                    <span className="text-1">Read More</span>
                                                    <span className="text-2">Read More</span>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ))}

                            <div className="tp-pagination basic-pagination mt-50 mb-0">
                                <ul>
                                    <li><span aria-current="page" className="page-numbers current">1</span></li>
                                    <li><a className="page-numbers" href="#">2</a></li>
                                    <li><a className="page-numbers" href="#">3</a></li>
                                    <li><a className="next page-numbers" href="#"><i className="fa-regular fa-angle-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xxl-4 col-xl-4 col-lg-4">
                        <div className="sidebar-wrapper">
                            <div id="search-2" className="sidebar-widget tp-blog-sidebar-widget mb-45 widget_search">
                                <form className="sidebar-search" action="#" method="get">
                                    <div className="sidebar-search-input">
                                        <input type="text" name="s" placeholder="Search ...." />
                                        <button type="submit">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.9999 19L14.6499 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z" stroke="currentColor" strokeOpacity="0.8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div id="agntix_author_widget-2" className="sidebar-widget tp-blog-sidebar-widget mb-45 widget_agntix_author_widget">
                                <div className="sidebar-widget-author text-center">
                                    <div className="sidebar-widget-author-img">
                                        <img src="/assets/images/avater-2.png" alt="" />
                                    </div>
                                    <div className="sidebar-widget-author-content">
                                        <h4 className="sidebar-widget-author-name">Richard Scott</h4>
                                        <span>Content writer at Kanik</span>
                                        <p>Crafting Digital Experiences<br /> with Purpose!</p>
                                    </div>
                                    <div className="sidebar-widget-author-social mb-30">
                                        <a href="#"><span>Linkedin</span></a>
                                        <a href="#"><span>Twitter</span></a>
                                        <a href="#"><span>Facebook</span></a>
                                    </div>
                                    <div className="sidebar-widget-author-btn">
                                        <a className="tp-btn-px sidebar-btn w-100" href="#">
                                            <span>
                                                <span className="text-1">Vizon Theme</span>
                                                <span className="text-2">Vizon Theme</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div id="categories-2" className="sidebar-widget tp-blog-sidebar-widget mb-45 widget_categories">
                                <h3 className="sidebar-widget-title">Category</h3>
                                <ul>
                                    <li className="cat-item"><a href="#">Business<span> (1)</span></a></li>
                                    <li className="cat-item"><a href="#">Creative<span> (2)</span></a></li>
                                    <li className="cat-item"><a href="#">Experience<span> (1)</span></a></li>
                                    <li className="cat-item"><a href="#">Studio News<span> (2)</span></a></li>
                                    <li className="cat-item"><a href="#">UX Designer<span> (1)</span></a></li>
                                </ul>
                            </div>
                            <div id="tp-recent-posts-2" className="sidebar-widget tp-blog-sidebar-widget mb-45 widget_tp-recent-posts">
                                <h3 className="sidebar-widget-title">Latest Posts</h3>
                                <div className="tp-blog-sidebar-post rc-post-wrap">
                                    {blogPosts.map(post => (
                                        <div key={post.id} className="rc-post d-flex align-items-center">
                                            <div className="rc-post-thumb">
                                                <a href={`/blog/${post.slug}`}>
                                                    <img width="150" height="113" src={post.image} className="attachment-thumbnail size-thumbnail wp-post-image" alt="" decoding="async" />
                                                </a>
                                            </div>
                                            <div className="rc-post-content">
                                                <div className="rc-post-category">
                                                    <a href="#">{post.category}</a>
                                                </div>
                                                <h3 className="rc-post-title">
                                                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                                                </h3>
                                                <div className="rc-post-meta">
                                                    <span>{post.date}</span>
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
    );
}
