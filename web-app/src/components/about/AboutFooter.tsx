import Link from 'next/link';

export default function AboutFooter() {
    return (
        <div data-elementor-type="wp-post" data-elementor-id="9830" className="elementor elementor-9830">
            <div className="elementor-element elementor-element-a88f208 e-flex e-con-boxed e-con e-parent"
                data-id="a88f208" data-element_type="container"
                data-settings='{"background_background":"classic"}'>
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-807de54 elementor-widget-tablet_extra__width-initial elementor-widget elementor-widget-text-editor"
                        data-id="807de54" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                            © 2026 <span style={{ color: '#ffffff' }}>Vizonstudio</span>. All Right Reserved
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-410946d elementor-widget-tablet__width-initial elementor-widget elementor-widget-tp-vz-menu-list"
                        data-id="410946d" data-element_type="widget" data-widget_type="tp-vz-menu-list.default">
                        <div className="elementor-widget-container">
                            <div className="vz-copyright-3-menu text-center text-lg-start">
                                <ul>
                                    <li><Link className="vz-line-lr tp-el-text" href="/">Home</Link></li>
                                    <li><Link className="vz-line-lr tp-el-text" href="/about">About</Link></li>
                                    <li><Link className="vz-line-lr tp-el-text" href="/work">Work</Link></li>
                                    <li><Link className="vz-line-lr tp-el-text" href="/blog">Blog</Link></li>
                                    <li><Link className="vz-line-lr tp-el-text" href="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-82724f3 elementor-widget elementor-widget-html"
                        data-id="82724f3" data-element_type="widget" data-widget_type="html.default">
                        <div className="vz-copyright-3-backtop smooth text-center text-lg-end">
                            <a href="#">
                                back to top
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M7 13V1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M1 7L7 1L13 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
