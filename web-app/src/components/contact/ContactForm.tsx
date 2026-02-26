"use client";
import React from 'react';

export default function ContactForm() {
    return (
        <div className="elementor-element elementor-element-f8d1a76 e-flex e-con-boxed e-con e-parent"
            data-id="f8d1a76" data-element_type="container">
            <div className="e-con-inner">
                <div className="elementor-element elementor-element-70860ff e-con-full e-flex e-con e-child"
                    data-id="70860ff" data-element_type="container">
                    <div className="elementor-element elementor-element-67f6c72 elementor-widget elementor-widget-tp-vz-heading-single"
                        data-id="67f6c72" data-element_type="widget"
                        data-widget_type="tp-vz-heading-single.default">
                        <div className="elementor-widget-container">
                            <div className="vz-project-title-box">
                                <div className="vz-fade-anim" data-delay="0.5">
                                    <h2 className="tp-el-title tp-el-alignment"
                                        style={{ fontFamily: 'var(--tp-ff-thundermed)' }}>I&apos;m Interested in...</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="elementor-element elementor-element-4fc2fb5 elementor-widget elementor-widget-tp-contact-form"
                        data-id="4fc2fb5" data-element_type="widget" data-widget_type="tp-contact-form.default">
                        <div className="elementor-widget-container">
                            <div className="tp-footer-8-form mb-45 tp-el-section  ">
                                <div className="p-relative">
                                    <div className="wpcf7 no-js" id="wpcf7-f12625-p12615-o1" lang="en-US" dir="ltr">
                                        <form action="#" method="post" className="wpcf7-form init">
                                            <div className="vz-contact-me-style">
                                                <div className="tp-contact-me-interest-wrapper pb-70">
                                                    <div className="tp-contact-me-form-category-list">
                                                        <span className="wpcf7-form-control-wrap">
                                                            <span className="wpcf7-form-control wpcf7-checkbox">
                                                                <span className="wpcf7-list-item first"><label><input type="checkbox" name="interest[]" value="Branding" /><span className="wpcf7-list-item-label">Branding</span></label></span>
                                                                <span className="wpcf7-list-item"><label><input type="checkbox" name="interest[]" value="Design Concept" /><span className="wpcf7-list-item-label">Design Concept</span></label></span>
                                                                <span className="wpcf7-list-item"><label><input type="checkbox" name="interest[]" value="App Design" /><span className="wpcf7-list-item-label">App Design</span></label></span>
                                                                <span className="wpcf7-list-item"><label><input type="checkbox" name="interest[]" value="Android Development" /><span className="wpcf7-list-item-label">Android Development</span></label></span>
                                                                <span className="wpcf7-list-item"><label><input type="checkbox" name="interest[]" value="iOS Development" /><span className="wpcf7-list-item-label">iOS Development</span></label></span>
                                                                <span className="wpcf7-list-item"><label><input type="checkbox" name="interest[]" value="Web Design" /><span className="wpcf7-list-item-label">Web Design</span></label></span>
                                                                <span className="wpcf7-list-item last"><label><input type="checkbox" name="interest[]" value="Logo" /><span className="wpcf7-list-item-label">Logo</span></label></span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="tp-contact-me-interest-form">
                                                    <h3 className="tp-contact-me-interest-title">Request a Quote</h3>
                                                    <div className="tp-contact-me-interest-form-wrap">
                                                        <div className="row">
                                                            <div className="col-lg-6">
                                                                <div className="tp-contact-form-input mb-20">
                                                                    <label>Full name*</label>
                                                                    <span className="wpcf7-form-control-wrap">
                                                                        <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text" type="text" name="your-name" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6">
                                                                <div className="tp-contact-form-input mb-20">
                                                                    <label>Email address*</label>
                                                                    <span className="wpcf7-form-control-wrap">
                                                                        <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-email wpcf7-text" type="email" name="your-email" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="tp-contact-form-input mb-20">
                                                                    <label>Website link</label>
                                                                    <span className="wpcf7-form-control-wrap">
                                                                        <input size={40} maxLength={400} className="wpcf7-form-control wpcf7-text" type="text" name="your-website" />
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12">
                                                                <div className="tp-contact-form-input mb-20">
                                                                    <label>How Can We Help You*</label>
                                                                    <span className="wpcf7-form-control-wrap">
                                                                        <textarea cols={40} rows={10} maxLength={2000} className="wpcf7-form-control wpcf7-textarea" name="your-message"></textarea>
                                                                    </span>
                                                                </div>
                                                                <div className="tp-contact-form-btn">
                                                                    <button className="w-100" type="submit">
                                                                        <span>
                                                                            <span className="text-1">Send Message</span>
                                                                            <span className="text-2">Send Message</span>
                                                                        </span>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
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
