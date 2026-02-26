import type { Metadata } from "next";
import { fetchAPI, getStrapiMedia } from "@/utils/strapi";
import qs from "qs";
// import "./globals.css"; // We might not need this if we use the old CSS primarily, or we can keep it for tailwind/reset
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import FooterWrapper from "@/components/layout/FooterWrapper";
import Preloader from "@/components/Preloader";
import ThemeController from "@/components/layout/ThemeController";
import StylesheetLoader from "@/components/StylesheetLoader";
import Script from "next/script";

// export const metadata: Metadata = {
//   title: "Edandevil Portfolio",
//   description: "Portfolio",
// };

export async function generateMetadata(): Promise<Metadata> {
  try {
    const data = await fetchAPI("/global", {
      populate: {
        favicon: true,
        logo: true // Fetching logo too just in case we need it for OG tags later, but mostly for favicon here
      },
    });

    const globalData = data?.data;

    const faviconUrl = getStrapiMedia(globalData?.favicon?.url);
    const faviconMime = globalData?.favicon?.mime || 'image/png';
    const finalUrl = faviconUrl ? `${faviconUrl}?v=${Date.now()}` : "/assets/images/logo-orange.png";

    // Debug
    console.log("DEBUG: Favicon URL:", finalUrl);
    console.log("DEBUG: Favicon MIME:", faviconMime);

    console.log("DEBUG: generateMetadata - Global Data:", JSON.stringify(globalData));

    const siteTitle = globalData?.siteTitle || "Edandevil Portfolio";
    const siteDescription = globalData?.siteDescription || "Portfolio";

    return {
      title: siteTitle,
      description: siteDescription,
      icons: {
        icon: [
          { url: finalUrl, rel: 'icon', type: faviconMime },
          { url: finalUrl, rel: 'shortcut icon', type: faviconMime },
        ],
        apple: [
          { url: finalUrl, rel: 'apple-touch-icon' },
        ],
      },
    };
  } catch (error) {
    // Fallback if API fails
    return {
      title: "Edandevil Portfolio",
      description: "Portfolio",
      icons: {
        icon: "/assets/images/logo-orange.png",
      },
    };
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="wp-singular page-template page-template-elementor_header_footer page wp-embed-responsive wp-theme-vizon tp-magic-cursor no-sidebar elementor-default elementor-template-full-width elementor-kit-7032 elementor-page" style={{ backgroundColor: '#F5F5F5' }}>
        <StylesheetLoader />
        {/* Magic Cursor */}
        <div id="magic-cursor" className="cursor-white-bg">
          <div id="ball" data-text-color="#000" style={{ backgroundColor: "#000" }} data-small-cursor="#000"
            data-big-cursor="#fff"></div>
        </div>

        {/* Preloader */}
        <Preloader />

        {/* Dynamic Theme Controller (Background Color) */}
        <ThemeController />

        {/* Force Preloader Hide Script */}


        <Header />

        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
            <FooterWrapper defaultFooter={<Footer />} workFooter={<Footer />} />
          </div>
        </div>

        <div className="back-to-top-wrapper">
          <button id="back_to_top" type="button" className="back-to-top-btn">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
        <div className="vz-blur-bottom"></div>

        {/* Core Scripts - Order is critical */}
        <Script src="/assets/js/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/jquery-migrate.min.js" strategy="beforeInteractive" />

        {/* Libs */}
        <Script src="/assets/js/bootstrap-bundle.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-bundle.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper-gl.js" strategy="afterInteractive" />
        <Script src="/assets/js/splitting.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/split-type.js" strategy="afterInteractive" />
        <Script src="/assets/js/plugin.js" strategy="afterInteractive" />
        <Script src="/assets/js/scroll-magic.js" strategy="afterInteractive" />
        <Script src="/assets/js/parallax-scroll.js" strategy="afterInteractive" />
        <Script src="/assets/js/parallax-slider.js" strategy="afterInteractive" />
        <Script src="/assets/js/distortion-img.js" strategy="afterInteractive" />
        <Script src="/assets/js/portfolio-slider-1.js" strategy="afterInteractive" />

        {/* Visual Effects */}
        <Script src="/assets/js/tp-cursor.js" strategy="afterInteractive" />
        <Script src="/assets/js/nice-select.js" strategy="afterInteractive" />
        <Script src="/assets/js/magnific-popup.js" strategy="afterInteractive" />
        <Script src="/assets/js/imagesloaded.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope-pkgd.js" strategy="afterInteractive" />
        <Script src="/assets/js/purecounter.js" strategy="afterInteractive" />
        <Script src="/assets/js/slick.js" strategy="afterInteractive" />
        <Script src="/assets/js/slider-active.js" strategy="afterInteractive" />
        <Script src="/assets/js/slider-active-px.js" strategy="afterInteractive" />
        <Script src="/assets/js/atropos.js" strategy="afterInteractive" />
        <Script src="/assets/js/Observer.min.js" strategy="afterInteractive" />

        <Script src="/assets/js/matter.js" strategy="afterInteractive" />
        <Script src="/assets/js/throwable.js" strategy="afterInteractive" />
        <Script src="/assets/js/ripple.js" strategy="afterInteractive" />

        {/* Main Logic */}
        <Script src="/assets/js/main.js" strategy="afterInteractive" />
        <Script src="/assets/js/main-px.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
