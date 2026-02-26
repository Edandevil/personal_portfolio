export default function AboutToolbox() {
    const toolboxItems = [
        { text: "Motion Graphic", color: "#FFCF68", width: "200", height: "200" },
        { text: "Product Thinking", color: "#68ff89ff", width: "220", height: "220" },
        { text: "Illustration", color: "#FFFFFF", width: "", height: "" },
        { text: "Design Systems", color: "#ffa468ff", width: "220", height: "220" },
        { text: "Vector Illustration", color: "#a8a7ffff", width: "220", height: "220" },
        { text: "Typography", color: "#FFFFFF", width: "", height: "" },
        { text: "Wireframing", color: "#FFFFFF", width: "", height: "" },
        { text: "Photography", color: "#FFFFFF", width: "", height: "" },
        { text: "Animation", color: "#ffbac0ff", width: "", height: "" },
        { text: "Prototyping", color: "#FFFFFF", width: "", height: "" },
        { text: "Front-end", color: "#FFBAE3", width: "", height: "" },
        { text: "Branding", color: "#A9E6FF", width: "", height: "" },
        { text: "Mentorship", color: "#a9c4ffff", width: "", height: "" }
    ];

    return (
        <div className="elementor-element elementor-element-eaa8233 e-con-full e-flex e-con e-parent"
            data-id="eaa8233" data-element_type="container">
            <div className="elementor-element elementor-element-1568aff e-flex e-con-boxed e-con e-child"
                data-id="1568aff" data-element_type="container">
                <div className="e-con-inner">
                    <div className="elementor-element elementor-element-12bf79d elementor-widget elementor-widget-vz-capsule-list"
                        data-id="12bf79d" data-element_type="widget" data-widget_type="vz-capsule-list.default">
                        <div className="elementor-widget-container">
                            <div className="vz-capsule-area am-capsule-style">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="vz-capsule-inner tp-el-section p-relative">
                                            <div className="vz-capsule-top-wrapper p-relative">
                                                <div className="vz-capsule-title-wrapper">
                                                    <span className="vz-capsule-subtitle tp-el-pre-title">About</span>
                                                    <h3 className="vz-section-title ff-thunder fs-80 tp-el-title">Toolbox</h3>
                                                </div>
                                                <div data-vz-throwable-scene="true">
                                                    <div className="vz-capsule-item-wrapper">
                                                        {toolboxItems.map((item, index) => (
                                                            <p data-vz-throwable-el="" key={index}>
                                                                <span className="vz-capsule-item tp-el-ball-title"
                                                                    style={{ background: item.color }}
                                                                    data-width={item.width}
                                                                    data-height={item.height}>
                                                                    {item.text}
                                                                </span>
                                                            </p>
                                                        ))}
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
            </div>
        </div>
    );
}
