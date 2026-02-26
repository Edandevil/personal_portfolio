'use client';

import React, { useState, useEffect, ReactNode } from 'react';

interface HeaderScrollWrapperProps {
    children: ReactNode;
}

export default function HeaderScrollWrapper({ children }: HeaderScrollWrapperProps) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Threshold for switching to the floating dock
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`header-dock-container ${isScrolled ? 'scrolled' : ''}`}>
            {children}
        </div>
    );
}
