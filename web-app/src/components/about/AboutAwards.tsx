export default function AboutAwards() {
    const awards = [
        { num: "(001)", img: "award-1.png", title: "Best web design agency", nomination: "Web Excellence Awards", year: "2023" },
        { num: "(002)", img: "award-2.png", title: "Top digital marketing firm", nomination: "Clutch Top Agencies", year: "2022" },
        { num: "(003)", img: "award-3.png", title: "Best web design agency", nomination: "Awwwards Honorable Mention", year: "2024" },
        { num: "(004)", img: "award-4.png", title: "Best web design agency", nomination: "CSS Design Awards", year: "2025" }
    ];

    return (
        <div className="elementor-element elementor-element-219345f e-flex e-con-boxed e-con e-parent"
            data-id="219345f" data-element_type="container">
            <div className="e-con-inner">
                <div className="elementor-element elementor-element-2f9dd48 e-con-full e-flex e-con e-child"
                    data-id="2f9dd48" data-element_type="container">
                    <div className="elementor-element elementor-element-1cf0982 e-con-full e-flex e-con e-child"
                        data-id="1cf0982" data-element_type="container">
                        <div className="elementor-element elementor-element-2cce2e1 elementor-widget elementor-widget-tp-section-heading"
                            data-id="2cce2e1" data-element_type="widget"
                            data-widget_type="tp-section-heading.default">
                            <div className="elementor-widget-container">
                                <div className="vz-project-title-box">
                                    <h3 className="vz-section-title mb-25  tp-el-title tp-el-alignment"
                                        style={{ fontFamily: 'var(--tp-ff-thundermed)' }}>Awards &amp;<br />
                                        recognitions.</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-cfa4b28 e-con-full e-flex e-con e-child"
                        data-id="cfa4b28" data-element_type="container">
                        <div className="elementor-element elementor-element-6534e30 elementor-widget elementor-widget-tp-vz-award-list"
                            data-id="6534e30" data-element_type="widget"
                            data-widget_type="tp-vz-award-list.default">
                            <div className="elementor-widget-container">
                                <div className="vz-award-wrapper">
                                    {awards.map((award, i) => (
                                        <div className="vz-award-item tp-el-boder vz-fade-anim" data-delay={`${0.3 + (i * 0.2)}`} key={i}>
                                            <div className="row">
                                                <div className="col-xl-3 col-lg-2 col-md-1">
                                                    <div className="vz-award-num">
                                                        <span className="tp-el-number">{award.num}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-5">
                                                    <div className="vz-award-category">
                                                        <img decoding="async" src={`/assets/images/${award.img}`} alt="" />
                                                        <span className="tp-el-title">{award.title}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-4 col-md-5">
                                                    <div className="vz-award-nomination">
                                                        <span className="tp-el-nomination">{award.nomination}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-3 col-lg-2 col-md-1">
                                                    <div className="vz-award-year text-md-end">
                                                        <span className="tp-el-year">{award.year}</span>
                                                    </div>
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
        </div>
    );
}
