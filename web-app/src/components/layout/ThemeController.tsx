"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ThemeController() {
    const pathname = usePathname();

    useEffect(() => {
        // About page should be white, others #F5F5F5
        // Using strict check for /about, but could relax to includes if needed
        if (pathname === '/about' || pathname === '/contact') {
            document.body.style.backgroundColor = '#ffffff';
        } else {
            document.body.style.backgroundColor = '#F5F5F5';
        }
    }, [pathname]);

    return null;
}
