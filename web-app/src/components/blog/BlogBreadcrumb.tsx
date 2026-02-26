import React from 'react';
import Link from 'next/link';

export default function BlogBreadcrumb() {
    return (
        <section className="vz-breadcrumb-area vz-breadcrumb-ptb vz-default-breadcrumb">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-12">
                        <div className="vz-breadcrumb-content text-center">
                            <h3 className="vz-breadcrumb-title tp-breadcrumb-title">
                                Blog Standard </h3>
                            <div className="vz-breadcrumb-list mb-5">
                                <span><Link title="Go to Agntix Sites." href="#" className="main-home"><span>Agntix Sites</span></Link>
                                </span> &gt; <span><Link title="Go to VIZON." href="/" className="home"><span>VIZON</span></Link>
                                </span> &gt; <span className="post-root post post-post current-item">Blog Standard</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
