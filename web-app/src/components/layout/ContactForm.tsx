"use client";

import { useState } from 'react';
import { fetchAPI } from '@/utils/strapi';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        projectType: 'Personal portfolio',
        message: ''
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await fetchAPI('/contact-submissions', {}, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: formData
                }),
            });
            setStatus('success');
            setFormData({
                name: '',
                email: '',
                projectType: 'Personal portfolio',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="vz-footer-3-input-box vz-fade-anim" style={{ opacity: 1 }}>
                <div className="row">
                    <div className="col-xl-4">
                        <div className="vz-footer-3-select mb-10">
                            <span className="wpcf7-form-control-wrap">
                                <select
                                    name="projectType"
                                    className="wpcf7-form-control wpcf7-select vz-select"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#fff', padding: '15px 0' }}
                                >
                                    <option value="Personal portfolio" style={{ color: '#000' }}>Personal portfolio</option>
                                    <option value="Digital Agency" style={{ color: '#000' }}>Digital Agency</option>
                                    <option value="Creative Agency" style={{ color: '#000' }}>Creative Agency</option>
                                    <option value="It Solution" style={{ color: '#000' }}>It Solution</option>
                                </select>
                            </span>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="vz-footer-3-input mb-15">
                            <span className="wpcf7-form-control-wrap">
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Your name"
                                    className="wpcf7-form-control wpcf7-text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#fff', padding: '15px 0' }}
                                />
                            </span>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="vz-footer-3-input mb-15">
                            <span className="wpcf7-form-control-wrap">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Your email address"
                                    className="wpcf7-form-control wpcf7-email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#fff', padding: '15px 0' }}
                                />
                            </span>
                        </div>
                    </div>
                    <div className="col-xl-12">
                        <div className="vz-footer-3-input mb-15" style={{ position: 'relative' }}>
                            <span className="wpcf7-form-control-wrap">
                                <input
                                    name="message"
                                    type="text"
                                    placeholder="How may i help you?"
                                    className="wpcf7-form-control wpcf7-text"
                                    value={formData.message}
                                    onChange={handleChange}
                                    style={{ width: '100%', border: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', background: 'transparent', color: '#fff', padding: '15px 0' }}
                                />
                            </span>
                            <button className="vz-footer-3-btn" type="submit" disabled={status === 'submitting'}
                                style={{
                                    position: 'absolute',
                                    right: 0,
                                    bottom: '15px',
                                    background: 'transparent',
                                    border: 'none',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}>
                                <span>
                                    {status === 'submitting' ? '...' : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M1 11L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                            <path d="M1 1H11V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    )}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                {status === 'success' && (
                    <div className="mt-3 text-success">Message sent successfully!</div>
                )}
                {status === 'error' && (
                    <div className="mt-3 text-danger">Failed to send message. Please try again.</div>
                )}
            </div>
        </form>
    );
}
