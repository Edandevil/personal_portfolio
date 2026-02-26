"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface FooterWrapperProps {
    defaultFooter: ReactNode;
    workFooter: ReactNode;
}

export default function FooterWrapper({ defaultFooter, workFooter }: FooterWrapperProps) {
    const pathname = usePathname();

    // Check if we are on a Work page or Contact page
    const isWorkOrContact = pathname.startsWith("/work") || pathname === "/contact";

    return (
        <>
            {isWorkOrContact ? workFooter : defaultFooter}
        </>
    );
}
