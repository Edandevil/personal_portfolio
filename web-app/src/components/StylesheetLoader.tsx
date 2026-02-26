'use client';

import { useEffect } from 'react';

export default function StylesheetLoader() {
    useEffect(() => {
        // This component ensures stylesheets are properly loaded
        // by injecting them into the document head on the client side
        const stylesheets = [
            '/assets/css/global.css',
            '/assets/css/google-fonts.css',
            '/style/style.css',
            '/assets/css/post-13561.css',
            '/assets/css/custom-frontend.min.css',
            '/assets/css/template-frontend.min.css',
            '/assets/css/elementor-icons.min.css',
            '/assets/css/post-7032.css',
            '/assets/css/post-7487.css',
            '/assets/css/vizon-core.css',
            '/assets/css/post-10679.css',
            '/assets/css/post-12615.css',
            '/assets/css/post-11865.css',
            '/assets/css/post-12880.css',
            '/assets/css/post-9830.css',
        ];

        stylesheets.forEach((href, index) => {
            // Check if stylesheet already exists
            const existing = document.querySelector(`link[href="${href}"]`);
            if (!existing) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                document.head.appendChild(link);
            }
        });
    }, []);

    return null;
}
