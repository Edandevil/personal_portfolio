"use client";
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        // Reset loading state on route change if needed (non-synchronously)
        // setIsLoading(true); // Removed to prevent cascading renders

        // Simulate loading progress
        let count = 0;
        const countElement = document.querySelector('.count__text');

        // Reset counter display to 0
        if (countElement) {
            countElement.textContent = '0';
        }

        const interval = setInterval(() => {
            count += Math.floor(Math.random() * 15) + 1;

            if (count >= 100) {
                count = 100;
                clearInterval(interval);

                // Hide preloader after reaching 100%
                setTimeout(() => {
                    setIsLoading(false);
                    document.body.style.overflow = 'auto';
                }, 500);
            }

            if (countElement) {
                countElement.textContent = count.toString();
            }
        }, 100);

        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        return () => {
            clearInterval(interval);
            document.body.style.overflow = 'auto';
        };
    }, [pathname]); // Trigger on pathname change

    if (!isLoading) return null;

    return (
        <div id="loader" className="loader" style={{ zIndex: 1000000 }}>
            <div className="loader__wrapper">
                <div className="loader__content">
                    <div className="loader__count">
                        <span className="count__text">0</span>
                        <span className="count__percent">%</span>
                    </div>
                </div>
                <span className="count__bdr"></span>
            </div>
        </div>
    );
}
